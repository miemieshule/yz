
    var formbind = new Vue({
        el: "#form-bind",
        data: {
            invitename: '',
            invitnumber:'',
            uesrname:'',
            uesrpassword:'',
            verifypassword:'',
            verifycont:'',
            error:false,
        },
       methods:{
            require:function(){
                var storageName = ['杨嘉栋','大飞哥'];
                return (function(){
                    for (var n in storageName) {
                        if (this.uesrname===storageName[n]) {
                            this.error = true ;
                            break;
                        }else{
                            this.error = false ;
                        }
                    }
                })()
            },
            // 匿名函数 

        },
        watch: {
            uesrname:function() {
                if(this.uesrname!=""){
                    window.onbeforeunload = function () {
                        return confirm("数据未保存")
                    }
                } else{
                }
                  
            }
        },
    })


    // invitename 邀请用户名 // invitename 邀请用户名  //verify 验证 password  //verifycont" 验证内容 
    // storage 存储  closeTime关闭时 

    // 参考注册页面： 
    // 提交时，如果用户名重复（已有用户名用数组保存） , ，阻止form提交，提示“用户名重复”。
    //   绑定事件 绑定事件函数判断输入内容 // require 需要 // 提前了 
    // 重新输入用户名，一旦输入用户名部分没有重复，“用户名重复”的提示消失
    // 当用户名或密码等有值时，关闭页面前弹出确认框
    // 关闭页面 拿到值 判断 失败 / 输入框没值 也会弹出 else块内不执行 


