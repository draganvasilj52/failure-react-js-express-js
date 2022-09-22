const express = require('express')
const ExpressValidator = require('express-validator')
const failureController = require('../controllers/failure-controller')
const fileUpload = require('../middleware/file-upload')
const router = express.Router()

router.get('/', failureController.getAllFailures)

router.post(
  '/create',
  fileUpload.single('image'),
  [
    ExpressValidator.check('firstName').not().isEmpty(),
    ExpressValidator.check('lastName').not().isEmpty(),
    ExpressValidator.check('failure').not().isEmpty(),
    ExpressValidator.check('address').not().isEmpty(),
  ],
  failureController.createFailure
)

module.exports = router
