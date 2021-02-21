require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const citiesRoute = require('./routes/cities');

const PORT = process.env.PORT || 3001;

console.log('process.env: ', process.env);

const app = express();

app.use(
    cors({ origin: [process.env.FRONT] }),
    express.static('dist/client'),
);

app.use('/api', citiesRoute);

app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/client/index.html'));
});

app.listen(3001, () => {
    console.log(`Server is listening on ${PORT} port`);
}).on('error', err => {
    console.log(err);
    process.exit(1);
});
