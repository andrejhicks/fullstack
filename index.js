var express = require('express');
var app     = express();
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MITPass123',
  database: 'contacts'
});


// used to serve static files from public directory
app.use(express.static('public'));

app.get('/read', function(req, res){

   connection.query(
     'SELECT * FROM `contacts`',
     function(err, results, fields) {             
      console.log(results);
       res.send(results)
      
      }
   );
   });
   
app.get('/add', function(req, res){
   let querytxt = `Insert Into contacts 
      (firstName,lastName,PhoneNum,emailaddress,university,major)
      values ('${req.query.firstName}',
         '${req.query.lastName}',
         ${req.query.PhoneNum},
         '${req.query.emailaddress}',
         '${req.query.university}',
         '${req.query.major}') 
      `;
   connection.query(querytxt);
   res.send('Added ' + req.query.firstName);
});
app.listen(3006, function(){
   console.log('Running on port 3006!')
});
