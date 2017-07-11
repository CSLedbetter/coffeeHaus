'use strict';
module.exports = function (sequelize, DataTypes) {

    let Sale = sequelize.define('Sale', {
        date: DataTypes.DATE,
        totalPrice: DataTypes.DECIMAL(10, 2),
        customerId: {
            type: DataTypes.INTEGER,
            modal: 'Customer',
            key: 'id'
        }
    });

    Sale.associate = function (models) {
        models.Sale.hasMany(models.SaleItem, {
            as: 'SaleItems',
            foreignKey: 'saleId'
        });
    };
    return Sale;
};
