const router = require("express").Router();
const mediaCtrl = require("../controllers/media");

router.use(require("../config/auth"));

// Search
router.post("/anime/search", isLoggedIn, mediaCtrl.animeSearch);
router.post("/manga/search", isLoggedIn, mediaCtrl.mangaSearch);
// Create & Delete
router.post("/:id/add", isLoggedIn, mediaCtrl.addToCollection);
router.delete("/:id/remove", isLoggedIn, mediaCtrl.removeFromCollection);
// Index
router.get("/", isLoggedIn, mediaCtrl.index);
router.get("/anime", isLoggedIn, mediaCtrl.animeIndex);
router.get("/manga", isLoggedIn, mediaCtrl.mangaIndex);
// Collection
router.post("/anime/collection", isLoggedIn, mediaCtrl.animeCollection);
router.post("/manga/collection", isLoggedIn, mediaCtrl.mangaCollection);

function isLoggedIn(req, res, next) {
  // console.log(req.user);
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
