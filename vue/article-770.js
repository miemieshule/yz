var listContent  = new Vue({
    el: "#div-content",
    data: {
        time: "021年04月25日 17点48分1秒",
        head:"常见面试题：GET和POST",
        img:'<img src="/img/wzxqa2.png" alt="">',

        loginState: true ,
        isAuthor:false,
        isAdmin:true,

    }
})

//  登录
// 控制台输出 已登录 显示输入框 true  未登录 listContent.isAuthor = false

// 作者
//  是作者 listContent.isAuthor = true 
//  不是作者 举报者  listContent.isAuthor = fales       
//  不是作者 管理员  listContent.isAuthor = false, listContent.isAdmin = true


// 免费广告列表图标颜色 渲染修改 
var rightContent  = new Vue({
    el: "#right-content",
    data: {
        iscolors:["0.2","0.4","0.6","0.8",] 
    }
})

// 评论列表：含评论的回复 
// 看不懂 


