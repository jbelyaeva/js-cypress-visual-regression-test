const {MongoClient} = require('mongodb');

async function dropChildTestsCollection(){

    const uri = "mongodb://localhost:3001/";

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();

        await client.db("meteor").dropCollection("child-tests");

    } finally {

        await client.close();
    }
}

dropChildTestsCollection().catch(console.error);