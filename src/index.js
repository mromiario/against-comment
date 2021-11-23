require('dotenv').config()
const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.EXPRESS_PORT;

app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/orgs', routes);

app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message)
    if (!err.statusCode) {
      err.statusCode = 500
    } // Set 500 server code error if statuscode not set
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    })
  }
})



app.listen(port || 3003, () => {
  console.log('The system is listening port', port || 3003);
});
