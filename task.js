import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url)

const dbName = "cleaning-checklisdb";

// Declare a function
const createTask = async (taskName) => {
// connection to the server
    await client.connect();

// connect to data base

const db = client.db(dbName);

const collection = db.collection('tasks');
const result = await collection.insertOne({
    name:taskName,
    done:false

    
})
console.log(result)
return result

}
//createTask("Clean computer")

const createMultipleTask = async (taskList) => {
await client.connect();
const db = client.db(dbName);
const collection = db.collection('tasks');
const result = await collection.insertMany(taskList);

console.log(result)
return result

}

createMultipleTask([
    {name: "Recycle paper and empty trash cans" , done: false},
    {name: "Vacuum floors around and under desks and tables" , done: false},
    {name: "Clean the windows in offices", done: false},
    {name: "Disinfect the surfaces: phones", done: false},
    {name: "Disinfect the surfaces: lamps", done: false },
    {name: "Disinfect the surfaces: keyboards", done: false },
    {name: "Disinfect the surfaces: fax machines", done: false },
    {name: "Dust desks, shelves, and other surfaces" , done: false}

])


