'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bucket = sequelize.define('Bucket', {
    owner: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'country_id',
    },
  }, {
    tableName: 'bucket',
  });
  Bucket.associate = function (models) {
    // associations can be defined here
    Bucket.belongsTo(models.Country, {
      foreignKey: 'countryId',
      as: 'country',
      onDelete: 'CASCADE',
    });
    Bucket.belongsToMany(models.City, {
      through: 'bucket_cities',
      as: 'cities',
      foreignKey: 'bucket_id',
    });
  };
  return Bucket;
};
