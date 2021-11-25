const { organization } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const existingOrganization = await organization.findOne({
      where:  {
        id: 139
      }
    })

    if (!existingOrganization) {
      await organization.create({
        id: 139,
        name: 'member_available'
      })
    }
    return queryInterface.bulkInsert('members', [{
      login: 'A',
      follower: 123,
      following: 300,
      organization_id: 139,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      login: 'B',
      follower: 400,
      following: 303,
      organization_id: 139,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      login: 'C',
      follower: 500,
      following: 303,
      organization_id: 139,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      login: 'D',
      follower: 600,
      following: 303,
      organization_id: 139,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      login: 'E',
      follower: 100,
      following: 303,
      organization_id: 139,
      created_at: new Date(),
      updated_at: new Date()
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('members', [{
      organization_id: 139
    }], {})
  }
}
