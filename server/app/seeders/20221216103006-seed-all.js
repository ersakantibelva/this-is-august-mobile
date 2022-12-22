'use strict';
const { hashPass } = require('../helpers/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = require('../db.json').users
    .map(el => {
      delete el.id
      el.password = hashPass(el.password)
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })

    const categories = require('../db.json').categories
    .map(el => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })

    const products = require('../db.json').products
    .map(el => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })

    const images = require('../db.json').images
    .map(el => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })

    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.bulkInsert('Categories', categories, {});
    await queryInterface.bulkInsert('Products', products, {});
    await queryInterface.bulkInsert('Images', images, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
    await queryInterface.bulkDelete('Products', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
    await queryInterface.bulkDelete('Categories', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
    await queryInterface.bulkDelete('Users', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
  }
};
