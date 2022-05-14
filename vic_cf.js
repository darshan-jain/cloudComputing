var mysql = require('mysql');



var connection = mysql.createConnection({
host : "35.223.48.237",
user : "root",
password : "vicky208",
port : "3306",
database: "SampleDB"
});
connection.connect(function (err) {
if (err) {
console.error('Database connection failed: ' + err.stack);
return;
}
console.log('Connected to RDS.');
});

var test = 0;



exports.helloWorld = (req, res) => {



let houseno = req.body.houseno;
let housename = req.body.housename;



connection.query('SELECT * from housedetails', function (error, results, fields) {
if (error) throw error;



var length = results.length



for (i = 0; i < length; i++)
if (results[i].houseno == houseno && results[i].housename == housename)
test = 1;



if (test === 1)
res.status(200).send("Congradulations Login Success");
else
{
res.status(503).send('<html><body><form action="https://us-central1-mysampleproject1-340703.cloudfunctions.net/sample1010" method="POST"><br/> <p style="color:red">Please enter valid login details</p>'+
'</body></html>');
}



});

test=0;
};