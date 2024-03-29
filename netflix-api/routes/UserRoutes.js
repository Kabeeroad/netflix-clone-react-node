const {
  addToLikedMovies,
  getLikeMovies,
  removeFromLikedMovies,
} = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikeMovies);
router.put("/delete", removeFromLikedMovies);
module.exports = router;
