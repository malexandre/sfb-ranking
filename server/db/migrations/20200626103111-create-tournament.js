'use strict'

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('Tournaments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      major: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      competitive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      hasKnockout: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      participants: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      tooOld: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    })
  },

  down: async(queryInterface) => {
    await queryInterface.dropTable('Tournaments')
  },
}
