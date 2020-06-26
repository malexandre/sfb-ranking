module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define('Tournament', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    major: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    competitive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    hasKnockout: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    participants: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    tooOld: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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

  Tournament.associate = (db) => {
    Tournament.hasMany(db.Result, { as: 'results', foreignKey: 'tournamentId' })
  }

  return Tournament
}
