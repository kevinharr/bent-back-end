'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bent.init({
    profileId: DataTypes.INTEGER,
    workPreference: DataTypes.STRING,
    favoriteColor: DataTypes.STRING,
    favoriteMusic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bent',
  });
  return Bent;
};