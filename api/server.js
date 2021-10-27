const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
let aboutMessage = "Hotel Booking System";
const { GraphQLScalarType } = require('graphql');

const { MongoClient } = require('mongodb');

const { Kind } = require('graphql/language');
const url = 'mongodb://localhost/listTracker';



async function connectToDB() {
    const client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();
    console.log('Connected to Mongo Server');
    db = client.db();
}

const GraphQLDate = new GraphQLScalarType(
    {
        name: 'GraphQLDate',
        description: 'To add Date',
        serialize(value) {
            return value.toISOString();
        },
        parseValue(value) {
            return new Date(value);
        },
        parseLiteral(ast) {
            return (ast.Kind == Kind.STRING) ? new Date(ast.value) : undefined;
        },
    });

const records = [
    {
        id: 1, name: 'Ravan',
        number: '123456789',
        timestamp: new Date(),
    },
    {
        id: 2, name: 'Srini',
        number: '123456789',
        timestamp: new Date(),
    }
];


const resolvers = {
    Query:
    {
        recList,
    },
    Mutation:
    {
        setMessage,
        recAdd,
        recDel,
    },
    GraphQLDate,
};

function setMessage(_, { message }) {
    return aboutMessage = message;
}
async function recList() {
    const lis = await db.collection('listTracker').find().toArray();
    console.log("connect to collection");
    return lis;
}


async function recAdd(_, { field }) {
    const l = await db.collection('listTracker').find().count();
    field.id = l + 1;

    field.timestamp = new Date();
    await db.collection('listTracker').insertOne(field);
    console.log("New Data Added");
    return field
}
async function recDel(_, { field }) {

    f = field.id;

    const records = await db.collection('listTracker').find().toArray();
    await db.collection('listTracker').deleteOne({ id: f });
    console.log("New Data Deleted");
    await db.collection('listTracker').updateMany({ id: { $gt: f } }, { $inc: { id: -1 } });


    /*
    for (var i = f; i < records.length; i++) {
        records[i].id = records[i].id - 1;
    }
    */
    return records[f - 1]
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
});



const app = express();
/*
app.use(express.static('public'));
*/
server.applyMiddleware({ app, path: '/graphql' });

(async function () {
    try {
        await connectToDB();
        app.listen(3000, function () {
            console.log('API Server started on port 3000');

        })
    }
    catch (err) {
        console.log("Connection Error");
    }
})();


