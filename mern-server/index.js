import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello dear, I am again testing!');
});

// MongoDB Configuration
const uri = "mongodb+srv://mern-book-store:Ua7pEfwMOaZtxjCr@bookstore.sl5pggm.mongodb.net/?retryWrites=true&w=majority&appName=BookStore";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");

    const bookcollections = client.db("BookInventory").collection("books");

    // Insert a book into the database: POST method
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookcollections.insertOne(data);
        res.status(201).send({ message: 'Book uploaded successfully', result });
      } catch (error) {
        console.error('Error inserting book:', error);
        res.status(500).send({ message: 'Failed to upload book', error });
      }
    });

    // Get all books from database
    app.get("/all-books", async (req, res) => {
      try {
        const books = await bookcollections.find().toArray();
        res.send(books);
      } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send({ message: 'Failed to fetch books', error });
      }
    });

    // Get single book from database
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;

      try {
        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ message: 'Invalid book ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const result = await bookcollections.findOne(filter);

        if (!result) {
          return res.status(404).send({ message: 'Book not found' });
        }

        res.send(result);
      } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).send({ message: 'Failed to fetch book', error });
      }
    });

    // Update a book data: PATCH method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;

      try {
        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ message: 'Invalid book ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = { $set: { ...updateBookData } };

        const result = await bookcollections.updateOne(filter, updateDoc, options);

        if (result.matchedCount === 0) {
          return res.status(404).send({ message: 'Book not found' });
        }

        res.send(result);
      } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).send({ message: 'Failed to update book', error });
      }
    });

    // Delete a book from database
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;

      try {
        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ message: 'Invalid book ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const result = await bookcollections.deleteOne(filter);

        if (result.deletedCount === 0) {
          return res.status(404).send({ message: 'Book not found' });
        }

        res.status(200).send({ message: "Book deleted successfully", result });
      } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send({ message: 'Failed to delete book', error });
      }
    });

    // Find by category (filter)
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookcollections.find(query).toArray();
      res.send(result);
    });

    // Confirm MongoDB connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

run().catch(console.dir);

// Heroku deploy process
if (process.env.NODE_ENV === "production") {
  app.use(express.static("mern-client/dist"));
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
