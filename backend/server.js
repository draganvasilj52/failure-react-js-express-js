const express = require('express')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const failureRoutes = require('./routes/failures-routes')

const app = express()
app.use(express.json())

app.use('/uploads/images', express.static(path.join('uploads', 'images')))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')

  next()
})

app.use('/failures', failureRoutes)

app.use((req, res, next) => {
  const error = new Error('Page not found')
  error.code = 404
  return next(error)
})

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err)
    })
  }
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 500)
  res.json({
    message: error.message || 'Something went wrong, unknown error',
  })
})

mongoose
  .connect(
    'mongodb+srv://draganvasilj:draganvasilj@cluster0.hdf1vjr.mongodb.net/',
    {
      dbName: 'failureDB',
    }
  )
  .then(() => {
    app.listen(5000)
  })
  .catch(() => {
    console.log('connection to mongoDB failes')
  })
