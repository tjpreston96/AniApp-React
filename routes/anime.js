const router = require("express").Router();
const animeCtrl = require("../controllers/anime");

router.use(require("../config/auth"));
router.get("/", isLoggedIn, animeCtrl.index);
router.post("/search", isLoggedIn, animeCtrl.search);
router.get("/:slug", isLoggedIn, animeCtrl.show);
router.post("/:slug/collection", isLoggedIn, animeCtrl.addToCollection);
router.delete("/:slug/collection", isLoggedIn, animeCtrl.removeFromCollection);

function isLoggedIn(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
