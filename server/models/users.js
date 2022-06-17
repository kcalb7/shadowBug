'use strict'

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      isActive: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      userId: {
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    },
    {
      paranoid: true
    }
  )

  Users.associate = models => {
    Users.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user'
    })
    Users.hasMany(models.Users, {
      foreignKey: 'userId',
      as: 'ownerUser'
    })

    // Users.hasMany(models.Bugs, {
    //   foreignKey: 'userId',
    //   as: 'ownerBugs'
    // })

    // Users.hasMany(models.Permissions, {
    //   foreignKey: 'userId',
    //   as: 'permissions'
    // })
  }

  return Users
}
