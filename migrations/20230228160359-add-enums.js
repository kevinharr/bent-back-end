'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Bents', 'workPreference', { type: Sequelize.ENUM('Early Bird', 'Night Owl')});
    await queryInterface.changeColumn('Bents', 'favoriteColor', { type: Sequelize.ENUM('Yellow', 'Green', 'Blue', 'Violet', 'Red', 'Orange')});
    await queryInterface.changeColumn('Bents', 'favoriteMusic', { type: Sequelize.ENUM('Rock', 'Pop', 'Hip Hop', 'Rhythm and Blue', 'Jazz', 'Country', 'Blue', 'Electronic Dance Music', 'Classical', 'Heavy Metal', 'Alternative', 'Reggae', 'Funk', 'Folk', 'Disco')});
  },
  

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Bents', 'workPreference', { type: Sequelize.STRING});
    await queryInterface.changeColumn('Bents', 'workPreference', { type: Sequelize.STRING});
    await queryInterface.changeColumn('Bents', 'workPreference', { type: Sequelize.STRING});
  }
};
