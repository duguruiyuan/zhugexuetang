
<?php

/* @var $this \yii\web\View */
/* @var $content string */
// use Yii;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <metaname="viewport"content="width=1024, initial-scale=0.9"/> 
    <?= Html::csrfMetaTags() ?>
    <title>诸葛学堂</title>
    <?php $this->head() ?>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.5/css/bootstrap-flex.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../views/web/media/css/daohanglan.css?28">
    <script src="//cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/less.js/1.7.0/less.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.3.0/respond.min.js"></script>
    <script src="http://cdn.bootcss.com/tether/1.4.0/js/tether.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js"></script>
    <metahttp-equiv="X-UA-Compatible"content="IE=9; IE=8; IE=7; IE=EDGE">
</head>
<body>
<?php $this->beginBody() ?>
<!-- 顶部连接 -->
<div class="wrap">

    <ul class="pc-sn nav nav-pills mainTitle" role="navigation">
      <li class="one-title"><img src="http://img.zhugexuetang.com/logo.png"></li>
      <li class="active "><a href="?r=site/index"><span>网站首页</span></a></li>
      <li><a href="?r=site/teacher">名师风采</a></li>
      <li><a href="?r=course/index">选课中心</a></li>
      <li><a href="?r=home/index">我的课程</a></li>
      <li><a href="#">免费节目</a></li>
      <li class="login_register register"><a href="?r=user/login">登录</a></li>
      <li class="login_register"><a href="#">|</a></li>
      <li class="login_register login"><a href="?r=user/register">注册</a></li>
    </ul>
     <ul class="yd-sn nav nav-pills mainTitle" role="navigation">
      <li class="one-title"><img src="http://img.zhugexuetang.com/logo.png"></li>
      <li class="active "><a href="?r=site/index"><span>首页</span></a></li>
      <li><a href="?r=site/teacher">名师风采</a></li>
      <li><a href="?r=course/index">选课中心</a></li>
      <li><a href="?r=home/index">我的课程</a></li>
      <li><a href="#">免费节目</a></li>
      <li class="login_register login"><a href="?r=user/register">注册</a></li>
      <li class="login_register register"><a href="?r=user/login">登录</a></li>
    </ul>
          <?= Breadcrumbs::widget([
              'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
          ]) ?>
          <?= $content ?>
      <div class="pc-sn copyright">
          <p><a target="_blank" href="/about" rel="nofollow" onmousedown="hits('bottom22');" title="关于我们" target="_blank" >关于我们</a> |
          <a target="_blank" href="/about/contact" rel="nofollow" onmousedown="hits('bottom23');" target="_blank" >联系我们</a> |
          <a target="_blank" href="/about/service" rel="nofollow" onmousedown="hits('bottom24');" target="_blank" >服务协议</a> |
          <a target="_blank" href="/about/cooperation" onmousedown="hits('bottom24');" target="_blank" >营销合作</a> |
          <a target="_blank" href="/about/question" onmousedown="hits('bottom24');" target="_blank" >问题反馈</a> |
          <a target="_blank" href="/about/friendlink"  target="_blank" >友情链接</a>
          </p>
          <p class="footp">京ICP备15053428号 北京市公安局海淀分局备案编号：1101081950号</p>
          <p class="footp">诸葛学堂版权所有 Copyright &copy; 2005-2016 www.zhugexuetang.com . All Rights Reserved</p>
          </div>
          <div class="yd-sn yd-footer"><button class="yd-xuanke">去选课</button></div>
     </div>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>