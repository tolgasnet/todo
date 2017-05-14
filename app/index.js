const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

const port = 3000;
app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
});