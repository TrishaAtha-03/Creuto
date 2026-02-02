const Book = require("../models/book.model");
const APIFeatures = require("../utils/apiFeatures");

exports.createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const features = new APIFeatures(Book.find(), req.query)
    .search()
    .filter()
    .sort()
    .paginate();

  const books = await features.query;
  res.json(books);
};

// UPDATE
exports.updateBook = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedBook) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(updatedBook);
};

// DELETE
exports.deleteBook = async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);

  if (!deletedBook) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(204).send();
};