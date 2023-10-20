const express = require ('express');
const cors = require ('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express ();
const port = process.env.PORT || 5000;

//middleware
app.use (cors ());
app.use (express.json ());






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rmje4mv.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    // await client.close();
  }
}
run().catch(console.dir);















app.get ('/', (req, res) => {
    res.send ('Assignment 10 Server Side Running')
})

app.listen (port, () => {

    console.log(`Assignment 10 Server Side is running on Port: ${port}`);
})