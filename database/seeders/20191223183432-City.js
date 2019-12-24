'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cities_sql = await fs.readFileSync(
      path.join(__dirname, '../sql/cities.sql')).toString();

    return queryInterface.sequelize.query(cities_sql);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('city', null, {});
  },
};
