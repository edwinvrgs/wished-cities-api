'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      'country',
      [
        {
          id: 1,
          name: 'Venezuela',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Chile',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'EEUU',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Colombia',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('country', null, {});
  },
};
