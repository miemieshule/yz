
// news:消息
Mock.mock("/Student/23", {
    "yjdNewNews": 'true' ,
    })


    // 计时器容器 
var RefreshContainer ;
// 刷新 container：容器  存放是否有新消息请求  
var  blinkfunContainer ;
// 计时器容器 存放每秒的闪烁 

var newNewsfun  =  new Vue({   // news 消息 
el:'#new-News',
data:{
    newNews : '1'  ,
    color :'red',  //行内样式绑定颜色
    nowUser:[  //now 现在用户
        { 
            user:{ name : '杨嘉栋' , role:'common'}  // role 角色  //common:普通
        },
    ],
   
},

methods: {
    //  blink:闪烁功能  
    blinkfun: function () {
        blinkfunContainer = setInterval(function () {
            if (this.color == 'red') {
                this.color = 'blue';
            } else {
                this.color = 'red';
            }
        }.bind(this), 3000)    //每隔一秒变换一次颜色
    },


    //  Refresh:刷新、Examine：检查 News：消息
    RefreshExamineNews:function () {
        RefreshContainer  =  setInterval(function () {

            // 第一次请求 
            axios.request({
                url: "/Student/23",
                method:"get",
                params:{ 
                    // nowUser:this.nowUser ,  //传送用户信息 
                }
            }).then((response) => {  
                console.log('1');
                if (response.data.yjdNewNews === "true") {
                    this.blinkfun();
                }else{
                }

                // 第一次请求成功后,发起第二次请求 
                axios.request({
                    url: "/Student/23",
                    method:"get",
                    params:{
                        // nowUser:this.nowUser ,  //传送用户信息 
                    }
                }).then((response) => {  
                    console.log(2);
                    if (response.data.yjdNewNews == "true") {
                        clearTimeout(RefreshContainer); // 取消请求 
                    }else{
                        console.log('没有新消息');
                    }
                })

            })
        }.bind(this), 9000)    //每隔4秒请求一次 

    } ,


},

})

newNewsfun.RefreshExamineNews()



// 根据当前用户（纯前端通过vue data模拟，全栈通过cookie确定）是否有新通知决定铃铛是否闪烁，注意：
// 除非用户标记已读/删除了通知


// news:消息
Mock.mock("/Student/24", {
    // unread:未读 news:消息 
    "yjdNews":  '@ctitle()' ,
    "unreadNews":
    [
        {
            'articleTime':'@datetime',//时间 
            'unreadContent' : '@cparagraph(1, 1)',  //段落
            'Readstate':'', // read:阅读状态 
            'Selectstate':'', //选择状态 

        },
        {
            'articleTime':'@datetime',//时间 
            'unreadContent' : '@cparagraph(1, 1)',  //段落
            'Readstate':'', // read:阅读状态 
            'Selectstate':'', //选择状态 

        },
        {
            'articleTime':'@datetime',//时间 
            'unreadContent' : '@cparagraph(1, 1)',  //段落
            'Readstate':'', // read:阅读状态 
            'Selectstate':'', //选择状态 

        },

    ],
    })



var newsListFun  =  new Vue({   // news 消息列表功能 
el:'#news-ListFun',
data:{
    allUnread:'',
    allCheckbox:false , //全选 复选框 
    nowUser:[  //now 现在用户
        { 
            user:{ name : '杨嘉栋' , role:'common'}  // role 角色  //common:普通
        },
    ],
   
},

created:function(){
        axios.request({
        url: "/Student/24",
        method:"get",
    }).then((response) => {  
        this.allUnread = response.data.unreadNews;
        console.log(response.data.unreadNews);
    })
},

methods: {
    // 全选功能 
    allfun:function(){  //复选框 所有方法 
        if (!this.allCheckbox) {
            return this.allUnread.map(function (s,i) {
                s.Selectstate = true ;
            })

        }else{
            return this.allUnread.map(function (s,i) {
                return s.Selectstate = false;
            })
        }
    },

    // 点击已读 
    // 状态值   s.Readstate = '' 变为  s.Readstate = '1' 
    readstatefun:function (params) {
     this.allUnread.filter(function (s,i) {
            if (s.Selectstate === true) {
                s.Readstate = '1'
            }else{
            } 
        }.bind(this))

        // 解放闪烁计时器 
        clearTimeout(blinkfunContainer);

        // 5秒后 调用方法 已读dom元素传给后端 
        setTimeout(
            function () {
                newsListFun.portalReads();
        },5000)
    },


    // portal:传送 已读：Reads 
    portalReads:function (params) {
    // 过滤出点击已阅读按钮的元素 
    var  ReadsElement =[]
   this.allUnread.filter(function (s,i) {
           if (s.Readstate == '1') {
            ReadsElement.push(s)
           }else{
           } 
        }.bind(this))

        // 获取元素传给后端 
        axios.request({
        url: "/Student/23",
        method:"get",
        params:{ 
            ReadsElement,
        }
    })

    },

},

})




