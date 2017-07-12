const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('Sales route', () => {

    it('should download all sales', (done) => {
        request(app)
            .get('/api/sales')
            .expect(200, done);
    });

    it('should fetch a single sale', (done) => {
        request(app)
            .get('/api/sales/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent sale', (done) => {
        request(app)
            .get('/api/sales/9999999999')
            .expect(404, done);
    });

    it('should add a sale', (done) => {
        request(app)
            .post('/api/sales')
            .send({
                totalPrice: '10.99'
            })
            .expect(201, done);
    });

    it('should update a sale', (done) => {
        const newSale = new db.Sale({
            totalPrice: '8.99'
        });
        newSale
            .save()
            .then(sale => {
                request(app)
                    .put('/api/sales/' + sale.id)
                    .send({
                        totalPrice: '9.99'
                    })
                    .expect(204)
                    .then(() => {
                        db
                            .Sale
                            .findById(sale.id)
                            .then(sale => {
                                expect(sale.totalPrice).to.equal('9.99');

                                done();
                            });
                    });
            });
    });

    it('should delete a sale', () => {
        const newSale = new db.Sale({
            totalPrice: '2.99'
        });

        newSale.save().then(sale => {
            request(app)
                .delete('/api/sales/' + sale.id)
                .expect(200);
        });
    });

});
