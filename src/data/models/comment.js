const organization = require('./organization')

module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    'comment',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comment: {
        type: DataTypes.TEXT
      },
      organization_id: {
        type: DataTypes.INTEGER,
        references: {
          model: organization,
          key: 'id',
        }
      }
    },
    {
      paranoid: true

    }
  )
  comment.associate = function (models) {
    comment.belongsTo(models.organization, { foreignKey: 'organization_id'})
  }
  return comment
}
