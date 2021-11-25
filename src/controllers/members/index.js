const {
		member,
		organization
  } = require('../../data/models')
  module.exports = {
	getMembers: async (payload) => {
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

		return await member.findAll({
			where: {
				organization_id: existingOrganization.id
			},
			attributes: ['id', 'login', 'follower', 'following', 'created_at', 'updated_at'],
			order: [['follower', 'desc']]
			})
		}
  }