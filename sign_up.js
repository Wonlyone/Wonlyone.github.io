/* 
	    JS：
	    1.每一项都必须填写内容或者做出选择，不能存在空项；+++++++++
	    2.用户名：只能包含英文字母和下划线，长度为6-18个字符；++++++++
	    3.密码：必须包含英文字母大小写和数字，长度不能少于6个字符；++++++
	    4.确认密码：必须与密码相同；
	    6.电子邮箱：确保电子邮箱的有效性；+++++++++
	    7.如果用户没有按照以上要求输入信息，则当光标离开该项时，在该项的右侧用红色字体给出相应的提示信息。++++++ */
	
			//触发跳转
			function jump(){
 window.location.href="http://blog.sina.com.cn/mleavs";
} 
<input type="button" value="我是一个按钮" onclick=javascrtpt:jump()>

		//    用户名
    function YHMonblus(){
        var username=document.getElementById("username");
       // var reN =/^\d{6,18}$/;
        var re = /^[a-zA-Z_]{6,18}$/;
        if(username.value==""){
            document.getElementById('YHMerror').innerText="请输入用户名";
        }
        else if(username.value.length < 6 ||username.value.length > 18){
            console.log(username.value);
            document.getElementById('YHMerror').innerText="格式错误,长度应为6-18个字符";
        }
        else if(!re.test(username.value)){

            document.getElementById('YHMerror').innerText="格式错误,只能包含英文字母和下划线";
        }
        else {
            document.getElementById('YHMerror').innerText ="";
        }
    }
    function YHMonfocu(){
            document.getElementById('YHMerror').innerText ="";
    }
//   密码
    function MMonblus(){
          var password=document.getElementById("password");
          var re = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/;
         // var reg=/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;

        if(password.value==""){
        document.getElementById('MMerror').innerText="请输入密码";
        }
          else if(password.value.length < 6){
             document.getElementById('MMerror').innerText="格式错误,,密码长度至少为6位";
         }

         else if(!re.test(password.value)){
             document.getElementById('MMerror').innerText="格式错误,必须包含英文字母大小写和数字";
        }
         else {
        document.getElementById('MMerror').innerText ="";
        }
}
    function MMonfocu(){
        document.getElementById('MMerror').innerText ="";
    }

//    确认密码
    function QRMMonblus(){
        var password=document.getElementById("password");
        var confirmPassword=document.getElementById("confirmPassword");
        if(confirmPassword.value==""){
            document.getElementById('QRMMerror').innerText="请输入确认密码";
        }
        else if(password.value != confirmPassword.value){
            document.getElementById('QRMMerror').innerText="两次密码输入不一致";
        }
        else {
            document.getElementById('QRMMerror').innerText ="";
        }
    }
    function QRMMonfocu(){
        document.getElementById('QRMMerror').innerText ="";
    }

//    电子邮箱
    function DZYXonblus(){
        var email=document.getElementById("email");
        var re= /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
        if(email.value==""){
            document.getElementById('DZYXerror').innerText="请输入电子邮箱";
        }
        else if(!re.test(email.value)){
            document.getElementById("DZYXerror").innerHTML="邮箱格式不正确";
        }
        else {
            document.getElementById('DZYXerror').innerText ="";
        }
    }
    function DZYXonfocu(){
        document.getElementById('DZYXerror').innerText ="";
    }
