module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define(
    'organization',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
      }
    },
    {
      paranoid: true
    }
  )
  return organization
}
