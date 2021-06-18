//  作用域练习 

//  问:在哪里是局部变量的范围？ / 答：函数体内部 
// chunk 块 
// function chunk1(params) {
//     var s = 10 ;
//     var b =20 ;
//     console.log(s);
// }

//  问:变量定义在后面 先打印函数可以吗？ / 答：不行 会传未定义
// chunk 块 
// function chunk2(params) {
// console.log(s);
// var s = 10 ;
// };

//  问: 题目如下 if没有用函数包起来 ，在外面，定义变量是否可以打印输出？ / 答：可以 属于全局变量 
// if (true) {
//     var names = '杨嘉栋' ;
//   }


// 全局变量污染 
// pollution 污染 
// 问 ：前面一个提示 a='你好' 后面一个 a = '你好吗' 会显示哪一个值？ /
// 答：js文件的会覆盖页内srcing 证明 把js文件a注释 代码执行会找到业内string的a进行传值 ，如果同一个js文件不会产生覆盖， 

//  全局变量是个王八蛋 会导致难以工程化 

// var a = '你好' ;
// alert('msg'+a);

// 全局变量扩展学习a
// 问：reallySmart(); 调用其中 smart(); 时候 sname的值从哪个位置开始找的？ / 
// 答：从samrt函数上方去找！ 有点像冒泡，不过要找到自己的池塘位置然后往上窜！
// 问：reallySmart(); 在这个函数中 调用输出的是什么值？ /    答：子祥 

// all();
// function all(params) {
//         var sname = "飞哥";
//     function smart() {
//         alert(`${sname}最帅`);
//     }

//     function reallySmart() {
//         var sname = '子祥';
//         smart();
//         //局部变量sname有更高优先级
//         console.log(sname);
//     }
//     reallySmart();
// }

// 全局变量扩展学习B 变量的执行状态 
// a age放在w外层函数外能执行吗？ /  答：一个可以 | 两个都放在函数外执行哪一个？/ 答:直接报错哪个都不执行 。
// b age 一个放在函数外 一个放在函数内 执行哪个值？/ 答：执行 0 ，依然是就近往后找 顺藤摸瓜 
// c age 执行第二个函数尾部放置 会产生什么值？ / 答 ： 未定义 
// d age 执行第二个函数尾部放置 不声明他 用 age =1000 ; 表示， 那么这个是outFunc的局部变量 还是全局变量 ？ / 答 ： 全局变量 
//  问：这个和上一个区别在哪？ / 答：上一个是A函数内执行B函数，要去B函数的位置往上找， 这个是第三个内置函数 不是 a调用b的方式。
// 意外错误 
// 三个函数套一块 没细查，但是使用第三个函数会没有执行其中两个函数 


// outFunc();
// function outFunc(sname) {
//     function innerFunc() {
//         alert(age);  
//     }
//     innerFunc();
//      age = 1000;
// } 

//  严格模式是什么？ 对js代码的规定 比如必须有变量声明
// 如何使用严格模式 ？ 在strcing标记顶部加入，在js文件顶部加入 ，在函数中的顶部加入，这几个区别就在于影响范围。
// 严格模式的坏处在哪？

// IIFE是什么东西 隔离 
// 像是集成的电路板所有参数都封进去，焊死。电路板一通电就传参数给元件，但是电路板的参数封闭，不对电路板上的元件参数运行造成影响。
//IIFE的目的是为了隔离作用域，防止污染全局命名空间。立即执行。不用命名。
// ES6以后也许有更好的访问控制手段（模块？类？），有待研究。
//  写法



// 问 ： 如果没有封作用域 控制台输入YZ 那么能获取到y对象的isname的值吗？ 答：没有找到 会报错 
// 问 ： 如果封作用域 控制台输入 YZ 那么能获取到y对象的isname的值吗？ 答：可以 还得不对YZ 声明var 否则获取不到 
// 解惑
// 在 js 中，声明变量时加上关键字和不加关键字是不一样的，var arg = 1 这样的声明，arg 的作用域只在当前页面或者当前的方法中；但是如果声明时不加 var 而是直接声明 arg = 1 ，js 就会认为这是一个全局变量，即使它是在一个函数体中声明的。

// 作者：次人君在野原之森网络工作室
// 链接：https://www.jianshu.com/p/304862d787f4


 (function () {
        YZ = {
        isname : '马牛碧'
    };

     suname = '2号马牛碧' ;

    function duang2 (params) {
        console.log(suname + '你好 来吗');
    }
})();

//什么是模拟命名空间 ？ 个人 命名能有多少存放的地方并且重复的可以单独分开然后每次调用 
// 进化
// 根据属性细节来区别变量 name.w  或者 name.l ，执行name.l 
// 资料
// 举一个简单的例子，如果有两个人都叫小明，我们很难区分和引用这两个人。
// 但如果我们在他们前面加上命名空间，比如：北京的小明和上海的小明，那么区分起来就容易的多了，也不会因为重名而找错人了。

// 怎么使用命名空间?
// 使用细节 ？ 不能用var声明 
var china = {};
china.xj = {};
china.xj.wulmq = function (params) {
    console.log(' 测试命名空间使用 ');
};
china.xj.wulmq();

// 问 有更多的调用方式吗？
// 答 调用方式 china.xj.wulmq.isname;  返回 "杨嘉栋"
china.xj.wulmq = {
    isname : '杨嘉栋',
    yjd : function(){
        console.log(' 测试命名空间更多使用方法使用 ');
    }
    
};
china.xj.wulmq.isname;


// 作业
// 使用“模拟名称空间”技术，构建一个函数 函数yz.fei.get(number)；
//   var yz = {};
//   yz.fei = {};
//   yz.fei.get = function (params) {
//       console.log('飞哥帅');
//   };

//   yz.fei.get();

// 简单调用
//   var yz = {};
//   yz.fei = {};

//   yz.fei.get = function (isnam,md) {
//       if (md(isnam)==true) {
//           console.log('这是真的');
//       }
//   };


//   yz.fei.get('杨嘉栋',md);

//   function md (isnam){
//     if (isnam=='杨嘉栋') {
//         return true ;
//     }
//   }