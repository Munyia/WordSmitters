import Book from "../model/bookModel.js";
import asyncHandler from "express-async-handler";

// @desc    Adds a new book
// @route   POST /books
// @access  Private
const addBook = asyncHandler(async (req, res) => {
  const { title, description, genre, publisher, year, coverImage, chapters } =
    req.body;
  console.log(title, description, genre, publisher, year, coverImage, chapters);
  if (
    !title ||
    !description ||
    !genre ||
    !publisher ||
    !year ||
    !coverImage ||
    !chapters
  ) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  const authorName = req.user.firstname + " " + req.body.lastname;
  const authorId = req.user.id;
  const newBook = await Book.create({
    title,
    description,
    genre,
    publisher,
    year,
    coverImage,
    authorName,
    authorId,
    chapters,
  });

  if (newBook) {
    res.status(200).send("Book added successfully");
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  if (books) {
    res.json({
      author: books.authorName,
      desc: books.description,
      title: books.title,
      genre: books.genre,
      year: books.year,
      coverImage: books.coverImage,
    });
  } else {
    res.status(404);
    throw new Error("Failed to find books");
  }
});
const getBookDetail = asyncHandler(async (req, res) => {
    const vendorId = req.params.id;

    const book = await Book.findById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404);
    throw new Error("Failed to find books");
  }
});

export { addBook, getAllBooks, getBookDetail };
