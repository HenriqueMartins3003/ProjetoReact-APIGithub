"use strict";/* eslint-disable no-await-in-loop */
const bcryptjs = require('bcryptjs');
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const dummyJSON = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      dummyJSON.push({
        nome: faker.name.firstName(),
        email: faker.internet.email(),
        password_hash: await bcryptjs.hash(faker.internet.password(), 8),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await queryInterface.bulkInsert('users', dummyJSON, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
