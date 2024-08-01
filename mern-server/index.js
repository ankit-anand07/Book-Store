import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 5000;
import cors from 'cors';

app.use(express.json());

// Middleware
app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello dear, I am  again testing!');
});

// MongoDB Configuration
import { MongoClient, ServerApiVersion } from 'mongodb';
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
    try 
    {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Create a collection of documents
        const bookcollections = client.db("BookInventory").collection("books");

        // Insert a book into the database: POST method
        app.post("/upload-book", async (req, res) => {
        try {
            const data = req.body;
            const result = await bookcollections.insertOne(data);
            res.status(201).send({ message: 'Book uploaded successfully', result });
        } 
        catch (error) {
            console.error('Error inserting book:', error);
            res.status(500).send({ message: 'Failed to upload book', error });
        }

        });

        // get all books from database
        app.get("/all-books",async(req,res)=>{
            const books = bookcollections.find();
            const result = await books.toArray();
            res.send(result);
        })

        // get single books from database
        app.get("/book/:id",async(req,res) => {
            const id  = req.params.id;
            const filter = { _id: new ObjectId(id)};
            const result = await bookcollections.findOne(filter);
        })

        // update a book data: patch or update methods
        app.patch("/book/:id",async(req,res)=>{
            const id = req.params.id;
            console.log(id);
            const updateBookData = req.body;
            const filter = {_id: new ObjectId(id)};
            const options = { upsert: true };

            const updateDoc = {
                $set:{
                    ...updateBookData
                }
            }
            // update
            const result = await bookcollections.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // delete a book from data
        const { ObjectId } = require('mongodb');

        app.delete("/book/:id", async (req, res) => {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid book ID" });
        }

        const filter = { _id: new ObjectId(id) };

        try {
            const result = await bookcollections.deleteOne(filter);

            if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Book not found" });
            }

            res.status(200).send({ message: "Book deleted successfully", result });
        } catch (error) {
            console.error('Error deleting book:', error);
            res.status(500).send({ message: 'Failed to delete book', error });
        }
        });

        // find by category(filter)
        app.get("/all-books",async(req,res) =>{
            let query = {};
            if(req.query?.category){
                query = {category: req.query.category}
            }
            const result = await bookcollections.find(query).toArray();
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 

    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    };
}

run().catch(console.dir);

// heroku deploy process
if (process.env.NODE_ENV = "production"){
    app.use(express.static("mern-client/dist"));
}

// End of MongoDB configuration

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
