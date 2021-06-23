// 原生事件


// 调试
// 弄清楚 绑定事件和执行事件的顺序 

// onEventType on 通 事件类型 

//需求
// 使用行内方式绑定 事件 
// function greet(sname) {
//     alert('源栈欢迎你,' + sname);
// }

// 特点
// 绑定点击 点击标题同样能触发点击事件 
// 缺点
// 不够清晰 没有分开存放 高耦合 


// 需求 
// dom元素选择  id绑定选择 进行事件绑定
// document.getElementsByTagName('h1')[0].onclick = greet;  
// function greet() {
//     alert('源栈欢迎你' );
// }

// 需求 
// dom元素选择  id绑定选择 进行事件绑定并且传参
// document.getElementsByTagName('h1')[0].onclick = function(){
//     greet('杨嘉栋')
// };  
// function greet(usname) {
//     alert('源栈欢迎你' + usname);
// }

// 需求
// 使用官方推荐的 addEventListener 添加 事件  监听 
// 使用官方方法对dom元素进行监听 
// document.getElementsByTagName('h1')[0].addEventListener("click",greet);
// function greet(usname) {
//     alert(' addEventListener '+ '源栈欢迎你' + usname);
// }

// 事件源指向
// this
// 例子 
// document.getElementsByTagName('h1')[0].addEventListener('click', greet);
// function greet(usname) {
//     alert(this.innerText);
// }
// 特点
// 这个和上一个区别在于哪里？
// 第一行使用add已经进行了 指向了dom元素 进行事件绑定，在方法中 使用this再次 对add绑定dom元素进行指向并且应用方法取出 
// 资料
//h1标签 要永远指向 greet 对象本身 


// envent 事件参数 
// 事件调用函数可以带一个event参数
// 上面的例子 click 点击事件，调用greet greet就是事件调用函数，就是说 grtte方法 会带一个envent 事件 参数 ， 指向事件对象 click 

// 资料
// 比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态
// 这家伙好像是个判断 
// 分析
// 拿到事件判断后的值,事件又是针对dom元素判断触发的 ,所以这个参数不光针对事件有用,同样针对dom元素有用


// 作业
// 一个“前一页”按钮，点击可以跳到上一页；一个“下一页”按钮，点击可以跳到下一页；
// 

// document.getElementsByTagName('button')[0].addEventListener('click', agreet);
// function agreet(usname) {
//     window.location.href = "http://17bang.ren";
// }
// document.getElementsByTagName('button')[1].addEventListener('click', bgreet);

// function bgreet(usname) {
//     window.location.href = "https://www.w3school.com.cn/jsref/dom_obj_event.asp";
// }

// 一个a标签，点击不会跳转到href指定页面，而是将href的值赋值给下面的一个文本框，
// 思路 
// 按钮包起来，然后禁用掉a，点击按钮获得a内容  去除按钮默认样式 ，只显示a标签 

// var isa = document.getElementsByTagName('button')[2].addEventListener('click', adata);

// function adata(usname) {
//   var isahref = document.getElementsByTagName('button')[2].getElementsByTagName("a")[0].href ;
//   var isinput =   document.getElementsByTagName('input')[0].value = isahref;
// }



// 一个“转到”按钮，点击该按钮页面可跳转到文本框指定的网址页面
// 思路 
// 按钮 点击事件 ，dom文本框 内容 ，赋值给按钮 location方法 
// var isbutton = document.getElementsByTagName('button')[3].addEventListener('click',turn)

// function turn(){
//     var isinput =   document.getElementsByTagName('input')[0].value ;
//     window.location.href = isinput ;
// }




// 常用事件类型 
// 鼠标 键盘 表单 

// 需求
// 鼠标滑过按钮 控制台打印鼠标移入 
// var ismouseoverbutton = document.getElementById('ismouseover').addEventListener('mouseover', onmouseover)
// function onmouseover(){
//     console.log('鼠标移入');
// }

// 作业例子
// 参考求助首页侧边栏关键字，实现：当鼠标移动到关键字上，显示关键字被使用次数
// istime
// document.getElementById("istime").addEventListener('mouseover',function(){
//     alert('使用788次');
// })

// var ismouseoverbutton = document.getElementById('ismouseover').addEventListener('mouseout', onmouseout)
// function onmouseout(){
//     console.log('鼠标移出');
// }

