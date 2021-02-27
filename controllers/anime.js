const Anime = require("../models/anime");
const axios = require("axios");
const user = require("../models/user");

module.exports = {
  new: newAnime,
  search,
  show,
  index,
  addToCollection,
  removeFromCollection,
};

function newAnime(req, res) {
  res.render("anime/new", {
    title: "Anime Search",
    user: req.user,
    results: [],
  });
}

function search(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//anime?filter[text]=${req.body.query}`)
    .then((response) => {
      console.log(response.data.data);
      res.render("anime/new", {
        title: "Anime Search",
        user: req.user,
        results: response.data.data,
      });
    });
}

function index(req, res) {
  Anime.find({ favoritedBy: req.user._id }).then((anime) => {
    res.render("anime/index", {
      title: "Anime Collection",
      user: req.user,
      anime,
    });
  });
}

function show(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//anime?filter[slug]=${req.params.slug}`)
    .then((response) => {
      Anime.findOne({ slug: response.data.data[0].attributes.slug })
        .populate("favoritedBy")
        .then((anime) => {
          // console.log(response.data.data[0], "banana pancakes")
          if (anime) {
            res.render("anime/show", {
              title: "Anime Details",
              user: req.user,
              anime: response.data.data[0],
              favoritedBy: anime.favoritedBy,
              reviews: anime.reviews,
            });
          } else {
            res.render("anime/show", {
              title: "Anime Details",
              user: req.user,
              anime: response.data.data[0],
              favoritedBy: [""],
              reviews: [""],
            });
          }
        });
    });
}

function addToCollection(req, res) {
  Anime.findOne({ slug: req.body.slug }).then((anime) => {
    if (anime) {
      anime.favoritedBy.push(req.user._id);
      anime.save().then(() => {
        res.redirect(`/anime/${req.body.slug}`);
      });
    } else {
      req.body.favoritedBy = req.user._id;
      Anime.create(req.body).then(() => {
        res.redirect(`/anime/${req.body.slug}`);
      });
    }
  });
}

function removeFromCollection(req, res) {
  Anime.findOne({ slug: req.params.slug }).then((anime) => {
    let idx = anime.favoritedBy.indexOf(req.user._id);
    anime.favoritedBy.splice(idx, 1);
    anime.save().then(() => {
      res.redirect(`/anime/${req.body.slug}`);
    });
  });
}
