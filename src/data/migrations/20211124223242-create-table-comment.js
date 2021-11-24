module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('comments', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        comment: {
          type: Sequelize.TEXT
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
    return queryInterface.dropTable('organizations')
  }
}