// var ismouseoverbutton = document.getElementById('ismouseover').addEventListener('mousemove', onmousemove)
// function onmousemove(){
//     console.log('鼠标移动执行事件次数');
// }

// 特点 
// 鼠标的光标在按钮范围内，不停的重复执行事件 






// 键盘事件
// 需求  
// 场景 form表单验证 

// 官方推荐的写法 好像哪里有问题  
// var iskeypress = document.getElementsByName('username')[0].addEventListener('onkeypress',isonkeypress)
// function isonkeypress(event){
//     console.log(event.key);    
// }

// 已确认可使用写法
// 需求
// // 检测用户键盘输入的字符内容
// document.getElementsByName('username')[0].onkeypress = function(event){
//     console.log(event.key);
// }

// 已确认可使用写法
// 需求
// // 检测用户按下了什么键 tab?
// document.getElementsByName('username')[0].onkeydown = function(event){
//     console.log(event.key);
// }
// 语法
// 判断键盘内容要加引号  (event.key=='Tab')  

//需求 
// 自定义关键字输入完成后（按空格键），输入的关键字显示在下拉列表上方
// 拿到元素 绑定键盘事件 拿到输入值 ，复制插入代码 
// iscustom
// var iscustom = document.getElementsByTagName('form')[3].getElementsByTagName('label')[1].getElementsByTagName("input")[0].addEventListener('onblur',function(event){
//   console.log(event.key); 

// })

// 需求
// // 检测用户按下 输入后 释放什么键盘键 tab ?
// document.getElementsByName('username')[0].onkeyup = function(event){
//     console.log(event.key);
// }
// 特点
// 一次只拿到一个释放的键盘标识 




// 表单事件
// 需求
// 表单输入框 获得焦点后, 打印我获得了焦点 
// document.getElementsByName('username')[0].onfocus = function(event){
//     console.log('我获得了焦点 以此刻无敌');
//     this.style = "background-color:blue"
// }

// 需求
// 表单输入框 获得失去焦点后, 打印我失去了焦点 
// document.getElementsByName('username')[0].onblur = function(event){
//     console.log('失去焦点的感觉 原来是这样吗');
//     this.style = "background-color:red"
// }

// 表单事件
// 单选 复选 下拉 选择器 事件 

// 需求
// 判断输入框有没有被选中 选中状态是什么？
// checked 选取 
// document.getElementsByName("gender")[0].checked
// 不同状态 
// document.getElementById("remember").checked
// false
// document.getElementById("remember").checked
// true

//需求
// 判断单选框是否被选中 
// change=变化 
//  var ischange = document.getElementById('remember').addEventListener('change',function(){
    // console.log(this.checked);  //输出change方法的值 
//  })
//  
// 特点
// 选中时候为true 取消选中为fales

// 参考消息页面：完成勾选全选功能
// 思路 绑定全选dom元素  拿到全选后的值，if判断，进行循环绑定 ， 并且给选中值 
    // var ischeckvalue = document.getElementById("ischeck").addEventListener('change',function(){
    //     if (this.checked==true) {
    //         var issubset = document.getElementsByTagName('form')[1].getElementsByTagName('input')
    //         for (let i = 1; i < issubset.length; i++) {
    //             issubset[i].checked = true ;
    //         }
            
    //     }
    //     if (this.checked==false) {
    //         var issubset = document.getElementsByTagName('form')[1].getElementsByTagName('input')
    //         for (let i = 1; i < issubset.length; i++) {
    //             issubset[i].checked = false ;
    //         }
            
    //     }
    // })


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

// 需求
// 多选框 用户一个选项不能连续点击 ，换选项后才允许点击
// 特点 
// 下拉列表的多选，当你选项发生变化时候，事件执行一次 ，选择不发生变化不会执行 
// 默认状态的选择，不可点击， 如果选别的选项，默认状态就会取消允许再次点击 
// document.getElementsByName('province')[0].addEventListener('change',function(event){
//     console.log(this.selectedOptions[0]);
//     console.log("changed");
// })

// 需求
// 多选框 用户一个选项可以连续点击 ，换选项后也允许连续点击
// document.getElementsByName('province')[0].addEventListener('click',function(event){
//     console.log(this.selectedOptions[0]);
//     console.log("changed");
// })

