import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const posts = [];
let postId = 1;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
  res.render("home", { posts });
});

// Create Post
app.get("/createPost", (req, res) => {
  res.render("createPost");
});

app.post("/createPost", (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: postId++, title, content });
  res.redirect("/");
});

// Update Post
app.get("/updatePost/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  res.render("updatePost", { post });
});

app.post("/updatePost/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect("/");
});

// Delete Post
app.post("/deletePost/:id", (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  }
  res.redirect("/");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
