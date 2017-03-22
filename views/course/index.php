<link rel="stylesheet" type="text/css" href="../views/web/media/css/wells_mul.css?11">
<link rel="stylesheet" type="text/css" href="../views/web/media/css/course.css?21">
<script type="text/javascript" src="../views/web/media/js/MutilSelect.js"></script>
<div class="course-bg">
	<div class="course-content">
		<div class="course-up  pc-sn" id="msdiv">
		</div>
		<div class="yd-sn course-yd-up">
			 <ul class="nav nav-pills">
			 	<li class="dropdown">
					<a class="dropdown-toggle course-yd-screen" data-toggle="dropdown" href="#">
						学段
					</a>
					<ul class="dropdown-menu" id="dropdown-menu">
						<li class="margin-top"><a href="#">小学部</a></li>
						<li class="divider"></li>
						<li class="float-left ydSelectButton" data-id="" data-content="一年级"><a href="#">一年级</a></li>
						<li  class="float-left ydSelectButton" data-id="" data-content="二年级"><a href="#">二年级</a></li>
						<li  class="float-left ydSelectButton" data-id="" data-content="三年级"><a href="#">三年级</a></li>
						<li  class="float-left ydSelectButton" data-id="" data-content="四年级"><a href="#">四年级</a></li>
						<li  class="float-left ydSelectButton" data-id="" data-content="五年级"><a href="#">五年级</a></li>
						<li  class="float-left ydSelectButton" data-id="" data-content="六年级"><a href="#">六年级</a></li>
						<li  class="margin-top"><a href="#">初中部</a></li>
						<li class="divider"></li>
						<li class="float-left ydSelectButton" data-id="" data-content="初一年级"><a href="#">初一年级</a></li>
						<li class="float-left ydSelectButton" data-id="" data-content="初二年级"><a href="#">初二年级</a></li>
						<li class="float-left ydSelectButton" data-id="" data-content="初三年级"><a href="#">初三年级</a></li>
						<li  class="margin-top ydSelectButton"><a href="#">高中部</a></li>
						<li class="divider"></li>
						<li class="float-left ydSelectButton" data-id="" data-content="高一年级"><a href="#">高一年级</a></li>
						<li class="float-left ydSelectButton" data-id="" data-content="高二年级"><a href="#">高二年级</a></li>
						<li class="float-left ydSelectButton" data-id="" data-content="高三年级"><a href="#">高三年级</a></li>
					</ul>
				</li>
				<li><a>|</a></li>
				<li class="dropdown">
					<a class="dropdown-toggle course-yd-screen" data-toggle="dropdown" href="#">
						学科
					</a>
					<ul class="dropdown-menu">
						<li class="ydSelectButton" data-id="1" data-content="语文">语文</li>
						<li class="ydSelectButton" data-id="1" data-content="数学">数学</li>
						<li class="ydSelectButton" data-id="1" data-content="英语">英语</li>
						<li class="ydSelectButton" data-id="1" data-content="物理">物理</li>
						<li class="ydSelectButton" data-id="1" data-content="化学">化学</li>
					</ul>
				</li>
				<li><a>|</a></li>
				<li class="dropdown">
					<a class="dropdown-toggle course-yd-screen" data-toggle="dropdown" href="#">
						老师
					</a>
					<ul class="dropdown-menu">
						<li class="ydSelectButton" data-id="2" data-content="A,B,C,D,E">A-----E</li>
						<li class="ydSelectButton" data-id="2" data-content="F,I,G,K,L">F-----L</li>
						<li class="ydSelectButton" data-id="2" data-content="M,N,O,P,Q">M----Q</li>
						<li class="ydSelectButton" data-id="2" data-content="R,S,T,U,V">R-----V</li>
						<li class="ydSelectButton" data-id="2" data-content="W,X,Y,Z">W----Z</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="course-down">
			<div class="order_c relative">
                <div class="order_c_l">
                    <a class="course-img" target="_blank" href="/index/view?id=200">
                         <img src="<?=Yii::$app->params['img_url']?>course/ke.png">
                    </a>
                     <dl class="yd-sn yd-course-button">
                    	 <dd class="yd-course-ke-title"><a target="_blank" href="#">2016年寒假中学大语文（尖子班）</a></dd>
                    	 <a href="#" class="show-yd-course-dl">查看详情</a>
                    	 <a href="#" class="yd-course-buy">购买课程</a>
                    </dl>
                    <dl class="course-dl yd-course-dl">
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
        $(function ($) {
        	/*移动端查看详情显示隐藏切换*/
			$(".show-yd-course-dl").on('click',function(){ 
				if($(this).parent().next('dl').hasClass('guanbi')){
					$(this).parent().next('dl').css("display","none").removeClass('guanbi'); 
				}else{
					$(this).parent().next('dl').css("display","block").addClass('guanbi'); 
				}
			}); 
            /*顶部筛选*/
            $("#msdiv").mSelect({
				data: [{
				Field: "xd",
				Name: "学段",
				Item: [{value:"全部",text:"全部"},{value:"幼教",text:"幼教"}, {value:"小学",text:"小学"},{value:"初中",text:"初中"},{value:"高中",text:"高中"},{value:"五年级",text:"五年级"},{value:"六年级",text:"六年级"}], //列表数据
				hasMore: [{value:"初一年级",text:"初一年级"},{value:"初二年级",text:"初二年级"},{value:"初三年级",text:"初三年级"},{value:"高一年级",text:"高一年级"},{value:"高二年级",text:"高二年级"},{value:"高三年级",text:"高三年级"}], //更多的列表数据
				isMulti: true //当前的字段的值是否支持多选
			}, {
				Field: "xk",
				Name: "学科",
				Item: [{value:"全部",text:"全部"}, {value:"语文",text:"语文"}, {value:"数学",text:"数学"},{value:"英语",text:"英语"},{value:"物理",text:"物理"},{value:"化学",text:"化学"},{value:"冬夏令营",text:"冬夏令营"}],	
				hasMore: [{value:"科技",text:"科技"},{value:"舞蹈",text:"舞蹈"},{value:"乐器",text:"乐器"},{value:"美术",text:"美术"},{value:"书法",text:"书法"}],	
				isMulti: false
			} , {
				Field: "ls",
				Name: "老师",
				Item: [{value:"全部",text:"全部"}, {value:"朱雅特",text:"朱雅特"}, {value:"窦昕",text:"窦昕"}, {value:"杨宏业",text:"杨宏业"}, {value:"邵鑫",text:"邵鑫"}, {value:"高志和",text:"高志和"}],
				isMulti: false
			}], 
			onClick: function(target, filter, domList) {
			   	alert(target.text()+"  "+JSON.stringify(filter));
			   	var data = JSON.stringify(filter);
				$.ajax({
		            data: {data:data},
		            url: "/kecourseware/add",
		            type: "post",
		            dataType: 'json',
		            success: function (data) {
		                $('.teacher-down').empty();
		            },
		            error: function () {
		            	$('.teacher-down').empty();
		                alert('获取失败');
		            }
		        });
			}
			});
	        var select = [];
			$('.ydSelectButton').on('click',function(){
				var count = $(this).data('id');
				select[count] = $(this).data('content');
				$.ajax({
			            data: {data:select},
			            url: "/kecourseware/add",
			            type: "post",
			            dataType: 'json',
			            success: function (data) {
			                $('.relative').empty();
			            },
			            error: function () {
			            	$('.relative').empty();
			                alert('获取失败');
			            }
			        });
			});
        });
</script>