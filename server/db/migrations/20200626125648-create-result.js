'use strict'

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      encounters: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      matches: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      victories: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      knockout: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      firstHalf: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      ladderPoints: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalPoints: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tournamentId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Tournaments',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
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
    await queryInterface.dropTable('Results')
  },
}
