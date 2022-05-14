var mysql = require('mysql');
var con = mysql.createConnection({
host: "35.202.204.186",
user: "root",
password: "root",
port: "3306"
});
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE details", function (err, result) {
if (err) throw err;
console.log("Database created");
con.end();
});



});