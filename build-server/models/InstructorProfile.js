'use strict';

module.exports = (sequelize, DataTypes) => {
  const InstructorProfile = sequelize.define('InstructorProfile', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    exprience: {
      type: DataTypes.STRING
    },
    course: {
      type: DataTypes.STRING
    },
    hourlyRate: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    },
    language: {
      type: DataTypes.STRING
    },
    nationality: {
      type: DataTypes.STRING
    },
    education: {
      type: DataTypes.STRING
    }
  }, {});

  InstructorProfile.associate = models => {
    InstructorProfile.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  return InstructorProfile;
};