const express = require('express');
const getCities = require('../services/getCities');

const router = express.Router();

router.get('/prefetch', async (req, res) => {
    try {
        const { prefix } = req.query;

        const response = await getCities(prefix);
        console.log('RESPONSE: ', response);
        res.status(200).json({ status: 'success', response });
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;
