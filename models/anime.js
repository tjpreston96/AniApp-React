const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeSchema = new Schema(
  {
    title: String,
    type: String,
    slug: String,
    status: String,
    averageRating: String,
    startDate: String,
    endDate: String,
    description: String,
    imageUrl: String,
    videoUrl: String,
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Anime", animeSchema);
