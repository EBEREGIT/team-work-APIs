/* eslint-disable import/newline-after-import */
const request = require('request');
const baseUrl = 'http://localhost:3000/';

describe('Server', () => {
  describe('GET /', () => {
    it('returns status code 200', (done) => {
      request.get(baseUrl, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('returns Hello World', (done) => {
      request.get(baseUrl, (error, response, body) => {
        expect(body).toBe('Welcome to Team Work');
        done();
      });
    });
  });
});
