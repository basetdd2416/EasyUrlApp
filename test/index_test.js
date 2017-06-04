/**
 * Created by apisit on 4/6/2560.
 */
/**
 * Created by apisit on 4/6/2560.
 */
const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const should = require('chai').should();
const Link = require('../models/link');


describe('API Redirect', () => {
    it('it should return redirect with 304 status', (done) => {
        Link.create({
            longUrl: 'https://medium.freecodecamp.com/between-the-wires-an-interview-with-vue-js-creator-evan-you-e383cbf57cc4',
            token: Math.random().toString(36).slice(-5)
        })
            .then(result => {
                console.log("result is")
                console.log(result)
                request(app)
                    .get('/'+result.token)
                    .expect(302)
                    .end((err, resp) => {
                        if(err) {
                            return done(err);
                        }

                        done()
                    })
            })

    })
})
