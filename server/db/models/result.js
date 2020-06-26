module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    encounters: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    matches: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    victories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    knockout: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    firstHalf: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    ladderPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tournamentId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Tournaments',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  })

  Result.associate = (db) => {
    Result.belongsTo(db.Tournament, { as: 'tournament' })
    Result.belongsTo(db.User, { as: 'user' })
  }

  return Result
}
