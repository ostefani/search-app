const express = require('express');
const getCities = require('../services/getCities');

const router = express.Router();

router.get('/prefetch', async (req, res) => {
    try {
        const { prefix } = req.query;

        const response = await getCities(prefix);
        res.status(200).json({ status: 'success', response });
    } catch (e) {
        console.log(e);
        res.status(404).json({ status: 'error' });
    }
});

module.exports = router;
