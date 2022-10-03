const Failure = require('../models/failure')
const { validationResult } = require('express-validator')
const axios = require('axios')

const getAllFailures = async (req, res, next) => {
  let failures
  try {
    failures = await Failure.find()
  } catch (err) {
    const error = new Error('Cannot fetch failures')
    error.code = 500
    return next(error)
  }

  res.json({ failures })
}

const createFailure = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const error = new Error('All fields are required.')
    error.code = 422
    return next(error)
  }
  const { firstName, lastName, failure, address } = req.body

  if (!req.file) {
    const error = new Error('Add Image.')
    error.code = 422
    return next(error)
  }

  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${process.env.access_token}`
    )

    const data = response.data

    coordinates = data.features[0].geometry.coordinates
  } catch (err) {
    console.log(err)
  }

  const newFailure = new Failure({
    firstName,
    lastName,
    address,
    failure,
    image: req.file.path,
    coordinates,
  })

  try {
    await newFailure.save()
  } catch (err) {
    const error = new Error('Submiting Failed')
    error.code = 500
    return next(error)
  }

  res.status(201).json({ newFailure })
}

exports.createFailure = createFailure
exports.getAllFailures = getAllFailures
