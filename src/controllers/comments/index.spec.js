require('dotenv').config()
let chai = require('chai');
let expect = chai.expect;
let commentController = require('./index')
const { comment, organization } = require('../../data/models')

const expectThrowsAsync = async (method) => {
    let error = null
    try {
      await method()
    } catch (err) {
      error = err
    }
    expect(error).to.be.an('Error')
  }

describe('Comment Unit Testing', () => {
  it('Create comment - It should throw error if comment is null', async () => {
    expectThrowsAsync((() => commentController.createComment({})))
  })

  it('Create comment - It should throw error if comment is whitespace', async () => {
    expectThrowsAsync((() => commentController.createComment({ comment: '  '})))
  })

  it('Create comment - It should create new comment with valid parameters', async () => {
    const result = await commentController.createComment({
        organization_name: `New_${+new Date()}`,
        body: {
            comment: 'Unit Testing'
        }
    })
    expect(result).to.be.an('object')
    expect(result).to.have.property('body')
    expect(result.body).to.have.property('comment')
    expect(result).to.have.property('organization_name')
  })

  it('Get comments - It should throw error if organization not found', async () => {
    expectThrowsAsync((() => commentController.getComments({ organization_name: `${+new Date()}`})))
  })

  it('Get comments - It should get comment with valid parameter', async () => {
    const organization_name = `New_${+new Date()}`
    await commentController.createComment({
        organization_name,
        body: {
            comment: 'Unit Testing'
        }
    })

    const result = await commentController.getComments({ organization_name })
    expect(result).to.be.an('array')
    expect(result[0]).to.have.property('comment')
    expect(result[0]).to.have.property('organization_id')
  })

  it('Delete comments - It should throw error if organization not found', async () => {
    expectThrowsAsync((() => commentController.deleteComments({ organization_name: `${+new Date()}`})))
  })

  it('Delete comments - It should delete comment with valid parameter', async () => {
    const organization_name = `New_${+new Date()}`
    await commentController.createComment({
        organization_name,
        body: {
            comment: 'Unit Testing'
        }
    })

    await commentController.deleteComments({ organization_name })
    const existingOrganization = await organization.findOne({
        where: {
            name: organization_name
        },
        attributes: ['id']
    })
    const result = await comment.findAll({ 
        where: {
            organization_id: existingOrganization.id
        }
    })
    expect(result).to.be.an('array')
    expect(result).to.have.lengthOf(0)
  })
})