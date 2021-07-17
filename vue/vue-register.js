
    var formbind = new Vue({  //表单绑定 
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
                var storageName = ['杨嘉栋','大飞哥'];  //storage存储 name名字 
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


// request() / then() / catch() / 文件上传 / 简写 / 全局 / 拦截器 作业 
// 在注册页面，完成检查：
// 用户名已使用
// 邀请人不存在，或邀请码错误的检测


Mock.mock("/Student/24", {
    
    // Check:检查 End:结束 邀请用户名 
    "CheckEndInviteName":  'true' ,
    "CheckEndInviteNumber":'fales',
    })

// Check:检查 input:输入 
var Checkinput = new Vue({  //表单绑定 
    el: "#Check-input",
    data: {
        invitename: '',  //invite:邀请名 
        invitenumber: '',  //invite:邀请码 
        invitenamehint:false, //hint:提示 
        invitenumberhint: false,  //invite:邀请码提示  
    },


   methods:{
        // 邀请人姓名 输入框失焦绑定方法 
        CheckName:function(){
            axios.request({
                url: "/Student/24",
                method:"get",
                params:{ 
                    // invitename:this.invitename ,
                },
            }).then((response) => {  
                if (response.data.CheckEndInviteName === "true") {
                    this.invitenamehint = true
                }else{
                    this.invitenamehint = false

                }
         
            })

        },

        // 邀请码 
        // 传给后端邀请码数值 
        // 请求获取后端返回的布尔值 
        CheckNumber:function(){
            axios.request({
                url: "/Student/24",
                method:"get",
                params:{ 
                    // invitenumber:this.invitenumber ,
                },
            }).then((response) => {  
                if (response.data.CheckEndInviteNumber === "true") {
                    this.invitenumberhint = true
                }else{
                    this.invitenumberhint = false

                }
         
            })

        },

  

    },
})
