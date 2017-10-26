var expect = require('chai').expect;
var request = require('request');

describe('the RoundLinkedQueue API', function() {

  describe.only('the /RoundLinkedQueue/push route', function() {

    it('should create a new RoundLinkedQueue instance if not already exist and push on it the params query', function(done) {
      var url = 'http://localhost:3000/RoundLinkedQueue/push/1';
      request(url, function(error, response, body) {
        expect(body).to.equal('1');
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

});
