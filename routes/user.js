const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
//注册
router.post('/reg',(req,res)=>{
    let obj=req.body;
    let sql='insert into ms_user set ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');
        }else{
            res.send('0');
        }
    })
});
//登录
router.get('/login/:phone&:upwd',(req,res)=>{
    let $phone=req.params.phone;
    let $upwd=req.params.upwd;
    let sql='select uid from ms_user where phone=? and upwd=?';
    pool.query(sql,[$phone,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1');
        }else{
            res.send('0');
        }
    })
});
//查询手机号
router.get('/checkphone/:phone',(req,res)=>{
    let sql='select uid from ms_user where phone=?';
    pool.query(sql,[req.params.phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('0');
        }else{
            res.send('1');
        }
    })
})
//查询用户名
router.get('/checkuname/:uname',(req,res)=>{
    let sql='select uid from ms_user where uname=?';
    pool.query(sql,[req.params.uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('0');
        }else{
            res.send('1');
        }
    })
})


module.exports=router;