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

      Preference.belongsTo(models.Profile, {
        foreignKey: 'profileId'
      })
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
    favoriteColor: {
      type: DataTypes.ENUM('Red', 'Yellow', 'Blue', 'Orange', 'Green', 'Violet'),
      defaultValue: 'Blue'
    },  
    favoriteMusic: {
      type: DataTypes.ENUM('Rock', 'Pop', 'Hip Hop', 'Rythm and Blues', 'Jazz', 'Country', 'Blues', 'Electronic Dance Music', 'Classical', 'Heavy Metal', 'Alternative', 'Reggae', 'Funk', 'Folk', 'Disco'),
      defaultValue: 'Rock'
    }
  }, 
    sequelize,
    modelName: 'Preference',
  });
  return Preference;
};