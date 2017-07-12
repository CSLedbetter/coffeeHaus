const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('SaleItems route', () => {

    it('should download all saleItems', (done) => {
        request(app)
            .get('/api/saleItems')
            .expect(200, done);
    });

    it('should fetch a single saleItem', (done) => {
        request(app)
            .get('/api/saleItems/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent saleItem', (done) => {
        request(app)
            .get('/api/saleItems/9999999999')
            .expect(404, done);
    });

    it('should add a saleItem', (done) => {
        request(app)
            .post('/api/saleItems')
            .send({
                quantity: 1
            })
            .expect(201, done);
    });

    it('should update a saleItem', (done) => {
        const newSaleItem = new db.SaleItem({
            quantity: 2
        });
        newSaleItem
            .save()
            .then(saleItem => {
                request(app)
                    .put('/api/saleItems/' + saleItem.id)
                    .send({
                        quantity: 3
                    })
                    .expect(204)
                    .then(() => {
                        db
                            .SaleItem
                            .findById(saleItem.id)
                            .then(saleItem => {
                                expect(saleItem.quantity).to.equal(3);

                                done();
                            });
                    });
            });
    });

    it('should delete a saleItem', () => {
        const newSaleItem = new db.SaleItem({
            quantity: 3,
        });

        newSaleItem.save().then(saleItem => {
            request(app)
                .delete('/api/saleItems/' + saleItem.id)
                .expect(200);
        });
    });

});
