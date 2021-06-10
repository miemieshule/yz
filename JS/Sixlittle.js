// // 函数调用
// // 函数当中的设定参数是接收，函数执行时传入的参数，然后进行运算 
// // 一个函数名能当参数接收 然后调用运算

// const { flip } = require("@popperjs/core");

// const { flip } = require("@popperjs/core");

// // 回调例子
// // 问 ：main(callback); 回调执行顺序是什么？
// // 答 ：调用main 调用func func调用callback 
// // 思考 不直接写函数名字来实现调用 ，老大要码人 ，中间人帮忙喊人， 来调用 
// function main(func) {
//     console.log("I'm main function, I invoked func()");
//     func();   //调用了回调函数
// }

// main(callback);

// function callback() {    //callback可以决定main函数运行的内容
//     console.log("I'm a callback function");
// }

// // 回调
// // 问 ：main(callback); 已知调用callback函数 那callback函数本身如何传入参数呢？
// // 答 ：A 在min中设置参数值 min调用时读取
// // 答 ：B 全局变量 来调用 
// // 说明 最好把调用全局变量 封起来 iife 

// // 思考 老大要码人打架 中间人帮忙喊人， 还得给人准备干活资料 func准备参数  
// function main(func) {
//     console.log("I'm main function, I invoked func()");
//     var sname = 'yjd' ;
//     func(sname);
// }

// main(callback);

// function callback(sname) {
//     console.log("I'm a callback function with name" + sname);
// }

// // 思考 老大要码人打架 中间人帮忙喊人， 老大准备干活资料 min准备参数 ，绑定啦 老大要负责小弟所有资料 
// function main(func,sname) {
//     console.log("I'm main function, I invoked func()");
//     func(sname);
// }

// main(callback,'刘伟');

// function callback(sname) {
//     console.log("I'm a callback function with name" + sname); 
// }

// // 思考 老大要码人打架 中间人帮忙喊人， 干活资料从天上掉了很多， 中间人指定要哪几个资料， 
// var age = 12 ;
// var sname = 'yjd' ;
// function main(func) {
//     console.log("I'm main function, I invoked func()");
//     func(sname,age);
// }

// main(callback);

// function callback(sname,age) {
//     console.log("I'm a callback function with name" + sname +age);
// }

// // 老大要码人打架 中间人帮忙喊人，  老大还买了空间包 , 小弟所有武器都可以放里面 
// // var age = 12 ;
// // var sname = 'yjd' ;
// function main(func) {
//     console.log("I'm main function, I invoked func()");
//     func(sname,age);
// }

// main (function () {
//     callback('刘伟' , 23)
// });

// function callback(sname,age) {
//     console.log("I'm a callback function with name" + sname +age);
// }

// 思考 老大要码人打架 中间人帮忙喊人， 还得给人准备干活资料 func准备参数  
// 思考 fun决定用什么参数武器 
// function main(func) {
//     var age = '23' ;

//     func(age);

//     if (func(age)==true) {
//         console.log('恭喜 能拿退休金了 ');
//     }else{
//         console.log('不凑巧 你还没退休');
//     }
    

// }

// main(function (age) {
//     return age > 60 ;
// });

// function hasRetire(age) {
//    return age > 60 ;
// }

// 不要搞错地方 一个是调用 一个是传调用函数传入参数  
// 参数设定在min中，调用参数从min中取出参数执行自身 
// a=23 为假 
// 执行 不凑巧没退休 
// 传值对函数进行一次调用,min中分身运算时在进行一次调用     
// 调用函数在调用时候接受min函数,然后自身运算,自身运算完成后把值给 , min中的分身接着运算 .


// yz.fei.get(number, handler)除number以外，还可以接受任意多个回调函数handler做参数，得到：0到number间有多少个满足handler条件的整数。
// handler 处理器 

// var yz = {};
// yz.fei = {};


// var Acount = 0 ;
// var Bcount = 0 ;
// var Ccount = 0 ;

// yz.fei.get = function (number,has9) {


//     for (let i = 0; i < number.length; i++) {

//         if ( (has9(number[i])==true) ) {
//             Acount++;
//         } else if  (has8(number[i])==true) {
//             Bcount++;
//         }else if (has6(number[i])==true) {
//             Ccount++;  
//         }
//         else{
//             console.log('不是');
//         }
//     }
//     console.log(Acount);
//     console.log(Bcount);
//     console.log(Ccount);
// };

// yz.fei.get ([0,9,8,6,0,9,8,6,0],has9,has8,has6);


// // // 判断9
// // //  传入参数 多次判断 判断条件 
// // // comparison 对比 nine 9 
// function has9(number) {

//         if (number==9 ) {
//             return true ;
//         }else{
//             return false;
//         }
    
// }

// // // 找出参数8 函数
// function has8(number) {
        
//         if (number === 8 ) {
//             return true ;
//         }else{
//             return false;
//         }
// }

// // // 找出数字6函数 
// function has6(number) {
        
//         if (number === 6 ) {
//             return true ;
//         }else{
//             return false;
//         }
// }
