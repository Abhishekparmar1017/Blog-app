const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is requred"],
    },
    description: {
      type: String,
      require: [true, "description is requred"],
    },
    image: {
      type: String,
      require: [true, "image is requred"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "User id is required"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
