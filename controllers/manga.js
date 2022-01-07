const Media = require("../models/media");
const axios = require("axios");

module.exports = {
  search,
  // show,
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
  Media.find({ favoritedBy: req.user._id }).then((media) => {
    console.log(media);
    res.json(media);
  });
}

// function index(req, res) {
//   Manga.find({ favoritedBy: req.params.id }).then((manga) => {
//     res.json(manga);
//   });
// }

// function show(req, res) {
//   axios
//     .get(`https://kitsu.io/api/edge//manga?filter[slug]=${req.params.slug}`)
//     .then((response) => {
//       Manga.findOne({ slug: response.data.data[0].attributes.slug }).then(
//         (manga) => {
//           res.json(manga);
//         }
//       );
//     });
// }

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

function removeFromCollection(req, res) {
  Media.findOne({ id: req.params.id }).then((media) => {
    let idx = media.favoritedBy.indexOf(req.user._id);
    media.favoritedBy.splice(idx, 1);
    media.save().then((media) => {
      res.json(media);
    });
  });
}
