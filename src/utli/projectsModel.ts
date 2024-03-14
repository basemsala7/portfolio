import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  Page: Number,
  title: String,
  description: String,
  link: String,
  img: String,
});

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectsSchema);

export default Projects;
