const express = require("express");
const router = express.Router();
const books_controller = require("../controllers/books-controller");

router.get("/", books_controller.getAllBooks);
router.post("/", books_controller.addBook);
router.get("/:id", books_controller.getById);
router.put("/:id", books_controller.updateBook);
router.delete("/:id", books_controller.deleteBook);

module.exports = router;
