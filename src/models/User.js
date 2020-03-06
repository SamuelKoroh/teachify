module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    phone: {
      type: DataTypes.STRING
    },
    userType: {
      type: DataTypes.ENUM,
      values: ['user','instructor'],
      defaultValue: 'user'
    },
    gender: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      required: true
    },
    password: {
      type: DataTypes.STRING,
      required: true
    }
  }, {});

  User.associate = models  => {
    User.hasOne(models.InstructorProfile, {
      foreignKey: 'userId'
    })
  };
  return User;
};