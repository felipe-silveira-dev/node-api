import express from 'express';
import { boRouter } from './routes/bo.route.js';
import "reflect-metadata";
import { AppDataSource } from './data-source.js';

const app = express();
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))


app.use(express.json());

app.get('/', function (req, res) {
  res.send('BO API');
})

app.use(boRouter);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
