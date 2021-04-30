const Anime = require("../models/anime");
const axios = require("axios");

module.exports = {
  search,
  show,
  index,
  addToCollection,
  removeFromCollection,
};

// ! KEEP
function search(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//anime?filter[text]=${req.body.term}`)
    .then((response) => {
      console.log(response.data.data);
      res.json(response.data.data);
    });
}

// ! KEEP
function index(req, res) {
  Anime.find({ favoritedBy: req.user._id }).then((anime) => {
    res.json(anime);
  });
}

function show(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//anime?filter[slug]=${req.params.slug}`)
    .then((response) => {
      Anime.findOne({ slug: response.data.data[0].attributes.slug })
        .populate("favoritedBy")
        .then((anime) => {
          if (anime) {
            res.json(anime);
          } else {
            res.json(response.data.data[0]);
          }
        });
    });
}

function addToCollection(req, res) {
  Anime.findOne({ slug: req.body.slug }).then((anime) => {
    if (anime) {
      anime.favoritedBy.push(req.user._id);
      anime.save().then(() => {
        res.json(anime);
      });
    } else {
      req.body.favoritedBy = req.user._id;
      Anime.create(req.body).then((anime) => {
        res.json(anime);
      });
    }
  });
}

function removeFromCollection(req, res) {
  Anime.findOne({ slug: req.params.slug }).then((anime) => {
    let idx = anime.favoritedBy.indexOf(req.user._id);
    anime.favoritedBy.splice(idx, 1);
    anime.save().then((anime) => {
      res.json(anime);
    });
  });
}
