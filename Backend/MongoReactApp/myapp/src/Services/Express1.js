const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 4000;

const uri ="mongodb+srv://shivam:shivam@cluster0.wphzlzm.mongodb.net/?appName=Cluster0";

let client;

async function connectToDatabase() {
    try {
        client = new MongoClient(uri);
        await client.connect();
        console.log("Connected to database");

        // Middleware
        app.use(cors());
        app.use(express.json());

        // Routes
        app.post('/SIGNUP', async (req, res) => {
            try {
                const response = await client.db("Shop").collection("admins").insertOne(req.body);
                res.status(201).send(response);
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Internal Server Error' });
            }
        });

        app.get('/LOGIN/:email/:password', async (req, res) => {
            try {
                const { email, password } = req.params;
                const user = await client.db('Shop').collection('admins').findOne({ email: email });
            } catch (err) {
                console.error(err);
                res.status(500).send({ message: 'Internal Server Error' });
            }
        });

        app.get('/', (req, res) => {
            res.send('Server started');
        });

        // Start server after connecting to the database
        app.listen(port, () => {
            console.log(`Listening to port number ${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to database:', err);
    }
}

connectToDatabase();
