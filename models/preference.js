'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Preference.init({
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },

    workPreference: {
      type: DataTypes.ENUM('Early Bird', 'Night Owl'),
      defaultValue: 'Early Bird'
    },
    favoriteColor: DataTypes.STRING,
    favoriteMusic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Preference',
  });
  return Preference;
};