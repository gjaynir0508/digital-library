import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: false,
	},
	authors: {
		type: [String],
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
		min: [0, "Rating cannot be less than 0, got {VALUE}"],
		max: [5, "Rating cannot be greater than 5, got {VALUE}"],
	},
	genre: {
		type: [String],
		required: true,
	},
	cover: {
		type: String,
		required: true,
	},
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
