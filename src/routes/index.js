const express = require('express')
const router = express.Router()
const { createComment } = require('../controllers/comments')

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Hello, I'm M Romi Ario. Please Read the README"
    })
  })

router.post('/:orgName/comments', async (req, res, next) => {
  try {
    const result = await createComment({ body: req.body, organization_name: req.params.orgName })
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})

module.exports = router