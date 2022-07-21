require('dotenv').config();

const express = require('express');
const authMiddleware = require('./src/middleware/auth');

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

app.get('/authenticaionUser', authMiddleware, (req, res) => {
  const userModel = require('./src/models/users');
  userModel.getUserById(req.authUser.id, (err, results) => {
    const user = results.rows[0];
    return res.json({
      message: 'Hello ' + user.email
    });
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