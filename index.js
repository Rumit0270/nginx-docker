const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()

app.use(compression())
app.use(helmet());
app.use(morgan('combined'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Saluton Mondo!!!')
})

app.listen(3000, () => {
    console.log('Server listening at port 3000');
})