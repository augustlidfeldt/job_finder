const express = require('express');
const cors = require('cors')
const app = express()
const pool = require('./database/connect');
const jobRouter = require('./routes/jobs');
const favoriteRouter = require('./routes/favorites')

app.use(express.json())
app.use(cors())


app.use('/jobs', jobRouter);
app.use('/favorites', favoriteRouter);

app.use((req, res, next) => {
    res.status(404).send('Not found');
});


app.listen(5000, () => {
    console.log('Started listening on port 5000...')
})