// 类 对象  
// js中内置的就是类和对象
// 内置：包装 / 数组 / Math / Date

// Nuber 称之为包装类 通过包装类new出的一个对象，称为包装对象 
// 没啥用 ，包装对象和直接生产对象没区别 
// 不要用 

// 附带资料 new是个什么东西？
// 1.、创建了一个空的js对象（即{}）
// 2、将空对象的原型prototype指向构造函数的原型
// 3、将空对象作为构造函数的上下文（改变this指向）
// 4、对构造函数有返回值的判断

// var score = '98';
// typeof score ;

// Number 本身是个函数
// var score = Number(99) ;
// console.log(score);

// 函数和类混用 , 这么写会得到一个对象 Number可说是类或说函数 可以反过来用他生产一个对象 
// 对象中有数字88
// var score = new Number (88) ;
// typeof score ;
// console.log(score);
// // 类型 返回 "object"

// 数组
// 对数组赋值 、对数组设定长度 
var sb = [];
undefined

sb[8] = '1w' ;
"1w"

sb.length
9

sb.length = 1000 ;
1000

sb.length
1000
//  数组方法 
sb.slice(1,3);   // 截取数组下标 范围 
(2) [empty × 2]length: 2__proto__: Array(0)

sb.push(1)  // 数组末尾压入元素 
1001
sb.pop();  // 数组末尾元素 
1

sb
(1000) [empty × 8, "1w", empty × 991]
sb.shift(); // 删除数组头部元素 
undefined
sb
(999) [empty × 7, "1w", empty × 991]
sb.unshift('sbb'); // 数组头部添加元素 
1000
sb
(1000) ["sbb", empty × 7, "1w", empty × 991]


// 数组排序 
[16,5,95,2].sort();
(4) [16, 2, 5, 95]

// 数组排序增加方法 
[1,18,7,92,2].sort(function(a, b){
    return a>b ? 1 : -1;   //返回值只能是1或-1，不能是bool值
 })
 (5) [1, 2, 7, 18, 92]

 // 排序回调思路 写法
 function sort (func){
    var a = arr[i] ; b = arr[i+1]
    if (func(a>b)==1) {
        
    }else{
        return - 1;
    }
 }


// 数组链接数组 
[16,5,95,2].concat([{age:12,}]);
(5) [16, 5, 95, 2, {…}]
0: 16
1: 5
2: 95
3: 2
4: {age: 12}
length: 5
__proto__: Array(0)

// Math 数学类 
// 属于类的静态方法 通过math类直接调用 通过类名调用属于静态  ，不是类的实例（对象）调用 
// 类的实例（对象）调用如下， 属于 实例方法，concat是对象
[16,5,95,2].concat([{age:12,}]);
(5) [16, 5, 95, 2, {…}]
// 学到了 可以看类型看出对应的类型 和 是不是个类 

// 取决定值 
Math.abs(-8);
8

// 向上取整
Math.ceil(3.14);

// 向下取整
Math.floor(3.14);
3

// 随机生成一个0-1范围的小数 
Math.random(3.45555);
0.687081166930239

// 四舍五入 5取上
Math.round(3.565655)
4
// 四舍五入 4取下
Math.round(3.465655);
3

//  取得10以内的整数 
Math.floor(Math.random()*10);
8

// 取一个数值的后三位小数 
// 特点 返回值是字符串 
7.5655.toFixed(2);
"7.57"
7.5655.toFixed(3);
"7.566"

//其他类型数据转换成整数（int）或x小数（float）类型。
parseInt('23')
23

23
//  缺点 转化时候 会忽略字符串中的A，用户输入时候会无法判断 
parseInt('23A')
23

// 其他办法转化整数 
+ '23'
// 转换时候 报错 非数值的值 
+ '23o'
NaN

// 判断 如果是否数值  
isNaN('+23o')
true
// 是数字 报假 
isNaN(23)
false

// 字符串小数转化 
parseFloat('23.09')
23.09
parseFloat('23')
23

//+变量 的区别 ，+会与后面的值进行数值运算，拿到结果
+true
1
+null
0

