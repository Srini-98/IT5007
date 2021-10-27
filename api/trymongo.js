
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost/listTracker';

/*
function testWithCallbacks(callback) {
    console.log('\n--- testWithCallbacks ---');
    const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(function (err, client) {
        if (err) {
            callback(err);
            return;
        }
        console.log('Connected to MongoDB');

        const db = client.db();
        const collection = db.collection('listTracker');

        const employee = { id: 3, no: '9841113214', name: 'S22nivasan' };
        collection.insertOne(employee, function (err, result) {
            if (err) {
                client.close();
                callback(err);
                return;
            }
            console.log('Result of insert:\n', result.insertedId);
            collection.find({ _id: result.insertedId })
                .toArray(function (err, docs) {
                    if (err) {
                        client.close();
                        callback(err);
                        return;
                    }
                    console.log('Result of find:\n', docs);
                    client.close();
                    callback(err);
                });
        });
    });
}
*/

async function testWithAsync() {
    console.log('\n--- testWithAsync ---');
    const client = new MongoClient(url, { useNewUrlParser: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db();
        const collection = db.collection('listTracker');

        const data = { id: 10, number: '9841113214', name: 'S22nivasan' };
        const result = await collection.insertOne(data);
        console.log('Record inserted');

        const docs = collection.find({ _id: result.insertedId }).toArray();
        console.log('Result of records', result.insertedId);

        const result_del = await collection.deleteMany({ id: 1 });
        console.log("Record with ID 1 Deleted")

        const result_update = await collection.updateOne({ id: 2 }, { $set: { id: 23 } });
        console.log("Record Updated");


        const final_data = await collection.find().toArray();
        console.log("Final Data", final_data);
    }

    catch (err) {
        console.log(err);
    }
    finally {
        client.close();
    }
}


testWithAsync();
/*
testWithCallbacks(function (err) {
    if (err) {
        console.log(err);
    }

});
*/