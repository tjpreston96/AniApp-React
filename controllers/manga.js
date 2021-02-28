const Manga = require("../models/manga");
const axios = require("axios");
module.exports = {
  search,
  show,
  index,
  addToCollection,
  removeFromCollection,
};

function search(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//manga?filter[text]=${req.body.term}`)
    .then((response) => {
      res.json(response.data.data);
    });
}

function index(req, res) {
  Manga.find({ favoritedBy: req.user._id }).then((manga) => {
    res.json(manga);
  });
}

function show(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//manga?filter[slug]=${req.params.slug}`)
    .then((response) => {
      Manga.findOne({ slug: response.data.data[0].attributes.slug })
        .populate("favoritedBy")
        .then((manga) => {
          res.json(manga);
        });
    });
}

function addToCollection(req, res) {
  Manga.findOne({ slug: req.body.slug }).then((manga) => {
    if (manga) {
      manga.favoritedBy.push(req.user._id);
      manga.save().then((manga) => {
        res.json(manga);
      });
    } else {
      req.body.favoritedBy = req.user._id;
      Manga.create(req.body).then((manga) => {
        res.json(manga);
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