// 总结
// change和ciick作用相同
// 上面两个只有通过鼠标点击才会触发事件   

// 需求
// 根据下拉列表选中项，填充“文字内容”和“链接”文本框
// 参考求助首页侧边栏“免费广告发布”弹出Modal，实现（不需要弹出Modal）：
// 思路 dom元素 点击 选择状态 ，获取值 ，另外两个dom元素 ，传值 ， 
// subscript 下标 

// document.getElementsByName('sloganProvince')[0].addEventListener('change',function(event){
//     var issubscript = this.selectedIndex;
  
//     var isAvalue = this.getElementsByTagName("option")[issubscript].value;
//     var isBvalue = this.getElementsByTagName("option")[issubscript].innerHTML;
 
//     var isAinput = document.getElementsByTagName("form")[1].getElementsByTagName("label")[2].getElementsByTagName("input")[0].value = isBvalue  ;
//     var isBinput = document.getElementsByTagName("form")[1].getElementsByTagName("label")[3].getElementsByTagName("input")[0].value = isAvalue ;

//     var isAinput = document.getElementsByTagName("form")[1].getElementsByTagName("label")[2].getElementsByTagName("input")[0].disabled = true ;
//     var isBinput = document.getElementsByTagName("form")[1].getElementsByTagName("label")[3].getElementsByTagName("input")[0].disabled = true ;
// })

// // 勾选修改的checkbox，实现“文字内容”和“链接”文本框的禁用和启用
// 思路 多选的元素节点 选中状态表示 判断 
// document.getElementById('isamend').addEventListener('change',function(){
//     var isAinput = document.getElementsByTagName("form")[1].getElementsByTagName("label")[2].getElementsByTagName("input")[0];
//     var isBinput = document.getElementsByTagName("form")[1].getElementsByTagName("label")[3].getElementsByTagName("input")[0];
//     if (this.checked==true) {
//         isAinput.disabled = false ;
//         isBinput.disabled = false ;
//     }else{
//         isAinput.disabled = true ;
//         isBinput.disabled = true ;
//     }
//  })


// 参考发布求助，实现其关键字功能：
// 没有选择一级关键字，不能选择二级关键字
// 选择一级关键字后，二级关键字只能是一级关键字下的子集
// 一级关键字和二级关键字被选中后，会显示在下拉列表上方
// 自定义关键字输入完成后（按空格键），输入的关键字显示在下拉列表上方
// 拿到元素 绑定键盘事件 
// 后输入的关键字显示在前面

// 需求
// 没有选择一级关键字，不能选择二级关键字
// 拿到二级dom元素 绑定点击事件 ，if判断，拿到一级是否为选择的状态值，如果等于，就弹窗
// document.getElementsByName("Bcascade")[0].addEventListener('click',function(){
//     var isAcascade = document.getElementsByName("Acascade")[0].selectedIndex;

//     if (isAcascade!=0) {
//         return ;
//     }else{
//         if (isAcascade==0) {
//             alert('你还没选择第一个关键字呢')
//         }
//     }
// })

// 需求
// 选择一级关键字后，二级关键字只能是一级关键字下的子集
//  给一级添加选择一次下拉选项  拿到选项下标 删除b原来的子集  拿到b所有子集 存入变量 拿到b 删除   添加新的子集 
// document.getElementsByName("Acascade")[0].addEventListener('change',function(){
//     var isAcascade = document.getElementsByName("Acascade")[0].selectedIndex;
//     if (isAcascade==1) {

//         var parent = document.getElementsByTagName("form")[3].getElementsByTagName("div")[0]
//         var Aisoption = document.getElementsByName("Acascade")[0].getElementsByTagName("option")[1].innerHTML
//         var  newspan = document.createElement('span');
//         newspan.style = "background-color:red ; border-radius: 5px; margin: 15px" 
//         newspan.innerHTML = Aisoption ;
//         parent.insertBefore(newspan,parent.childNodes[0]) //inserBefore 控制插入dom元素位置 

//         const child = document.getElementsByName("Bcascade")[0].getElementsByTagName("option");

//         for (let i = child.length-1; i >= 0 ; i--) {
//             const parent =  document.getElementsByName("Bcascade")[0];
//             parent.removeChild(child[i])
//         }


