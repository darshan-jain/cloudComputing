var mysql = require('mysql');



var connection = mysql.createConnection({
host : "35.202.204.186",
user : "root",
password : "root",
port : "3306",
database: "details"
});
connection.connect(function (err) {
if (err) {
console.error('Database connection failed: ' + err.stack);
return;
}
console.log('Connected to RDS.');
});

var test = 0;
var i = 0;



exports.helloWorld = (req, res) => {



let name = req.body.name;
let email = req.body.email;
let web = req.body.web;

let comment = req.body.comments;



connection.query('SELECT * from ContactUs', function (error, results, fields) {
if (error) throw error;



var length = results.length;



res.send('https://us-central1-keen-oasis-340307.cloudfunctions.net/ValidateForm');



});

test=0;
};