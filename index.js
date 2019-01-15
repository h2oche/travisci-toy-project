// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Travis!\n')
// }).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');

module.exports
= {
  addPositive: (a, b) => {
    if(a <= 0 || b <= 0)
      return -1;
    return a+b;
  },

  add: (a,b) => {
    return a+b;
  }
}