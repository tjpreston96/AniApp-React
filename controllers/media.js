const Media = require("../models/media");

const axios = require("axios");

module.exports = {
  animeIndex,
  mangaIndex,
  index,
  addToCollection,
  removeFromCollection,
  animeSearch,
  mangaSearch,
  animeCollection,
  mangaCollection
};

// Index
function index(req, res) {
  Media.find({ favoritedBy: req.user._id }).then((media) => {
    // console.log(media);
    res.json(media);
  });
}

function animeIndex(req, res) {
  Media.find({ favoritedBy: req.user._id }).then((media) => {
    let anime = [];
    media.map((m) => {
      if (m.type === "anime") {
        anime.push(m.id);
      }
      return anime;
    });
    res.json(anime);
  });
}

function mangaIndex(req, res) {
  Media.find({ favoritedBy: req.user._id }).then((media) => {
    let manga = [];
    media.map((m) => {
      if (m.type === "manga") {
        manga.push(m.id);
      }
      return manga;
    });
    res.json(manga);
  });
}

// Create
function addToCollection(req, res) {
  console.log(req.user._id);
  Media.findOne({ id: req.body.id }).then((media) => {
    if (media) {
      media.favoritedBy.push(req.user._id);
      media.save().then(() => {
        res.json(media);
      });
    } else {
      req.body.favoritedBy = req.user._id;
      Media.create(req.body).then((media) => {
        res.json(media);
      });
    }
  });
}

// Delete
function removeFromCollection(req, res) {
  Media.findOne({ id: req.params.id }).then((media) => {
    let idx = media.favoritedBy.indexOf(req.user._id);
    media.favoritedBy.splice(idx, 1);
    media.save().then((media) => {
      res.json(media);
    });
  });
}

// Search Functionality
function mangaSearch(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//manga?filter[text]=${req.body.term}`)
    .then((response) => {
      res.json(response.data.data);
    });
}

function animeSearch(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//anime?filter[text]=${req.body.term}`)
    .then((response) => {
      res.json(response.data.data);
    });
}

// Collection Search
function animeCollection(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//anime?filter[id]=${req.body.term}`)
    .then((response) => {
      res.json(response.data.data);
    });
}

function mangaCollection(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//manga?filter[id]=${req.body.collection}`)
    .then((response) => {
      res.json(response.data.data);
    });
}