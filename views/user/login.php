<link rel="stylesheet" type="text/css" href="../views/web/media/css/login.css?5">
<div class="wrapper clearfix">
    <div class="path" ><a href='http://www.zhugexuetang.com'>首页</a>  >  登录  </div>

    <div class="l_login">
        <div class="l_landing_t m-c">
            <a href="javascript:void(0)" class="ishover"><img src="http://img.zhugexuetang.com/landing.png" width="85%" height="40" alt="邮箱注册" /></a></div>
        <div class="l_info m-c">登陆账号：
            <input name="username" class="username" type="text" placeholder="" size="40" />
            <P class="ft-red usernamen"></P></div>
        <div class="l_info m-c">登陆密码：
            <input name="password" class="password" type="password" placeholder=""  size="40" maxlength="16" />
            <P class="ft-red passwordn"></P>
        </div>
        <!--手机注册 信息开始-->
        <div class="l_info2 m-c">
            <P>
                <span><a href="">忘记密码？</a></span>
            </P>
        </div>
        <!--手机注册 信息结束-->
        <input type="hidden" name="url" class="url" value="<?php /*echo $url;*/?>">
        <div class="l_reg login-login" ><img src="http://img.zhugexuetang.com/login.png" width="84%" height="35" alt="立即登陆" /></div>
        <div class="agreed">
            其他账号登陆：<a href="http://www.zhugexuetang.com/wechat/login"><img src="http://img.zhugexuetang.com/wx.png" width="30" height="30" /></a> 
            <a href=""><img src="http://img.zhugexuetang.com/qq.png" width="30" height="30" /></a>
        </div>
    </div>
    <div class="l_login_c">
        <div id="wxlogin"></div>
    </div>
</div>

<!--提示窗口 -->

<input type="hidden" id="fromuri" value="" />

<script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"></script>
<script>
    var obj = new WxLogin({
        id:"wxlogin",
        appid:"wx6e62b248ce050989",
        scope: "snsapi_login",
        redirect_uri: "http://www.zhugexuetang.com/wechat/callback",
        state: "1c93a3168f7c9a9a4e7ba79e20b8c27c",
        style: "",
        href: ""
    });
    $('.login-login img').on('click',function(){
        if($('.username').val() == ''){
            alert('用户名不能为空');
            return false;
        }
        if($('.password').val() == ''){
            alert('密码不能为空');
            return false;
        }
         $.ajax({
            data: {username:$('.username').val(),password:$('.password').val()},
            url: "",
            type: "post",
            dataType: 'json',
            success: function (data) {
                location.href = '?r=site/index';
            },
            error: function () {
                alert('登陆失败');
                location.href = '?r=user/login';
            }
        });


    });
    $(window).keydown(function(event){
        if(event.keyCode == 13){
             if($('.username').val() == ''){
                alert('用户名不能为空');
                return false;
            }
            if($('.password').val() == ''){
                alert('密码不能为空');
                return false;
            }
             $.ajax({
                data: {username:$('.username').val(),password:$('.password').val()},
                url: "",
                type: "post",
                dataType: 'json',
                success: function (data) {
                    location.href = '?r=site/index';
                },
                error: function () {
                    alert('登陆失败');
                    location.href = '?r=user/login';
                }
            });
        }
    });
</script>
