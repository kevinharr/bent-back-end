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
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Profiles',
        key: 'id',
      },
    workPreference: {
      type: DataTypes.ENUM('Early Bird', 'Night Owl'),
      defaulValue: 'Early Bird',
      allowNull: false,
    },
    favoriteColor: {
      type: DataTypes.ENUM('Yellow', 'Green', 'Blue', 'Violet', 'Red', 'Orange'),
      defaultValue: 'Blue',
      allowNull: false,
    },
    favoriteMusic: {
      type: DataTypes.ENUM('Rock', 'Pop', 'Hip Hop', 'Rhythm and Blue', 'Jazz', 'Country', 'Blue', 'Electronic Dance Music', 'Classical', 'Heavy Metal', 'Alternative', 'Reggae', 'Funk', 'Folk', 'Disco'),
      defaultValue: 'Alternative',
      allowNull: false,
    }
  }
  }, {
    sequelize,
    modelName: 'Bent',
  });
  return Bent;
};