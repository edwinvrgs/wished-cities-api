'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bucket_cities', {
      bucket_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'bucket', key: 'id' },
      },
      city_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'city', key: 'id' },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bucket_cities');
  },
};
