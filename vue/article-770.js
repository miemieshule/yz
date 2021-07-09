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
// 看不懂 怎么做 


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




// 分别用computed/methods/watch实现列表渲染中的作业。
    var isComputed = new Vue({
        el: "#iscomputed",
        data: {
            iscolors:["0.8","0.6","0.4","0.2",] ,
            colors:["#ffff00","#6b44b4","#c04870",] 
        },
        computed: {
            filtered : function () {
                return this. iscolors.filter(function (s, i) {    
                    return i > -1 ;
                })
            },
            fscolor: function(){
                return this.colors.filter(function (s, i) {    
                    return i > -1 ;
                })
            }
        }
    })


    var isMethods = new Vue({
        el: "#ismethods",
        data: {
            students:['夏康平','陈国栋', '韩佳宝'] ,
        },
        methods: {
            addnode:function(){
                for (let i = 0; i < this.students.length; i++) {
                    createchild = document.createElement('p');
                    createchild.innerHTML=this.students[i];
                    document.getElementById("ismethods").appendChild( createchild);
                }
            }
        },
    })

    // 失败作业
    // 作业后果 控制台isMethods.addnode() 输入调用才执行增加元素 


        var isWatch = new Vue({
        el: "#is-Watch",
        data: {
            students:['夏康平','陈国栋', '韩佳宝'] ,
        },
        watch: {
            students: function (newBody, oldBody) {
                for (let i = 0; i < this.students.length; i++) {
                    createchild = document.createElement('p');
                    createchild.innerHTML=this.students[i];
                    document.getElementById("ismethods").appendChild( createchild);
                }
            }
        }

    })

    //  失败作业
    //  isWatch.students.splice(1,1,'大飞')  
    // 控制台 程国栋 改 的为大飞，触发for循环 ，



    // 事件作业
    // 一个“前一页”按钮，点击可以跳到上一页；一个“下一页”按钮，点击可以跳到下一页； // 完成
    // 一个a标签，点击不会跳转到href指定页面，而是将href的值赋值给下面的一个文本框，// 完成
    // 一个“转到”按钮，点击该按钮页面可跳转到文本框指定的网址页面// 完成
    var isjump  = new Vue({
        el: "#is-jump",
        data: {
            topjump:'http://localhost:37472//Article/bsr-article.html',
        },

        methods: {
            clickGet:function(){
                this.$refs.topdata.value = this.topjump ;
            },
            inputGet:function(){
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
