
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost/listTracker';

async function testWithAsync() {
    console.log('\n--- testWithAsync ---');
    const client = new MongoClient(url, { useNewUrlParser: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db();
        const collection = db.collection('listTracker');

        console.log()

        const final_del = await collection.deleteMany({});


        const data = { id: 1, number: '295982958', name: 'Tom' };
        const data1 = { id: 2, number: '259285929', name: 'Harry' };

        const result = await collection.insertOne(data);
        console.log('Record inserted', await collection.find({ id: 1 }).toArray());

        const result1 = await collection.insertOne(data1);
        console.log('Record inserted', await collection.find({ id: 2 }).toArray());


        const final_data = await collection.find().toArray();
        console.log("Data", final_data);


        const result_del = await collection.deleteMany({ id: 1 });
        console.log("Record with ID 1 Deleted")

        const final_data_del = await collection.find().toArray();
        console.log("Data", final_data_del);



        const result_update = await collection.updateOne({ id: 2 }, { $set: { name: "Jack" } });
        console.log("Record Updated with Name Jack");


        const final_data1 = await collection.find().toArray();
        console.log("Final Data", final_data1);


        const final_del1 = await collection.deleteMany({});

    }

    catch (err) {
        console.log(err);
    }
    finally {
        client.close();
    }
}


testWithAsync();
