const express = require("express");
const path = require("path");
const bookRoutes = require("./routes/book.routes");
const uiRoutes = require("./routes/ui.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// API routes (unchanged)
app.use("/api/books", bookRoutes);

// UI route
app.use("/", uiRoutes);

module.exports = app;
