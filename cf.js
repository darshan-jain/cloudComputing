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



for (i = 0; i < length; i++)
if (results[i].Name == name && results[i].Email == email && results[i].Web_Address == web)
test = 1;



if (test === 1)
{
res.status(200).send("Valid Credentials");
//push the comments to bucket and print Congratulations
var sql = `INSERT INTO comments(email,comment) VALUES ("${email}","${comment}")`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
        });

res.write("Congratulations")
}
else
{
    res.status(503).send('<html><body><form action="" method="POST"><br/> <p style="color:red">Please enter valid login details</p>'+
'</body></html>');
}



});

test=0;
};