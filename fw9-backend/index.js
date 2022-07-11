require('dotenv').config();

const express = require('express');

global.__basepath = __dirname;

const app = express();

app.use(express.urlencoded({
  extended: false
}));
app.use('/public', express.static('assets'));

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Back End is running well'
  });
});

app.use('/', require('./src/routes'));

app.post('/', (req, res) => {
  console.log(req.body);
  return res.json({
    success: true,
    message: 'Posted data success to send'
  });
});

app.use('*', (req, res)=>{
  return res.status(404).send({
    success: false,
    message: 'Resource not found'
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});