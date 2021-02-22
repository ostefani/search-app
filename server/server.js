require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const citiesRoute = require('./routes/cities');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
    cors({ origin: [process.env.FRONT] }),
    express.static('dist/client'),
);

// Routes

app.use('/api', citiesRoute);

// To serve React app

app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/client/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} port`);
}).on('error', err => {
    console.log(err);
    process.exit(1);
});
