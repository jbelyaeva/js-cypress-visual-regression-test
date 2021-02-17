const {MongoClient} = require('mongodb');

async function dropLeadsCollection(){

    const uri = "mongodb://localhost:3001/";

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();

        await client.db("meteor").dropCollection("leads");

    } finally {

        await client.close();
    }
}

dropLeadsCollection().catch(console.error);

