// let PORT = process.env.PORT || 8080;
// let connectionString = "mongodb://localhost:27017/";
// let dbName = "dbtest_prueba";
// let fullUrl = connectionString + dbName;

let PORT = process.env.PORT || 8080;
let connectionString =
    "mongodb+srv://admin:admin1234@cluster0.p0pyz3y.mongodb.net/?retryWrites=true&w=majority";
let dbName = "dbtest_prueba";
let fullUrl =
    "mongodb+srv://admin:admin1234@cluster0.p0pyz3y.mongodb.net/" +
    dbName +
    "?retryWrites=true&w=majority";
module.exports = {
    PORT,
    connectionString,
    dbName,
    fullUrl,
};