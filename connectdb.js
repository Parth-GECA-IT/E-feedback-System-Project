const mysql=require('mysql');

const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Chanu@17',
        port:3306,
        database:'feedback_database'
    }
);

connection.connect((err)=>{
    if(err){console.log(err)
       
    }
    else{console.log('feedback_database connected...')}
});


module.exports=(connection);