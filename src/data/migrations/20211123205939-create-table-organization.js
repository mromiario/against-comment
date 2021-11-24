module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('organizations', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING
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
      .then(() =>
        queryInterface.addIndex('organizations', ['name', 'created_at'])
      )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('organizations')
  }
}
