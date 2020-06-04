if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}


module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGODB_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME
};