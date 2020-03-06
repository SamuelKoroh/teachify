module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('InstructorProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      }, 
      hourlyRate: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as : 'userId'
        }
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
  down: (queryInterface) =>  queryInterface.dropTable('InstructorProfiles')
};