const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
      message: "Hello, I'm M Romi Ario. Please Read the README"
    })
  })

module.exports = router