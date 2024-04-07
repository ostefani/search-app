const db = require('../db');

const LIMIT = 10;

const getCities = async (prefix) => {
    const query = {
        text: `SELECT id, name FROM cities WHERE name ILIKE $1 LIMIT ${LIMIT}`,
        values: [`${prefix}%`],
    };
    const response = await db.query(query);
    return { resultsCount: response.rowCount, data: response.rows };
};

module.exports = getCities;
