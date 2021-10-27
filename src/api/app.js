const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const allRouters = require('../routers/index');

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', allRouters.userRouter);
app.use('/login', allRouters.loginRouter);

module.exports = app;
