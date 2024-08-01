 await client.connect();

    // create a collection of documents
    const bookcollections = client.db("BookInventory").collection("books");
