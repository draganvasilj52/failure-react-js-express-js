const Failure = require('../models/failure')
const { validationResult } = require('express-validator')

const getAllFailures = async (req, res, next) => {
  let failures
  try {
    failures = await Failure.find()
  } catch (err) {
    const error = new Error('Cannot fetch failures')
    error.code = 500
    return next(error)
  }
  setTimeout(() => {
    res.json({ failures })
  }, 3000)
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

  const newFailure = new Failure({
    firstName,
    lastName,
    address,
    failure,
    image: req.file.path,
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
