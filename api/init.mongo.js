

const records = [
    {
        id: 1, name: 'Ravan',
        number: '123456789',
        timestamp: new Date('2019-01-15'),
    },
    {
        id: 2, name: 'Srini',
        number: '123456789',
        timestamp: new Date('2019-02-15'),

    }
];


db.listTracker.remove({});
db.listTracker.insertMany(records)
db.listTracker.createIndex({ id: 1 }, { unique: true });


