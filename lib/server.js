var http = require('http'),
    url = require('url'),
    colors = require('colors/safe'),
    lines = function() {
      console.log(colors.yellow("---"));
    },
    requestHandler = function(req, res) {
      var data = url.parse(req.url, true).query;
      lines();
      for (key in data) {
        console.log(colors.green(key + ": ") + data[key]);
      }
      lines();
      console.log("");
      res.end('true');
    },
    server = http.createServer(requestHandler);

module.exports = {
  instance: server,
  start: function(port) {
    this.instance.listen(port)
    console.log(colors.blue("Shoot me! :-)"));
  }
}
