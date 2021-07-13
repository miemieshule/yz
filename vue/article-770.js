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
// commen 评论 //author作者对象 //回复对象id ，这个作者的评论 回复的哪个楼id
// 当前这条评论回复的是哪一条评论id  

// a A作者写了一个评论  评论id = a1 
// b 展示作者信息
// c 展示作者评论信息
// d A作者回复了 B作者一条评论  评论id = b1 
// e 展示 B作者评论id 
// f 展示 回复B作者评论 内容 

// 先渲染正常评论 
// 在渲染回复评论 

// 两个for 一个显示正常评论 
// 一个显示回复评论,数据用同一家 

// 评论id  时间 作者 留言内容 
var commentList   = new Vue({
    el: "#comment-List",
    data: {
        comments:[
            { 
                id:1,
                time:'2021年11月12日', 
                content:'评论是个好地方',

                author:{id : 2 , name : '杨嘉栋'},  // 作者 
                replyid:1,  // replyid 回复id 
            
            },

            { 
                id:2,
                time:'2021年11月1日', 
                content:'评论是个坏地方',

                author:{id : 3 , name : '大飞哥'},  
                replyid:1, 
            },

            { 
                id:3,
                time:'2021年11月20日', 
                content:'评论有人吗',
                author:{ id : 3 , name : '肉熟了'},
            },
        ]
    },

    computed: {
        isReplyid:function () { // 是否回复 
            return this.comments.filter(function (s) {
                if (s.replyid != '' && s.replyid != undefined ) {
                    s.replyid = '回复'+ (s.replyid) + '楼' ;
                    return s ;
                }else{
                } 
            }.bind(this))
        },

        pageComments:function () { // 页面评论 
            return this.comments.filter(function (s) {
                return s.replyid == undefined ;
                
            })
        },

    }

})

// 第一种两个 分开渲染 ，带评论id 的行内计算 
// 第二种 分开渲染 行内计算挪到计算属性中  没有replyidID的也挪进来 
//  第三种 v- if ！='' && !=undefied  卧槽 真的可以啊 ，     <span  v-if="s.replyid!=''&& s.replyid!= undefined" >{{'回复'+s.replyid+'楼'}}</span> 

// 评论回复问题
// 第一次做不出来 无法想象怎么做
// 第二次理解错误，不是作者这个人附带评论信息，
// 第三次修改 评论和评论之间关系 ， 命名方式学习修改 


//  Vue：深入实例：生命周期钩子 / 内置属性方法 / 响应式原理 作业
// 生命周期钩子
//  一个对象从生成（new）到被销毁（destroy）的过程，称之为生命周期
// 流程
// 初始化：init created钩子函数结束。/  挂载：mount mounted结束。 / 更新：update （watch） 更改重新渲染触发钩子函数 / 销毁：destroyed 函数 / 

//钩子函数在实例中声明函数设置 
// vue.js 5901 行调用


// 响应式
// <!-- 一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项  Vue 将遍历此对象所有的 property 属性，并使用 Object.defineProperty '定义属性' 把这些 property 属性和值  全部转为 getter/setter -->
// <!-- 在 property '属性'被访问和修改时通知变更。 set变更重新渲染虚拟dom节点  -->
// <!-- vue 拿到数据 更改属性 绑定监察响应方法 如果修改了属性 调用监察响应中的更改方法 重新渲染  -->
// Vue只会被实例化一次，所以，之后添加到vue data的属性，Vue是不能予以监控的，所以就没有响应式的效果。

// set？
// 一个属性值被添加set函数后 ，能让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。
// 调用set()方法就能将新添加的属性纳入“响应式”？ 答：手动给实例的某个属性加上set方法进行监控 
// 为什么用等号赋值方式添加一个vue data属性之后，再使用set()就无效了？  答:二者不能共存 必须刷新清除 才能再使用set方法 



// Vue：计算属性computed / 方法methods / 监视watch 作业 
// 分别用computed/methods/watch实现列表渲染中的作业。
    var computedRendering = new Vue({  //Rendering:渲染
        el: "#computed-Rendering",
        data: {
            ads:[
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
            ] , 
        },
        computed: {
            adsWithClass : function () { //不透明度 选择 
                return this.ads.map(function (s, i) {    
                     s.class = "ad-" + (i+1) ;  // 重点 等于号 给给每个元素加一个calss 
                    return s ; // 返回每个元素 包括元素内的url和文本也返回 
                })
            },
        }
    })


    var methodsRendering = new Vue({
        el: "#methods-Rendering",
        data: {
            ads:[
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
            ] , 
        },
        methods: {
            adsWithClass : function () { 
                return this.ads.map(function (s, i) {    
                     s.class = "ad-" + (i+1) ; 
                    return s ;
                })
            },
        },
    })

    // 本想用闭包 ，好像不支持？
    // for循环 调用方法返回新的数据源 


        var watchRendering = new Vue({
        el: "#watch-Rendering",
        data: {
            ads:[
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
                {url:'https://17bang.ren/Code/611',text:'广告招商'},
            ] , 
        },

        methods: {
            adsWithClass : function () { 
                return this.ads.map(function (s, i) {    
                     s.class = "ad-" + (i+1) ; 
                    return s.class ;
                })
            },
        },


        watch: {
        }

    })

    // 3小时 想不出来怎么做,除了换for的数据源, 貌似没有办法,但是Wath中也不能这么改 v-for = "adsWithClass"
    // 


    // 事件作业
    // 一个“前一页”按钮，点击可以跳到上一页；一个“下一页”按钮，点击可以跳到下一页； // 完成
    // 一个a标签，点击不会跳转到href指定页面，而是将href的值赋值给下面的一个文本框，// 完成
    // 一个“转到”按钮，点击该按钮页面可跳转到文本框指定的网址页面// 完成
    var jumpEvent   = new Vue({
        el: "#jump-Event",
        data: {
            topjump:'http://localhost:37472//Article/bsr-article.html',
        },

        methods: {
            clickGet:function(){  //点击获取 
                this.$refs.topdata.value = this.topjump ;
            },
            inputGet:function(){ //输入框获取
                this.$refs.inputdata.href =  this.$refs.topdata.value;
            },
        }
    })
    // jump 跳  



    // 参考求助首页侧边栏关键字，实现：当鼠标移动到关键字上，显示关键字被使用次数 // 已经讲过 
    // 参考一起帮首页，实现右侧漂浮并底对齐左侧文本框的效果 // 做不到 
   
    // 参考消息页面：完成勾选全选功能 // 完成 //作业文件夹位置 Message 
    
    // 参考注册页面： 作业位置 //Register 
    // 提交时，如果用户名重复（已有用户名用数组保存），阻止form提交，提示“用户名重复”。
    // 重新输入用户名，一旦输入用户名部分没有重复，“用户名重复”的提示消失
    // 当用户名或密码等有值时，关闭页面前弹出确认框 

    // 根据下拉列表选中项，填充“文字内容”和“链接”文本框   //作业文件夹位置 Message 
    // 勾选修改的checkbox，实现“文字内容”和“链接”文本框的禁用和启用 //作业文件夹位置 Message 

    // 参考发布求助，实现其关键字功能： ////作业文件夹位置 Message 
    // 没有选择一级关键字，不能选择二级关键字
    // 选择一级关键字后，二级关键字只能是一级关键字下的子集
    // 一级关键字和二级关键字被选中后，会显示在下拉列表上方
    // 自定义关键字输入完成后（按空格键），输入的关键字显示在下拉列表上方
    // 后输入的关键字显示在前面
