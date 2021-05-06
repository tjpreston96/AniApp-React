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
  User.findById(req.user._id).then((user) => {
    user.friends.push(req.params.id);
    user.save().then((newUser) => {
      console.log(newUser);
      res.json(newUser);
    });
  });
}

function removeFriend(req, res) {
  User.findById(req.user._id).then((user) => {
    let idx = user.friends.indexOf(req.params.id);
    user.friends.splice(idx, 1);
    user.save().then((u) => {
      res.json(u);
    });
  });
}
