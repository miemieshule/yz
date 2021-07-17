



// 根据当前用户（纯前端通过vue data模拟，全栈通过cookie确定）是否有新通知决定铃铛是否闪烁，注意：
// 除非用户标记已读/删除了通知


// news:消息
Mock.mock("/Student/23", {
    // unread:未读 news:消息 
    "yjdNews":  '@ctitle()' ,
    "yjdNewNews": 'false' ,
    "unreadNews":
    [
        {
            'title': '@ctitle()',//时间 
            'unreadContent' : '@cparagraph(1, 1)',  //段落
            'Readstate':'', // read:阅读状态 

        },
        {
            'title': '@ctitle()',//时间 
            'unreadContent' : '@cparagraph(1, 1)',  //段落
            'Readstate':'', // read:阅读状态 

        },
        {
            'title': '@ctitle()',//时间 
            'unreadContent' : '@cparagraph(1, 1)',  //段落
            'Readstate':'', // read:阅读状态 

        },

    ],
    })



var newsListFun  =  new Vue({   // news 消息列表功能 
el:'#news-ListFun',
data:{
    allUnread:'',
    nowUser:[  //now 现在用户
        { 
            user:{ name : '杨嘉栋' , role:'common'}  // role 角色  //common:普通
        },
    ],
   
},

created:function(){
        axios.request({
        url: "/Student/23",
        method:"get",
    }).then((response) => {  
        this.allUnread = response.data.unreadNews;
        console.log(response.data.unreadNews);
    })
},

methods: {

},

})





