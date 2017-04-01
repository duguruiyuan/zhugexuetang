
/*轮播图数据*/
layui.use('flow', function(){
  var flow = layui.flow;
  flow.load({
    elem: '.banner' //指定列表容器
    ,done: function(){ //到达临界点（默认滚动触发），触发下一页
      //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
      $.get('?r=site/user', function(res){
        //假设你的列表返回在data集合中
        var res = JSON.parse(res);
        layui.each(res, function(index, item){
          $(".banner ul").append(('<li style="float:left"><a target="_blank"  href="'+item.url+'"><img src="'+item.img+'" width="100%"/></a></li>'));
        }); 
        slider();
      });
    }
  });
});

/*轮播图播放*/
function imgReload(){
  var imgHeight = 0;
  var wtmp = $("body").width();
  $("#b06 ul li").each(function(){
        $(this).css({width:wtmp + "px"});
    });
  $(".sliderimg").each(function(){
    $(this).css({width:wtmp + "px"});
    imgHeight = $(this).height();
  });
}
$(window).resize(function(){imgReload();});
function slider(){
	imgReload();
    var unslider06 = $('#b06').unslider({  /*滑动*/
    dots: true,
    fluid: true
  });
  var data06 = unslider06.data('unslider');   /*点击*/
  $('.unslider-arrow06').click(function() {
        var fn = this.className.split(' ')[1];
        data06[fn]();
    });
}


/*直播推荐*/