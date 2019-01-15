var assert = require('assert');
var adder = require('../index');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });

describe('adder', function() {
  describe('#addPositive', function() {
    it('should return -1 when a or b is not positive', function() {
      assert.equal(adder.addPositive(0, 3), -1);
      assert.equal(adder.addPositive(3, 0), -1);
      assert.equal(adder.addPositive(-1, -1), -1);
    });

    it('should return a+b when a, b are positive', function() {
      assert.equal(adder.addPositive(3, 4), 7);
    });
  });

  describe('#add', function() {
    it('should return a+b', function() {
      assert.equal(adder.add(3, 4), 7);
    });
  });
});