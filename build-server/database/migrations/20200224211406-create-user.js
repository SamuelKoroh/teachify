"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true
    },
    phone: {
      type: Sequelize.STRING
    },
    userType: {
      type: Sequelize.ENUM,
      values: ['user', 'instructor'],
      allowNull: false,
      required: true
    },
    gender: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      required: true
    },
    password: {
      type: Sequelize.STRING,
      required: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Users')
};