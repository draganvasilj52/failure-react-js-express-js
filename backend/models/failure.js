const mongoose = require('mongoose')
const Schema = mongoose.Schema
const geocoder = require('../utils/geocoder')

const FailuresSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  failure: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    },
    formattedAddress: String,
  },
})

FailuresSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.address)
  this.location = {
    type: 'Point',
    coordinates: [loc[0].latitude, loc[0].longitude],
    formattedAddress: loc[0].formattedAddress,
  }
  next()
})

module.exports = mongoose.model('Failure', FailuresSchema)
