
// 查询  id 类名 标签名 

// 需求
// 根据下标查询dom节点
// document.getElementsByClassName("red")[0]

// 需求 
// 查询表单元素的 name 属性
//  getElementsByName()

// 需求
// 获取第一个p标签下的第一个a标签
// document.getElementsByTagName('p')[0].getElementsByTagName('a')[0]



// 需求 
// dom查询
// 查到悬赏标签，整个值
// 循环查询悬赏标签 
// issun()
// var acuont = 1;
// function issun(params) {
//     for (let i = 1; i < 100 ; i++) {
//         var s =  document.getElementsByClassName("status")[0].getElementsByTagName("span")[0].nextElementSibling ;
// document.getElementsByClassName("status")[0].getElementsByTagName("span")[0].getElementsByTagName("span")[0].nextElementSibling
//         var locationB = d.innerHTML;
//         if (locationB <2) {
//             acuont++;
//         }
//     }
// }

// 作页统计
// document.getElementsByClassName("status")[2].getElementsByTagName("span")[0].getElementsByTagName("span")[3]
// 作业 修改颜色
// s = document.getElementsByClassName("pull-left")[4].getElementsByTagName("label")[3]
// s.style.backgroundColor = "red";

// 表单元素练习
// 需求
// 取出静态页面 输入框的值和赋值 
//  document.getElementsByName("username")[0].value
// document.getElementsByName("username")[0].value = 123

// 需求
// 取出静态页面 单选框输入框值 
//  document.getElementsByName("username")[0].value

// 需求
// 判断输入框有没有被选中 选中状态是什么？
// checked 选取 
// document.getElementsByName("gender")[0].checked
// 不同状态 
// document.getElementById("remember").checked
// false
// document.getElementById("remember").checked
// true

// 需求
// 取出下拉列表的值 
// document.getElementsByName("province")[0].value

//需求
// 拿到下拉列表值
// document.getElementsByName("province")[0].children[0];

// 需求
// 拿到选中的下拉列表
// 方法 利用selectedOptions属性拿到了你选中的option
// https://blog.csdn.net/u010937045/article/details/87206312
// 两种变化 
// document.getElementsByName("province")[0].selectedOptions[0];
// <option value=​"js" selected disabled>​江苏​</option>​

// document.getElementsByName("province")[0].selectedOptions[1];
// undefined

// document.getElementsByName("province")[0].selectedOptions[0];
// 不管选什么返回的都是下标0读取 
// 特点
// 这个好像只能告诉我选了是什么玩意，不告诉我下标 

// 需求
// 拿到下拉列表选中状态的下标
// document.getElementsByName("province")[0].selectedIndex;
// 1

// 需求
// 拿到下拉列表显示文本值
// document.getElementsByName("province")[0].selectedOptions[0].innerHTML;
// "黑龙江"

// 需求
// 让下拉列表第一个值不可选 禁用
// document.getElementsByName("province")[0].firstElementChild.disabled = true ;

// 如何设定选中？ 
// selected  方法
// 属性规定在页面加载时预先选定该选项。 被预选的选项会显示在下拉列表最前面的位置。
// 特点 
// 并且优先取出这个值 

//需求
// 如果禁用单选框的值？
// document.getElementById("remember").disabled = true ;
// 语法
// checkboxObject.disabled=true|false

// 需求
// /参考用户注册页面，显示错误提示：
// 密码的长度不能小于4
// 密码和确认密码必须一致
// a 提交时候验证 点击链接   获得dom元素 拿到输入值 存入变量 if 对比 错误提示 正确进行 确认密码 对比，

// function hint(params) {
//     var apaswrd = document.getElementsByName("password")[0].value ;
//     var bpasword = document.getElementsByTagName("form")[0].getElementsByTagName("label")[2].getElementsByTagName("input")[0].value
//     if (apaswrd.length<4) {
//         alert('密码的长度不能小于4');
//     }else if (apaswrd!=bpasword) {
//         alert('密码和确认密码必须一致');
//     }
// }   

// 需求
// 实现铃铛（没有学bootstrap的同学用文字代替）闪烁效果
// 一明一暗图标 定时器 一个执行明亮一个执行一秒明  一个执行一秒暗  明在前 暗在后执行 立即执行 
// 获取元素 注意异步是前后不一样的 前三秒要等后三秒
// Bell 铃铛

// function bell (params) {
//     var isbell = document.getElementsByClassName(" fa fa-bell-o")[0] ;
//     var iscolor = ["red","blue","white"]
//     var radom = Math.floor(Math.random()*3)
//     var bisbell = isbell.style.color = iscolor[radom] ;
// }
// setInterval(bell,1000)
// setInterval(setInterval("bell()",1000))