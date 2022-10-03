const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FailuresSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  failure: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  address: { type: String, required: true },
  /*   location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    },
    formattedAddress: String,
  }, */
  coordinates: {
    type: [Number],
  },
})

module.exports = mongoose.model('Failure', FailuresSchema)
