var mysql = require('mysql');
var con = mysql.createConnection({
host: "35.202.204.186",
user: "root",
password: "root",
port: "3306",
database: "details"
});

con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "CREATE TABLE ContactUs(Name VARCHAR(255), Email VARCHAR(255),Web_Address VARCHAR(255),PRIMARY KEY (Email))";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    
        con.end();
      });
    
    });