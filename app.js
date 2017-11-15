const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, 'public')

app.set('port', port);

app.use(express.static(publicPath));

const server = app.listen(app.get('port'), function() {
  let port = server.address().port;
  console.log('Magic happens on port ' + port);
});
