const { StatusCodes } = require('http-status-codes');
const pool = require('../database/connect')

// Get all favorties
async function getAllFavorites(req, res) {
    const { user_id: userId } = req.query;
    const query = `SELECT * FROM favorites as f LEFT JOIN jobs as j on f.job_id = j.j_id  WHERE user_id=${userId}`

    sendQuery(req, res, query);
}

// Add a new favorite
async function addFavorite(req, res) {
    const { job_id: jobId, user_id: userId } = req.query;
    const query = `INSERT INTO favorites (user_id, job_id) VALUES(${userId},${jobId})`;

    sendQuery(req, res, query);
}

// Remove favorite
async function removeFavorite(req, res) {
    const { job_id: jobId, user_id: userId } = req.query;
    const query = `DELETE FROM favorites WHERE user_id=${userId} AND job_id=${jobId} `;

    sendQuery(req, res, query);
}

// Generic function for sending query
async function sendQuery(req, res, query) {
    try {
        const queryRes = await pool.query(query);
        if (req.method === 'POST') {
            res.status(StatusCodes.OK).json({ message: 'Success' });
        }
        if (req.method === 'DELETE') {
            res.status(StatusCodes.OK).json({ message: 'Successfully deleted' });
        }
        if (req.method === 'GET') {
            if (queryRes.rows.length > 0) {
                res.status(StatusCodes.OK).json(queryRes.rows);
            }
            else {
                res.status(StatusCodes.OK).json({ message: "No records found" });
            }
        }

    } catch (err) {
        console.log(err.message);
        res.status(StatusCodes.NOT_FOUND).json({ error_message: err.message });
    }
}

module.exports = { getAllFavorites, addFavorite, removeFavorite }
