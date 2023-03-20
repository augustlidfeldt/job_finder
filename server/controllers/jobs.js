const { StatusCodes } = require('http-status-codes');
const pool = require('../database/connect')

async function getAllJobs(req, res) {
    const jobQuery = 'SELECT * FROM jobs'

    try {
        const queryRes = await pool.query(jobQuery);
        res.status(StatusCodes.OK).json(queryRes.rows);

    } catch (err) {
        console.log(err.message);
        res.status(StatusCodes.NOT_FOUND).json({ message: "No jobs found" });
    }
}

async function getAllDetailedJobs(req, res) {
    const jobQuery = 'SELECT * FROM jobs AS j JOIN companies AS c ON j.j_company_id=c.c_id;'

    try {
        const queryRes = await pool.query(jobQuery);
        res.status(StatusCodes.OK).json(queryRes.rows);

    } catch (err) {
        console.log(err.message);
        res.status(StatusCodes.NOT_FOUND).json({ message: "No jobs found" });
    }
}



async function getJob(req, res) {
    const id = req.params.id;
    const jobQuery = `SELECT * FROM jobs WHERE j_id=${id}`

    try {
        const queryRes = await pool.query(jobQuery);
        if (queryRes.rows.length > 0) {
            res.status(StatusCodes.OK).json(queryRes.rows);
        }
        else {
            res.status(StatusCodes.NOT_FOUND).json({ message: "No jobs found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(StatusCodes.NOT_FOUND).json({ message: "No jobs found" });
    }
}

module.exports = { getAllJobs, getJob, getAllDetailedJobs }
