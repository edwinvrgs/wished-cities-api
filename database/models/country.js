'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
  }, {
    tableName: 'country',
  });
  Country.associate = function (models) {
    // associations can be defined here
    Country.hasMany(models.City, {
      foreignKey: 'countryId',
      as: 'cities',
      onDelete: 'CASCADE',
    });

    Country.hasMany(models.Bucket, {
      foreignKey: 'countryId',
      as: 'buckets',
      onDelete: 'CASCADE',
    });
  };
  return Country;
};
