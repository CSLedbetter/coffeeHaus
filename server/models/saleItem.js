'use strict';
module.exports = function (sequelize, DataTypes) {

    let SaleItem = sequelize.define('SaleItem', {
        saleId: {
            type: DataTypes.INTEGER,
            modal: 'Sale',
            key: 'id'
        },
        productId: {
            type: DataTypes.INTEGER,
            modal: 'Product',
            key: 'id'
        },
       quantity: DataTypes.INTEGER,
    });

    SaleItem.associate = function (models) {
 
    };
    return SaleItem;
};
