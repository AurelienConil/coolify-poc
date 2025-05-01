const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port,'0.0.0.0' ,() => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