parseInt(true);
NaN
parseInt(undefined);
NaN
parseInt(null);
NaN

// 对二进制进行转换 
parseInt('100122',2);
9
parseInt('100122',16);
1048866

// date 时间增加 飞哥版 
// 注意从当前的get获取的日期往后加 
var da = new Date();
undefined

da
Fri Jun 04 2021 16:20:51 GMT+0800 (中国标准时间)

da.getDate() + 3*7 ;
11

Date.parse( da.setDate(11))
NaN

new Date(da.setDate())
Sat Jul 03 2021 16:20:51 GMT+0800 (中国标准时间)

// 时间增加方法 资料版 
var addHour = curTime.setHours(curTime.getHours() + 1);
console.log('addHour:', addHour);
console.log(new Date(addHour));

var curTime = new Date();
console.log('curTime:', curTime);

var addHour = curTime.setHours(curTime.getHours() + 1);
console.log('addHour:', addHour);
console.log(new Date(addHour));

// curTime: Fri Jun 04 2021 16:46:03 GMT+0800 (中国标准时间)
// VM4288:4 addHour: 1622799963692
// VM4288:5 Fri Jun 04 2021 17:46:03 GMT+0800 (中国标准时间)

// 原文链接：https://blog.csdn.net/ztnhnr/article/details/109575861

// 资料
// 月Month、 日date 、年FullYea 、 时 Hours

// Month 月 输入Feb月份2 实际值减1 
// 返回一个0 到 11的整数值： 0 代表一月份，1 代表二月份， 2 代表三月份，依次类推
// date 日
// FullYea 全年 
// Hours 时 


// 字符串
var b = 'da'
undefined

b.length
2

b[0] = '1';
"1"

b[0];
"d"

// 赋值为1 但是实际字符串没有发生更改，查询依然是d字母 ，
// 数组返回值改变不代表字符串更改 

b.toUpperCase();
"DA"

b
"da"
// toUpperCase 方法 返回大写 但是实际字符串没有发生更改，查询依然是小写，
// 方法返回值改变不代表字符串更改 
// 要保存方法返回值 需要另存为变量中 
// 方法里面套方法 自己还是需要好好锻炼思维 

// 需求
// 指定字符串下标位置，获取他后面的字符
var YJD = 'yjd' ;
var YJDD = YJD.substring(YJD.indexOf('d'));
YJDD
"d"

// 不混合写法 
var YJD = 'yjd' ;
YJD.indexOf('y');
0

YJD.substring(1);
"jd"

// 方法值 设定 不同  返回值的变化 
var YJDD = YJD.substring(YJD.indexOf('1'));
// 在字符串对比中 方法找不到，返回-1，标识没有，然后方法执行返回全部字符串值 


// 方法里面进行匿名函数回调
// 'hello, woerd'.replace('l',function(s){ return 'i' ;})

// "heilo, woerd"
// 要义
// s是个参数名，方法的return返回值 i 来进行替换


// 正则课堂训练资料
var reg = /<a.*?>/gim,
li = `<li class="dropdown-header">督导班</li>
            <li><a href="/Course/Confusion/New"><span class="fa fa-eye"></span> 督导班</a> </li>
            <li><a href="/Course/Confusion/Edit"><span class="fa fa-edit"></span> 疑问发布</a> </li>
            <li><a href="/Course/Confusion"><span class="fa fa-list"></span> 疑问列表</a> </li>
            <li class="divider"></li>
            <li><a href="/Problem?excludeCanceled=true&excludeRewarded=true"><span class="fa fa-list"></span> 列表</a> </li>
            <li><a href="/Problem/New"><span class="fa fa-edit"></span> 发布</a></li>`;
//非常非常坑的函数：返回的是一个数组，数组中却始终只有一个元素，还需要while循环才能取出所有匹配结果
while ((result = reg.exec(li)) !== null) {
console.log(result[0] + ': ' + reg.lastIndex);
};
console.log(result);

// result 直接使用这个变量进行赋值，不声明，会当做全局变量 