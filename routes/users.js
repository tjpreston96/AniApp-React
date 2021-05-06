const router = require("express").Router();
const usersCtrl = require("../controllers/users");

router.use(require("../config/auth"));

router.get("/", usersCtrl.index);
router.get("/profile", isLoggedIn, usersCtrl.showProfile);
router.get("/:id", isLoggedIn, usersCtrl.show);
router.get("/:id/friend", isLoggedIn, usersCtrl.addFriend);
router.get("/:id/unfriend", isLoggedIn, usersCtrl.removeFriend);

function isLoggedIn(req, res, next) {
  console.log(req.user);
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
