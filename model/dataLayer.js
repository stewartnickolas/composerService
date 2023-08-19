const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MongoSchemas = require('./schemas/schemas');

const MONGODB_BASE_URL = process.env['MONGO_BASE_URL'] || 'mongodb://localhost:27017';


const DATABASES = {
    'vision': {url: `${MONGODB_BASE_URL}/vision`}
}

const DEFAULT_DATA_BASE = 'vision';

function makeId(id) {
    if (typeof id === 'string') {
        return new ObjectId(id);
    }
    return id;
}

async function getConnection(dbName) {
    if (DATABASES[dbName] && DATABASES[dbName].connection) {
        return DATABASES[dbName].connection;
    }
    const url = (DATABASES[dbName] && DATABASES[dbName].url || `${MONGODB_BASE_URL}/${dbName}`);
    if (! DATABASES[dbName]) {
        DATABASES[dbName] = {};
    }
    DATABASES[dbName].connection = mongoose.createConnection(url, { useNewUrlParser: true,  useUnifiedTopology: true });
    return DATABASES[dbName].connection
}

async function getModel(dbName, modelName, schema) {
    const connection = await getConnection(dbName);
    if (! schema) {
        const model = MongoSchemas[modelName];
        if (! model) {
            throw new Error(`Model not found in mongoSchemas for ${modelName}`);
        }
        modelName = model.collection.collectionName;
        schema = model.schema;
    }
    return connection.model(modelName, schema);
}
function nativeDriver() {
    return mongoose.connection.db
}
async function init() {
    console.log('About to connect to mongo DB');
    const connection  = await getConnection(DEFAULT_DATA_BASE);
    console.log(`Mongoose connected to:${connection.client.s.url}`);
}

function createMongoID(id) {
    return new ObjectId(id);
}


async function findById(id, modelName, projection, options) {
    const model = await getModelFromId(id, modelName);
    if (!model) {
        throw new Error(`Model not found ${modelName}`);
    }
    return model.findById(id, projection, options);
}


module.exports = {
    init,
    makeId,
    getConnection,
    getModel,
    nativeDriver,
    createMongoID,
    findById,
    model: {

    }
}
