const mysql=require('mysql');
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'myshop',
    connectionLimit:20
});
Object.freeze(pool);
module.exports=pool;