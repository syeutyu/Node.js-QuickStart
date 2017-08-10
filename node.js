let mysql =  require('mysql');
let config = require('./config');

let conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'mysqltest'
});

conn.connect();

let data = {name : '이동현',age : 19, dream :'프로그래머'};
conn.query('select * from test ',function(err,rows,result){
    if(err){
        console.log(err);
    }
    if(result){
        console.log('성공');
        console.log(result);
        console.log(JSON.stringify(rows));
    }
})