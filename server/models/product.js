'use strict';
module.exports = function (sequelize, DataTypes) {

    let Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL(10, 2),
        cost: DataTypes.DECIMAL(10, 2)
    });

    Product.associate = function (models) {
        models.Product.hasMany(models.SaleItem, {
            as: 'SaleItems',
            foreignKey: 'productId'
        });
    };
    return Product;
};
