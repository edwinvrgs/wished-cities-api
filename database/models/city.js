'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'country_id',
    },
  }, {
    tableName: 'city',
  });
  City.associate = function (models) {
    // associations can be defined here
    City.belongsTo(models.Country, {
      foreignKey: 'countryId',
      as: 'country',
      onDelete: 'CASCADE',
    });
    City.belongsToMany(models.Bucket, {
      through: 'bucket_cities',
      as: 'buckets',
      foreignKey: 'city_id',
    });
  };
  return City;
};
