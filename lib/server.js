var http = require('http'),
    url = require('url'),
    chalk = require('chalk'),
    lines = function() {
      console.log(chalk.yellow("---"));
    },
    requestHandler = function(req, res) {
      var data = url.parse(req.url, true).query;
      lines();
      for (key in data) {
        console.log(chalk.green(key + ": ") + data[key]);
      }
      lines();
      console.log("");
      res.end();
    },
    server = http.createServer(requestHandler);

module.exports = {
  instance: server,
  start: function(port) {
    this.instance.listen(port)
    console.log(chalk.black.bgBlue("uglass is running on port " + port + ". Shoot me! :-)"));
  }
}
