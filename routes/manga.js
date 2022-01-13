const router = require("express").Router();
const mangaCtrl = require("../controllers/manga");

router.use(require("../config/auth"));

router.post("/search", isLoggedIn, mangaCtrl.search);

function isLoggedIn(req, res, next) {
  console.log(req.user);
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
