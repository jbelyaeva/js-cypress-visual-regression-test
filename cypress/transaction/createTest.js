const {MongoClient} = require('mongodb');

async function createTest(){

    const uri = "mongodb://localhost:3001/";

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {

        await client.connect();

        await client.db("meteor").collection("child-tests").insertOne(
            {
                "_id" : "id-addEnglishTest",
                "className" : "data.model.typeform.TestData",
                "title" : "Тест",
                "rootFormId" : "111111",
                "language" : "ru",
                "description" : "Test на переход на новое направление",
                "skillIds" : [
                    "1"
                ],
                "minScore" : 5,
                "maxScore" : 5,
                "timeForPassing" : 10,
                "createdAt" : new Date(),
                "entityTestId" : "123456"
            }
        );

    } finally {

        await client.close();
    }
}

createTest().catch(console.error);

