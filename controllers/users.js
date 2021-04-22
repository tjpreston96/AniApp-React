const User = require("../models/user");


module.exports = {
  index,
  showProfile,
  show,
  addFriend,
  removeFriend,
};

function index(req, res) {
  User.find({}).then((users) => {
    res.json(users);
  });
}

function showProfile(req, res) {
  User.findById(req.user._id)
    .populate("friends")
    .then((user) => {
      res.json(user);
    });
}

function show(req, res) {
  User.findById(req.params.id).then((userInfo) => res.json(userInfo));
}

function addFriend(req, res) {
  req.user.friends.push(req.params.id);
  req.user.save().then((user) => {
    console.log(user)
    res.json(user);
  });
}

function removeFriend(req, res) {
  let idx = req.user.friends.indexOf(req.params.id);
  req.user.friends.splice(idx, 1);
  req.user.save().then((user) => {
    res.json(user);
  });
}
