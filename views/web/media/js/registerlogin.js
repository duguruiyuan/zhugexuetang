$(function ($) {
        	 	$('form').bootstrapValidator({
		　　　　　　　　message: 'This value is not valid',
		            　feedbackIcons: {
		                　　　　　　　　valid: 'glyphicon glyphicon-ok',
		                　　　　　　　　invalid: 'glyphicon glyphicon-remove',
		                　　　　　　　　validating: 'glyphicon glyphicon-refresh'
		            　　　　　　　　   },
		            fields: {
		                username: {
			                 message: '请输入用户名',
			                 validators: {
			                     notEmpty: {
			                         message: '用户名不能为空'
			                     },
			                     stringLength: {
			                         min: 11,
			                         max: 11,
			                         message: '用户名是手机号'
			                     },
			                     regexp: {
			                         regexp: /^1[3|5|8]{1}[0-9]{9}$/,
			                         message: '请输入正确的手机号'
			                     },
			                     remote: {//ajax验证。server result:{"valid",true or false} 向服务发送当前input name值，获得一个json数据。例表示正确：{"valid",true}  
			                         url: 'exist2.do',//验证地址
			                         message: '用户已存在',//提示消息
			                         delay :  4000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
			                         type: 'POST'
			                 	}
			                 }
			             },
		                passwordone: {
			                 message:'密码无效',
			                 validators: {
			                     notEmpty: {
			                         message: '密码不能为空'
			                     },
			                     stringLength: {
			                         min: 6,
			                         max: 18,
			                         message: '用户名长度必须在6到18之间'
			                     },
			                     identical: {//相同
			                         field: 'passwordtwo', //需要进行比较的input name值
			                         message: '两次密码不一致'
			                     },
			                     different: {//不能和用户名相同
			                         field: 'username',//需要进行比较的input name值
			                         message: '不能和用户名相同'
			                     }
			                 }
			            },
			             passwordtwo: {
			                 message:'密码无效',
			                 validators: {
			                     notEmpty: {
			                         message: '密码不能为空'
			                     },
			                     stringLength: {
			                         min: 6,
			                         max: 18,
			                         message: '用户名长度必须在6到18之间'
			                     },
			                     identical: {//相同
			                         field: 'passwordone', //需要进行比较的input name值
			                         message: '两次密码不一致'
			                     },
			                     different: {//不能和用户名相同
			                         field: 'username',//需要进行比较的input name值
			                         message: '不能和用户名相同'
			                     }
			                 }
			            },
			            imgverification:{
			            	message:'验证码无效',
			            	validators:{
			            		notEmpty:{
			            			message:'验证码不能为空'
			            		},
			                     remote: {//ajax验证。server result:{"valid",true or false} 向服务发送当前input name值，获得一个json数据。例表示正确：{"valid",true}  
			                         url: 'exist2.do',//验证地址
			                         message: '验证码错误',//提示消息
			                         delay :  4000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
			                         type: 'POST'
			                 	}
			            	}
			            },
			            phoneverification:{
			            	message:'验证码无效',
			            	validators:{
			            		notEmpty:{
			            			message:'验证码不能为空'
			            		},
			                     remote: {//ajax验证。server result:{"valid",true or false} 向服务发送当前input name值，获得一个json数据。例表示正确：{"valid",true}  
			                         url: 'exist2.do',//验证地址
			                         message: '验证码错误',//提示消息
			                         delay :  4000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
			                         type: 'POST'
			                 	}
			            	}
			            }
		            }
		        });
        	 });