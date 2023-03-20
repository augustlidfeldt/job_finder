const { Router } = require("express");
const router = Router();

const {
    getAllJobs,
    getAllDetailedJobs,
    getJob
} = require('../controllers/jobs')

router.get('/', getAllJobs)
router.get('/detailed', getAllDetailedJobs)
router.get('/:id', getJob)

module.exports = router;