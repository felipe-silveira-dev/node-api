const express = require('express');
const { boRouter } = require('./routes/bo.route');
const app = express();
// o express funciona por ordem de "chegada" exemplo se o app.listen estiver acima do get o get nao funcionara por que ele stopa no listen

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.use(boRouter);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
