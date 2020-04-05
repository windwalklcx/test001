var phoneisok=false;
var unameisok=false;
var upwdisok=false;
var cpwdisok=false;
var vcodeisok=false;
function reg(){
    if(!phoneisok){
        alert('phone is required');
        return;
    }
    if(!unameisok){
        alert('uname is required');
        return;
    }
    if(!upwdisok){
        alert('uwpd is required');
        return;
    }
    if(!cpwdisok){
        alert('cwpd is required');
        return;
    }
    if(!vcodeisok){
        alert('vcode is required');
        return;
    }
    var $uname=uname.value;
    var $upwd=upwd.value;
    var $phone=phone.value;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r==1){
                d1.innerHTML='suc!!!!'
            }else if(r==0){
                d1.innerHTML='wrong!!!!!!!!'
            }else{
                d1.innerHTML=r;
            }
        }
    }
    xhr.open('post','/user/reg',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    var formdata=`phone=${$phone}&uname=${$uname}&upwd=${$upwd}`;
    xhr.send(formdata);
}

function phonetip(){
    if(!phone.value){ s1.innerHTML='请填写手机号';} 
}
//1[3-9]\d{9}
function checkphone(){
    var reg=/^1[3-9]\d{9}$/;
    if(!phone.value){
        phoneisok=false;
        s1.innerHTML='请填写手机号';
    }else if(!reg.test(phone.value)){ 
        phoneisok=false;
        s1.innerHTML='手机号码格式不正确';  
    }else if(reg.test(phone.value)){
        var $phone=phone.value;
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                var r=xhr.responseText;
                if(r==1){
                    phoneisok=true;
                    s1.innerHTML='';
                }else if(r==0){
                    phoneisok=false;
                    s1.innerHTML='该手机号已绑定';
                }
            }
        }
    }
    xhr.open('get','/user/checkphone/'+$phone,true);
    xhr.send();
}

function unametip(){
    if(!uname.value){ s2.innerHTML='请设置用户名'}
}

function checkuname(){
    if(!uname.value){
        unameisok=false;
        s2.innerHTML='请设置用户名'
    }else if(uname.value.length<3 || uname.value.length>15){
        unameisok=false;
        s2.innerHTML='用户名长度不符(3-15字符)';
    }else{
        var $uname=uname.value;
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                var r=xhr.responseText;
                if(r==1){
                    unameisok=true;
                    s2.innerHTML='';
                }else{
                    unameisok=false;
                    s2.innerHTML='用户名已被占用';
                }
            }
        }
    }
    xhr.open('get','/user/checkuname/'+$uname,true);
    xhr.send();
}

function upwdtip(){
    if(!upwd.value){ s3.innerHTML='请设置密码'}
}

function checkupwd(){
    var reg=/^(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{8,}$/;
    if(!upwd.value){
        upwdisok=false;
        s3.innerHTML='请设置密码'
    }else if(upwd.value.length<8 && !!upwd.value){
        upwdisok=false;
        s3.innerHTML='密码长度不够(不少于8位)';
        checkcpwd();
    }else if(!reg.test(upwd.value)){
        console.log(reg.test(upwd.value))
        upwdisok=false;
        s3.innerHTML='密码强度不够';
        checkcpwd();        
    }else if(reg.test(upwd.value)){
        console.log(reg.test(upwd.value))
        upwdisok=true;
        s3.innerHTML='';
        checkcpwd();
    }
}

function cpwdtip(){
    if(!cpwd.value){s4.innerHTML='请再输入一次密码'}
}

function checkcpwd(){
    if(!cpwd.value){
        cpwdisok=false;
        s4.innerHTML='请再输入一次密码'
    }else if(cpwd.value.length<8){
        cpwdisok=false;
        s4.innerHTML='密码长度不够(不少于8位)';
    }else if(cpwd.value!=upwd.value && !!cpwd.value){
        cpwdisok=false;
        s4.innerHTML='密码不统一';
    }else if(cpwd.value==upwd.value){
        cpwdisok=true;
        s4.innerHTML='';
    }
}

function rcode(){
    var arr=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9','0','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
    
    for(var temp,str='',i=0;i<4;i++){
        temp=Math.floor (Math.random()*arr.length);
        str+=arr[temp];   
    }
    vcode.innerHTML=str;
    checkvcode();
}

function checkvcode(){
    if(!cvcode.value){
        vcodeisok=false;
        s5.innerHTML='请填写验证码';
    }else if(cvcode.value!=vcode.innerHTML && !!vcode){
        s5.innerHTML='验证码错误';
    }else if(cvcode.value==vcode.innerHTML){
        s5.innerHTML='√';
    }
}