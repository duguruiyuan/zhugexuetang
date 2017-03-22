<link rel="stylesheet" type="text/css" href="../views/web/media/css/home.css?13">
<img src="<?=Yii::$app->params['img_url']?>home/title.png" class="pc-sn" width="100%">
<img src="<?=Yii::$app->params['img_url']?>home/yd-title.png" class="yd-sn" width="100%">
<div class="home-index">
	<div class="home-content">
		<div class="home-left pc-sn">
			<p>产品中心</p>
			<ul>
				<li class="button-bg"><a href="#">大语文</a></li>
				<li><a href="#">思晨创意写作</a></li>
				<li><a href="#">专项班</a></li>
				<li><a href="#">大英语</a></li>
				<li><a href="#">庖丁阅读</a></li>
			</ul>
		</div>
		<div class="yd-sn row float1">
		    <a class="yd-a-fenlei yd-fenlei-1 yd-selected" href="#">
		        <img src="<?=Yii::$app->params['img_url']?>index/yd-classification-1.png" width="100%" >
		    </a>
		    <a class="yd-a-fenlei" href="#">
		        <img src="<?=Yii::$app->params['img_url']?>index/yd-classification-2.png" width="100%">
		    </a>
		    <a class="yd-a-fenlei" href="#">
		        <img src="<?=Yii::$app->params['img_url']?>index/yd-classification-3.png" width="100%" >
		    </a>
		    <a class="yd-a-fenlei" href="#">
		        <img src="<?=Yii::$app->params['img_url']?>index/yd-classification-4.png" width="100%">
		    </a>
		    <a class="yd-a-fenlei" href="#">
		        <img src="<?=Yii::$app->params['img_url']?>index/yd-classification-5.png" width="100%">
		    </a>
	</div>
		<div class="home-down">
			<div class="order_c relative">
                <div class="order_c_l">
			        <ul>
						<li class="fenlei pc-sn">大语文</li>
					</ul>
            	</div>
		        	</div>
			<div class="order_c relative">
                <div class="order_c_l">
                    <a class="course-img" target="_blank" href="">
                         <img src="<?=Yii::$app->params['img_url']?>course/ke.png">
                    </a>
                    <dl class="yd-course-button yd-sn">
	                        	 <dd class="yd-course-ke-title"><a target="_blank" href="#">2016年寒假中学大语文（尖子班）</a></dd>
	                        	 <a href="#" class="show-yd-course-dl">查看详情</a>
	                        	 <a href="#" class="yd-course-buy">购买课程</a>
	                        </dl>
                    <dl class="course-dl">
                        <dd class="course-ke-title"><a target="_blank" href="#">2016年寒假中学大语文（尖子班）</a></dd>
                        <dd>授课教师： 2016年寒假中学大语文（尖子班）</dd>
                        <dd>授课对象：六年级、初一、初二、初三</dd>
                        <dd>开课时间：2016-01-16 19:00-20:30</dd>
                        <dd>原      价： <span class="original-price">¥960</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;限时折扣价： <span class="present-price">¥768.00</span></dd>
                    </dl>
                    <dl class="course-select">
                    	<dd><span>205人报名</span></dd>
                    	<dd><a class="" href="#"  style="color: #fff;">查看详情</a></dd>
                    </dl>
                </div>
		    </div>
		</div>
	</div>
</div>
<script type="text/javascript">
	$(".show-yd-course-dl").on('click',function(){ 
		if($(this).parent().next('dl').hasClass('guanbi')){
			$(this).parent().next('dl').css("display","none").removeClass('guanbi'); 
		}else{
			$(this).parent().next('dl').css("display","block").addClass('guanbi'); 
		}

	}); 
</script>