const { Router } = require("express");
const router = Router();

const {
    getAllFavorites,
    addFavorite,
    removeFavorite
} = require('../controllers/favorites')

// Get all favorites of user with user ID
router.route('/')
    .get(getAllFavorites)
    .post(addFavorite)
    .delete(removeFavorite)

module.exports = router;