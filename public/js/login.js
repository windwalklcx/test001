function loginin(){
    bggray.style.zIndex='1000';
    loginwin.style.zIndex='1000';
    bggray.style.display="block";
    loginwin.style.display="block";
}
function close(){
    bggray.style.zIndex='-1';
    loginwin.style.display="none";
    bggray.style.display="none";
}
function log(){
    var $phone=phonelog.value;
    var $upwd=upwdlog.value;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r==1){
                d1.innerHTML='login suc!';
            }else{
                d1.innerHTML='sth wrong!';
            }
        }
    }
    xhr.open('get','/user/login/'+$phone+'&'+$upwd,true);
    xhr.send();
}