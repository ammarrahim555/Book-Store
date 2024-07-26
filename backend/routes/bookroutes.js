import express from "express";
import {Book} from '../models/bookmodel.js'

const router = express.Router(); 


router.post("/", async (request, response) => {

    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {

            return response.status(400).
                send({ message: "send all required fields : title , author , publisheyear", });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);
        return response.status(201).send({ book });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
// get mthod for all books data 
router.get("/", async (request, response) => {
    try {
        const book = await Book.find({});
        return response.status(201).send({

            count: book.length,
            data: book
        })

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });

    }
});
// get mthod for id books data 
router.get("/:id", async (request, response) => {
    try {

        const { id } = request.params;
        const bookById = await Book.findById(id);
        return response.status(201).send(bookById)

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });

    }
});
// get mthod for update books data 
router.put("/:id", async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {

            return response.status(400).
                send({ message: "send all required fields : title , author , publisheyear", });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            response.status(404).json({ message: "book not found" });

        } else {
            return response.status(200).json({ message: "book update succesfully " });
        }


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });

    }
});
// get mthod for DELETE books data ;
router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id, request.body);
        if (!result) {
            response.status(404).json({ message: "book not found" });

        } else {
            return response.status(200).json({ message: "book deleted succesfully " });
        }


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });

    }
});

export default router;