const router = require("express").Router();
const mangaCtrl = require("../controllers/manga");

router.use(require("../config/auth"));

// router.get("/:id", isLoggedIn, mangaCtrl.index);
router.post("/search", isLoggedIn, mangaCtrl.search);
// router.get("/:slug", isLoggedIn, mangaCtrl.show);
// router.post("/:id/collection", isLoggedIn, mangaCtrl.addToCollection);
// router.delete("/:id/collection", isLoggedIn, mangaCtrl.removeFromCollection);

function isLoggedIn(req, res, next) {
  console.log(req.user)
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
