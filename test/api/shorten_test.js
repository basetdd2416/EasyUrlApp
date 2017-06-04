/**
 * Created by apisit on 4/6/2560.
 */
const assert = require('assert');
const request = require('supertest');
const app = require('../../app');
const should = require('chai').should();


describe('API Shorten', () => {
    it('it should return a short url if url is valid', (done) => {
        request(app)
            .post('/api/shorten')
            .send({
                url: 'https://medium.freecodecamp.com/between-the-wires-an-interview-with-vue-js-creator-evan-you-e383cbf57cc4'
            })
            .end((err, resp) => {
                 if(err) {
                     return done(err);
                 }
                should.exist(resp.body.shortUrl);
                done()
            })
    })
})
