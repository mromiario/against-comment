const {
  organization,
  comment
} = require('../../data/models')
module.exports = {
	createComment: async (payload) => {
		const {
			organization_name,
			body
		} = payload

		// validate comment exist
		if (!body.comment) {
			const err = new Error()
			err.statusCode = 400
			err.message = 'Comment is required'
			throw err
		}

		// validate comment empty
		if (!body.comment.trim()) {
			const err = new Error()
			err.statusCode = 400
			err.message = 'Comment is should not be empty'
			throw err
		}

		let existingOrganization = await organization.findOne({
			where: {
				name: organization_name
      		},
      		attributes: ['id']
		}) 

		if (!existingOrganization) {
      		existingOrganization = await organization.create({
        		name: organization_name
      		})
   		}

		await comment.create({
			comment: body.comment,
			organization_id: existingOrganization.id
		})

		return payload
	},
	getComments: async (payload) => {
		const {
			organization_name
		} = payload

		let existingOrganization = await organization.findOne({
			where: {
				name: organization_name
      		},
      		attributes: ['id']
		}) 

		if (!existingOrganization) {
			const err = new Error()
			err.statusCode = 404
			err.message = 'Organization is not found'
			throw err
    	}

		return await comment.findAll({
			where: {
				organization_id: existingOrganization.id
			}
		})
	},
	deleteComments: async (payload) => {
		const {
			organization_name
		} = payload

		let existingOrganization = await organization.findOne({
			where: {
				name: organization_name
      		},
      		attributes: ['id']
		}) 

		if (!existingOrganization) {
			const err = new Error()
			err.statusCode = 404
			err.message = 'Organization is not found'
			throw err
    	}

    	await comment.destroy({
			where: {
				organization_id: existingOrganization.id
			}
   		 })
  	}
}