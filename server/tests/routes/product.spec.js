const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('Products route', () => {

    it('should download all products', (done) => {
        request(app)
            .get('/api/products')
            .expect(200, done);
    });

    it('should fetch a single product', (done) => {
        request(app)
            .get('/api/products/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent product', (done) => {
        request(app)
            .get('/api/products/9999999999')
            .expect(404, done);
    });

    it('should add a product', (done) => {
        request(app)
            .post('/api/products')
            .send({
                name: 'Red Eye',
                description: 'SHOTS SHOTS with coffee'
            })
            .expect(201, done);
    });

    it('should update a product', (done) => {
        const newProduct = new db.Product({
            name: 'Coffee',
            description: 'Fresh bean water'
        });
        newProduct
            .save()
            .then(product => {
                request(app)
                    .put('/api/products/' + product.id)
                    .send({
                        name: 'mochaChino'
                    })
                    .expect(204)
                    .then(() => {
                        db
                            .Product
                            .findById(product.id)
                            .then(product => {
                                expect(product.name).to.equal('mochaChino');

                                done();
                            });
                    });
            });
    });

    it('should delete a product', () => {
        const newProduct = new db.Product({
            name: 'Coffee',
            description: 'Fresh bean water'
        });

        newProduct.save().then(product => {
            request(app)
                .delete('/api/products/' + product.id)
                .expect(200);
        });
    });

});
