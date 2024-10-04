const mongoose = require("mongoose");

// Define the schema for the blog posts
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Ensures the title is mandatory
    },
    snippet: {
      type: String,
      required: true, // Ensures the snippet is mandatory
    },
    body: {
      type: String,
      required: true, // Ensures the body is mandatory
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create the Blog model based on the blogSchema
const Blog = mongoose.model("Blog", blogSchema);

// Export the Blog model to use it in other files
module.exports = Blog;
