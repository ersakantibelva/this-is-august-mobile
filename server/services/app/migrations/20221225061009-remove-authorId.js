'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'authorId')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'authorId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
  }
};
