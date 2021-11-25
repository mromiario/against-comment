module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('members', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        login: {
          type: Sequelize.STRING
        },
        follower: {
          type: Sequelize.INTEGER
        },
        following: {
          type: Sequelize.INTEGER
        },
        organization_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'organizations',
            key: 'id'
          }
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deleted_at: {
          type: Sequelize.DATE
        }
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('members')
  }
}
