const Manga = require("../models/manga");
const axios = require("axios");
module.exports = {
  new: newManga,
  search,
  show,
  index,
  addToCollection,
  removeFromCollection,
};

function newManga(req, res) {
  res.render("manga/new", {
    title: "Manga Search",
    user: req.user,
    results: [],
  });
}

function search(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//manga?filter[text]=${req.body.query}`)
    .then((response) => {
      res.render("manga/new", {
        title: "Manga Search",
        user: req.user,
        results: response.data.data,
      });
    });
}
function index(req, res) {
  Manga.find({ favoritedBy: req.user._id }).then((manga) => {
    res.render("manga/index", {
      title: "Manga Collection",
      user: req.user,
      manga,
    });
  });
}

function show(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//manga?filter[slug]=${req.params.slug}`)
    .then((response) => {
      Manga.findOne({ slug: response.data.data[0].attributes.slug })
        .populate("favoritedBy")
        .then((manga) => {
          if (manga) {
            res.render("manga/show", {
              title: "Manga Details",
              user: req.user,
              manga: response.data.data[0],
              favoritedBy: manga.favoritedBy,
              reviews: manga.reviews,
            });
          } else {
            res.render("manga/show", {
              title: "Manga Details",
              user: req.user,
              manga: response.data.data[0],
              favoritedBy: [""],
              reviews: [""],
            });
          }
        });
    });
}

function addToCollection(req, res) {
  Manga.findOne({ slug: req.body.slug }).then((manga) => {
    if (manga) {
      manga.favoritedBy.push(req.user._id);
      manga.save().then(() => {
        res.redirect(`/manga/${req.body.slug}`);
      });
    } else {
      req.body.favoritedBy = req.user._id;
      Manga.create(req.body).then(() => {
        res.redirect(`/manga/${req.body.slug}`);
      });
    }
  });
}

function removeFromCollection(req, res) {
  Manga.findOne({ slug: req.params.slug }).then((manga) => {
    let idx = manga.favoritedBy.indexOf(req.user._id);
    manga.favoritedBy.splice(idx, 1);
    manga.save().then(() => {
      res.redirect(`/manga/${req.body.slug}`);
    });
  });
}