//         var istext = ['js','java','c++'];
//         for (let j = 0; j < istext.length; j++) {
//             var istext = ['js','java','c++'];
//             var  newoption = document.createElement('option');
//             newoption.innerHTML=istext[j];
//             document.getElementsByName("Bcascade")[0].appendChild(newoption);

//             var parent = document.getElementsByTagName("form")[3].getElementsByTagName("div")[0]
//             var  newspan = document.createElement('span');
//             newspan.style = "background-color:red ; border-radius: 5px ; margin: 15px" 
//             newspan.innerHTML = istext[j] ;
//             parent.insertBefore(newspan,parent.childNodes[1]) //inserBefore 控制插入dom元素位置 
            
//         }

//         // 下拉列表上方显示 拿到form父级 拿到子 然后添加span 然后加上背景色样式 ， 拿到a下拉选项 赋值 写入 


//     }

//     if (isAcascade==2) {

//         const child = document.getElementsByName("Bcascade")[0].getElementsByTagName("option");

//         for (let i = child.length-1; i >= 0 ; i--) {
//             const parent =  document.getElementsByName("Bcascade")[0];
//             parent.removeChild(child[i])
//         }

//         var istext = ['cad','word','vacode'];
//         for (let j = 0; j < istext.length; j++) {
//             var istext = ['cad','word','vacode'];
//             var  newoption = document.createElement('option');
//             newoption.innerHTML=istext[j];
//             document.getElementsByName("Bcascade")[0].appendChild(newoption);
            
//         }

//     }

// })





// 需求
// 因为输入问题 禁止用户提交表单 
// Submit 提交按钮事件  禁止用户提交  target目标指向  preventDefault阻止默认事件 
// document.getElementsByTagName('form')[0].onsubmit = function (event) {
//     event.preventDefault(); // 阻止按钮的点击事件 
//     // return false;  // 同样禁用按钮 好像是把按钮值给改了 
//     console.log(event);
// };
// 特点
// 好像只对 提交按钮禁用？

// 作业 例子 
// 提交时，如果用户名重复（已有用户名用数组保存），阻止form提交，提示“用户名重复”。
//  思路  拿到输入框元素 拿到输入值 焦点事件绑定判断 失去焦点就判断 判断成功重复 ，然后阻止提交， 如果输入框为空 那么取消不让用 

//  repetition 重复 
// document.getElementsByName('username')[0].addEventListener('blur',function(event){
//     console.log(this.value);
//     var isvalue = this.value ;
    

//     var repetition = ['杨嘉栋','大飞哥','神内胡萝卜']
//     for (let i = 0; i < repetition.length; i++) {
//         if (isvalue==repetition[i]) {
//             alert(' 你好 重名了');

//             document.getElementsByTagName('form')[0].onsubmit = function (event) {
//                 event.preventDefault(); // 阻止按钮的点击事件 
//             };
//         }
//     }
// })

// // 用户名或密码等有值时，关闭页面前弹出确认框
// 思路 拿到用户名dom元素值 进行判断 ，拿到密码dom元素进行判断 
// window.onbeforeunload = function () {
//     var isvalue = document.getElementsByName('username')[0].value
//     var ispaswrn = document.getElementsByName('password')[0].value
//     if(isvalue!=""&&ispaswrn!=""){
//         return confirm("数据未保存")
//     }   
// }











// 页面事件
// load 加载 /unload 离开等于页面跳转触发 
// 码农场景
//需要把代码写在html文件中，但是要等到dom元素加载完成，在执行事件绑定代码 

// <script>
// window.onload = function () {
//     document.getElementsByTagName('a')[0].onclick = function (event) {
//     return false;  // 同样禁用按钮 好像是把按钮值给改了 
//     }
// }
// </script>

// <script>
// // 测试 load后执行 
// console.log("先执行");
// </script>

// 码农场景
//需求 
// 用户填写表单,不小心点击了关闭,弹出提示真的要离开吗?
/* <script>
window.onbeforeunload = function () {
    return confirm("要离开吗?")
    }
</script> */

// 页面事件 滚动  
// scroll（滚动）


// /场外知识
// 不打断点的话，整个就直接执行提交到后台，一直加载根本看不出来
// 可以控制台查看事件 
// windowbom 代表整个窗体 

// 失误
// emm 怎么回事 自己写语法老是出问题 凸(艹皿艹 ) ，tm的 add方法上面不用写on 直接事件名 