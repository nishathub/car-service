const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const userCollection = () => getDB().collection('users');
const serviceCollection = () => getDB().collection('services');

// get All Users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userCollection().find().toArray();
        res.send(allUsers);
    } catch (error) {
        res.status(500).send(error)
    }
}
// get All Services
const getAllServices = async (req, res) => {
    try {
        const allServices = await serviceCollection().find().toArray();
        res.send(allServices);
    } catch (error) {
        res.status(500).send(error)
    }
}

//get One Service
const getOneService = async (req, res) => {
    try {
        const serviceID = req.params.serviceID;
        const query = {_id : new ObjectId(serviceID)};
        //options-projection to get limited data (its boolean, 1 means we want that data)
        const options = {
            projection: {title: 1, service_id: 1, price: 1, img: 1} // here we will only get the mentioned data
        }
        const clickedService = await serviceCollection().findOne(query, options);
        res.send(clickedService);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Create User
const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await userCollection().insertOne(newUser);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {getAllUsers, createUser, getAllServices, getOneService};