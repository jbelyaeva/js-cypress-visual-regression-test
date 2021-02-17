const {MongoClient} = require('mongodb');

async function createLead(){

    const uri = "mongodb://localhost:3001/";

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {

        await client.connect();

        await client.db("meteor").collection("leads").insertOne(
            {
                "_id" : "999999",
                "createdAt" : new Date(),
                "firstName" : "Петя",
                "lastName" : "Петин",
                "contacts" : [
                    {
                        "type" : "phone",
                        "val" : "+79035540414",
                        "preferred" : false
                    },
                    {
                        "type" : "email",
                        "val" : "ww@ya.ru",
                        "preferred" : false
                    },
                    {
                        "type" : "telegram",
                        "val" : "@uuu",
                        "preferred" : false
                    },
                    {
                        "type" : "viber",
                        "val" : "+79623335247",
                        "preferred" : false
                    },
                    {
                        "type" : "c2d",
                        "val" : "http:/5555",
                        "preferred" : false
                    },
                    {
                        "type" : "skype",
                        "val" : "skype1",
                        "preferred" : false
                    },
                    {
                        "type" : "whatsapp",
                        "val" : "+91231245",
                        "preferred" : false
                    },
                    {
                        "type" : "facebook",
                        "val" : "fb",
                        "preferred" : false
                    },
                    {
                        "type" : "vk",
                        "val" : "vk",
                        "preferred" : false
                    },
                    {
                        "type" : "ok",
                        "val" : "ok",
                        "preferred" : false
                    },
                    {
                        "type" : "instagram",
                        "val" : "ig",
                        "preferred" : false
                    }
                ],
                "locale" : "ru",
                "utm" : {
                    "source" : "site",
                    "medium" : "manual"
                },
                "status" : "new",
                "roles" : [
                    "child"
                ],
                "country" : "AG",
                "city" : "Пересвет",
                "tz" : "America/Port_of_Spain",
                "referralCode" : "ygkuygyg"
            }
        );

    } finally {

        await client.close();
    }
}

createLead().catch(console.error);

