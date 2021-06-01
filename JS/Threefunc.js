// 课堂 函数练习 

// 命名函数
function getFirst(number) {
    return number[0];
    console.log('hai');
}
getFirst([1,2,'2',false]);

/*命名函数 
执行输入 传入值，函数体功能对值计算，并且返回输出值 
发现
设定的参数名，是number 但是我传入的时候，不用写参数名，直接写数据？
*/

// 匿名函数
// 直接函数名加入参数，执行函数体 
// 区别使用变量名称
var anonymityFirst = function (number) {
    return number[0];
    console.log('hai');
}

console.log(anonymityFirst([1,2,'s',false]));

// 匿名函数 
// ？ 如何把函数结果赋值给匿名函数变量？
//  花括号后面加入参数 ，这会变成一个普通变量 固定值计算然后传入此变量中 
// 区别：使用变量名称  设定固定参数  函数立即调用 立即执行输出参数  
var OneanonymityFirst = function (number) {
    return number[1];
    console.log('hai');
}([1,2,'s',false])

console.log(OneanonymityFirst);

// 对象存储函数 
// 语法问题 每个键值对后面都要加上逗号分割/ 
// 匿名函数写法变化  var study = function () { } ; 要写成    tudy : function() {}  / 可能每一个键都是个类似变量 啥都可以放 ！
// Image 大象\ study 学习\
var OneImage = {
    name : '大王' ,
    study : function() {
        // alert('大王好 ');
    }
}
// 对象函数调用
OneImage.study();

// 对象存储函数 
// 问题：不存在封装 也就没有面向对象，
// 原因：后面写个  Image.study = 1 ;  值可以轻易覆盖 study的警告弹窗提醒，再次输出study方法 ' 控制台 TwoImage.study' ，就会变成 值为1 。
// 再次输出study方法 ' 控制台 TwoImage.study()' ，就报错不是函数!
// Image 大象\ study 学习\

var TwoImage = {
    name : '大王' ,
    study : function() {
        // alert('大王好 ');
    },
}


// 对象函数调用
// TwoImage.study = 1 ;

// TwoImage.study();

// 函数提升 
// 问：函数调用传实参，'getFirst([1,2,'2',false]);' 放在顶部能不能用?
// 答：可以用 执行时候往下找 
// lift 提 \ func 功能\
liftfunc([1,88,'s',true]);
function liftfunc(numeb) {
    return numeb[2];
}

// 匿名函数提升 
// 问：改成匿名函数调用传实参，'OnegetFirst([1,2,'2',false]);' 放在顶部能不能用?
// 答：不可以用 Uncaught TypeError: Oneliftfunc is not a function ,提示不是函数 
// 原因：成为了变量声明提升到顶部，变量并没有值。
// lift 提 \ func 功能\
// Oneliftfunc([1,88,'s',true]);
   var Oneliftfunc = function (numeb) {
    return numeb[2];
}

// 函数 原始值 传递
// 问：函数上方放声明一个值 var = 4 ；在函数中计算后，var是否会改变？
// 答：不会改变 
// price 值 \ func 功能\
var a = 4 ;
function Onepricefunc (a) {
    a *=2;
    var b = a ;
    console.log(b);
}
Onepricefunc(a); 
console.log(a);

// 函数 引用对象值 传递
// 问：函数上方放声明 对象 age4：20 ；在函数中计算后，objet是否会改变？
// 答：改变  引用传递 . 符号引用 
// 错误 : a语法 I引用对象值用 . 符号  mageprice.age *=2;
// price 值 \ func 功能\
// var Imageprice = {
//         names : '帅哥' ,
//         age : 40 ,
// } ;
// function Twopricefunc (Imageprice) {
//     Imageprice.age *=2;
//     var b = Imageprice.age ;
//     console.log(b);
// }
// Twopricefunc (Imageprice);
// console.log(Imageprice);

// 函数 引用对象值 传递 
// 问：函数上方放声明 对象 age：20 ；在函数体中 再次对age 重新赋值 ，objet 20 是否会改变？
// 答：对象中 20 不会改变， 方法中新定义的相同的键值对只停留在方法中。
// price 值 \ func 功能\
// var ThreeImageprice = {
//     names : '帅哥' ,
//     age : 40 ,
// } ;

// Threepricefunc (ThreeImageprice);

// function Threepricefunc (ThreeImageprice) {
// ThreeImageprice = { age : 2 }
// var b = ThreeImageprice.age ;
// console.log(b);
// }

// console.log(ThreeImageprice);

// 函数  function Fourpricefunc (FourImageprice) 引用值 加上return返回 会改变 对象引用值吗？ 
// 答：对象中 4 不会改变， 
// price 值 \ func 功能\
var FourImageprice = {
    age:4 ,
} ;

Fourpricefunc (FourImageprice);

function Fourpricefunc (FourImageprice) {
FourImageprice = { age:10 }
var b = FourImageprice.age ;
return FourImageprice.age ;
}

console.log(FourImageprice.age);


// 命名函数 testreturn 问： return换行 会导致传参失败吗？ 
// 答：会 
function testreturn(apricereturn) {
    return apricereturn [0];
}
console.log(testreturn([2]));

// 函数  参数 匹配 问：参数存在类型匹配吗？ 不存在 
// pair 比对 
// 语法错误 参数名和参数值数量相对\
function pricepair(a,b,c) {
    return a + b + c ;
}
console.log(pricepair(1,3,4));

// 函数  参数匹配学习 问：可以获得所有未定义的传参数吗？  
//  答：可以 并且会传入一个参数计算  1+3+4+5 = 13 
// pair 比对 
function Onepricepair(a,b,c) {
    return a + b + c + arguments.length;
}
console.log(Onepricepair(1,3,4,5,55));

//  函数 参数匹配应用 
// 需求 得出所有的参数和 
// request 请求 sum 总数 
console.log(Requestsum(1,2,3));
function Requestsum (a) {
    var sum = 0 ;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum);
}


