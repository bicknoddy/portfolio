const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'this is working'
  });
});

app.post('/photos', (req, res) => {
  console.log(req.body);
})

app.listen(5000, () => {
  console.log("App listening on port 5000");
});