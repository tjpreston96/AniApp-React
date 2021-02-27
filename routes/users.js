const router = require("express").Router();
const usersCtrl = require("../controllers/users");

router.get("/", isLoggedIn, usersCtrl.index);
router.get("/profile", isLoggedIn, usersCtrl.showProfile);
router.put("/profile", isLoggedIn, usersCtrl.update);
router.get("/:id", isLoggedIn, usersCtrl.show);
router.get("/:id/friend", isLoggedIn, usersCtrl.addFriend);
router.get("/:id/unfriend", isLoggedIn, usersCtrl.removeFriend);

function isLoggedIn(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
