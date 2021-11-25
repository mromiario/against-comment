const organization = require('./organization')

module.exports = (sequelize, DataTypes) => {
  const member = sequelize.define(
    'member',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      login: {
        type: DataTypes.STRING
      },
      follower: {
        type: DataTypes.INTEGER
      },
      following: {
        type: DataTypes.INTEGER
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
  member.associate = function (models) {
    member.belongsTo(models.organization, { foreignKey: 'organization_id'})
  }
  return member
}
