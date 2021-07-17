var listContent  = new Vue({
    el: "#div-content",
    data: {
        time: "021年04月25日 17点48分1秒",
        head:"因为学历的问题，我丢掉了一个学生，但我不后悔！永远都不会…… ",
        conmtent:"事情经过然后就被围攻，让他去读书……开始我觉得没啥，能读就读呗，毕竟才16岁，这个年龄除非极其特殊的原因，否则我也不收。但后来话说得越来越难听：我还是忍了，带点情绪，也正常，另外因为“乐理”是我的准学生，不能得罪。只是私聊了一下“老公”，让他自己要争气。 最后是“乐理”主动@了我，我忍不住了，随便说了几句：退群有点难过，但我不后悔，永远不会！“乐理”，你还是不够俏皮，不够阅历啊讲一讲聊天记录谭乔：抑郁症其实我一直无法感受抑郁症的痛苦，说实话，我以前就有点觉得：矫情，闲的……但是呢，我还保持一点理智，因为有 ……"
    }
})


// var headBell  = new Vue({
//     el: "#head-Bell",
//     data: {
//         bg: "red",
//     }
// })
//  控制台修改颜色 铃铛的闪烁  headBell.bg = "#b6ff00" 



    var rightsort = new Vue({
        el: "#right-sort",  
        data: {
            bg: "#b6ff00",
            Weight:100,
        }
    })
// 控制台修改 颜色 排行榜的图标样式  rightsort.bg = "red"


// 自动加载
Mock.mock("/Student/24", {

    "pageNumber":10,
    "OnePageArticle":
    [
        {
            'title': '@ctitle()', //标题 
            'cparagraph' : '@cparagraph(10, 10)',  
            'name':'@cname()',
            'articleTime':'@datetime' ,  //文章时间 
        },
        {
            'title': '@ctitle()', 
            'cparagraph' : '@cparagraph(10, 10)',  
            'name':'@cname()',
            'articleTime':'@datetime' ,
        },
        {
            'title': '@ctitle()', 
            'cparagraph' : '@cparagraph(10, 10)',  
            'name':'@cname()',
            'articleTime':'@datetime' ,
        },
    ],

    })

    // 自动加载 
    // 文章列表 axios请求 
 var  articleList  =  new Vue({   //articleList 文章列表 
    el:'#article-List',
    data:{
        all:'' ,
    },
    created:function(){
            axios.request({
            url: "/Student/24",
            method:"get",
        }).then((response) => {  
            this.all = response.data.OnePageArticle ;
        })
    },

})

    // 自动加载 
    // 右侧关键字请求 
    Mock.mock("/Student/25", {

        "rightkeyword":
        [
            {
                'keyword': '@word', //标题 
            },
            {
                'keyword': '@word', //标题 
            },
            {
                'keyword': '@word', //标题 
            },
    
        ],
    
        })
    // 自动加载 
    // 右侧关键字请求 
    var  rightKeyword  =  new Vue({  
        el:'#right-Keyword ',
        data:{
            pagekeyword:'',
        },
        created:function(){
                axios.request({
                url: "/Student/25",
                method:"get",
            }).then((response) => {  
                this.pagekeyword = response.data.rightkeyword ;
            })
        },
    
    })
    
    // 自动加载 
    // 右侧广告请求 
    Mock.mock("/Student/26", {
    
        "rightSlogan":
        [
            {url:'https://17bang.ren/Code/611',text:'广告招商1'},
            {url:'https://17bang.ren/Code/611',text:'广告招商2'},
            {url:'https://17bang.ren/Code/611',text:'广告招商3'},
    
        ],
    
        })
    
    // 自动加载 
    // 右侧广告请求 
    var  rightSlogan   =  new Vue({   // 右侧广告 
        el:'#right-Slogan',
        data:{
            allSlogan:'',
        },
        created:function(){
                axios.request({
                url: "/Student/26",
                method:"get",
            }).then((response) => {  
                this.allSlogan = response.data.rightSlogan ;
            })
        },
    
    })
    



// 关于分页，前端给后端的要求：
// 可以是：给第2页的文章（每页10篇），告诉我一共有多少页
// 也可以是：给第11-20篇文章，告诉我一共多少篇文章
// 但前端要能将用户点击第几页、上/下一页的信息传递给后端。
// 分页请求 
var  pagingFun  =  new Vue({   //paging 分页 Fun 功能 
    el:'#paging-Fun',
    data:{
        pageNumeber:[], //后端传递总页数值 
        nowPageNumeber:'' , //now 现在停留页数 
    },

        created:function(){
            axios.request({
            url: "/Student/24",
            method:"get",
        }).then((response) => {  
            for (let i = 1; i <  response.data.pageNumber+1; i++) {
                this.pageNumeber.push(i)
            }  
        })
    },

    computed: {
        // 第一页时 上一页图标消失 
        previousPageShow:function() { //previousPage 上一页   
            return  !(this.nowPageNumeber == '1')   ;
        },

        // 最后一页时 下一页图标消失 
        pageDownShow:function() { //pageDown 下一页   
            var pagemax = Math.max.apply(null,this.pageNumeber);
            return  !(this.nowPageNumeber == pagemax);
        },

    },

    methods: {

        pageNumberget:function (event) {
            // 获取用户点击页数 
            let clickNumber = event.target.innerHTML ;
            // 获取用户停留页数 
            this. nowPageNumeber = event.target.innerHTML ;
            
            // 传给后端 
            axios.request({
                url:  "/Student/24",
                method:"get",
                params:{
                    clickNumber,
                }
            })
        },

        previousPageEvent:function () { //previousPage 上一页 
            let previousPagevalue =  this.nowPageNumeber - 1 ;
            
            // 传给后端 
            axios.request({
                url:  "/Student/24",
                method:"get",
                params:{
                    previousPagevalue,
                }
            })
        },

        pageDownEvent:function () {  // pageDown 下一页 
            let  pageDownvalue =  +this.nowPageNumeber + 1 ;
            
            // 传给后端 
            axios.request({
                url:  "/Student/24",
                method:"get",
                params:{
                    pageDownvalue ,
                }
            })
        },
        
    }

})


// 根据当前用户（纯前端通过vue data模拟，全栈通过cookie确定）是否有新通知决定铃铛是否闪烁，注意：
// 需要用定时器每隔一段时间就检查一次
// 如果铃铛已经闪烁，就不用检查；
// 除非用户标记已读/删除了通知


// news:消息
Mock.mock("/Student/23", {
    "yjdNews":  '@ctitle()' ,
    "yjdNewNews": 'false' ,
    })


var RefreshContainer ;
// 刷新 container：容器  存放是否有新消息请求  

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
        setInterval(function () {
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
                    this.$refs.blinkSeate.style = "color:''"
                    // 当布尔值为false的时候 取消闪烁 
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

// 发起新消息请求 
// newNewsfun.RefreshExamineNews()
// 请求结果  1
// article.js:304 2
// article.js:289 1
// article.js:304 2




