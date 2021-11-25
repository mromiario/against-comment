const express = require('express')
const router = express.Router()
const { 
  createComment,
  getComments,
  deleteComments
} = require('../controllers/comments')

const { 
  getMembers
} = require('../controllers/members')

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

router.get('/:orgName/comments', async (req, res, next) => {
  try {
    const result = await getComments({ organization_name: req.params.orgName })
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:orgName/members', async (req, res, next) => {
  try {
    const result = await getMembers({ organization_name: req.params.orgName })
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.delete('/:orgName/comments', async (req, res, next) => {
  try {
    await deleteComments({ organization_name: req.params.orgName })
    res.status(200).json()
  } catch (error) {
    next(error)
  }
})
module.exports = router