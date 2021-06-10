// 作业结果 

// 作业
// 使用JavaScript内置字符串函数，处理 “‘源栈’：飞哥小班教学，线下免费收看” ：将“飞哥”改成“大神”，“线下”改成“线上”。
// 思路 
// String.prototype.replace()  匹配一个替换部分 
// slogan 口号 、change  改 
// var Asloan = "源栈’：飞哥小班教学，线下免费收看".replace('飞哥','大神');
// var Bsloan = Asloan.replace('线下','线上')

// 作业
// 将数组['why','gIT','vs2019','community','VERSION']规范化，让所有元素：
// 首字母大写开头，其他字母小写
// 截去超过6个字符的部分，如'community'将变成'Commun'

// 我知道的
// 字母大写内置函数 数组下标 字符串下标  
// 思路1
// a测试
// 获取数组下标0值 ，从0值中取到第一个字母， \\可以 \\可以 
// 获取第一个字母 资料
// var anyString = "Mozilla";
// console.log(anyString.substring(0,1));

// 思路2 截取超过六个字符的 
// b测试
// 循环获得数组中每个字符串，并且截取六位，存入新数组 

// 结合
// 外层一个循环，一个vs2019，  if 判断长度是否大于6，如果大于6 截取，拿到第一个字母，然后大写方法，传入新数组 
// 小于六 拿第一个字母 放大  ,
// 最大的问题 各个方法嵌套使用的不熟 

// 资料 
// 大写  b.toUpperCase();
// "DA"
// var YJDD = YJD.substring(YJD.indexOf('d'));
//  转换 小写 toLowerCase()

// 第一版 
// issting();
// function issting(params) {
//     var stingdata = ['community','VERSION','commu'];
//     var sb = [];
//     for (let i = 0; i < stingdata.length ; i++) {
//         if (stingdata[i].length > 6 ) {
//           var Atemp =  stingdata[i].substring(1,6) ;
//           var Btemp =   stingdata[i].substring(0,1) ;
//           var Ctemp = Btemp.toUpperCase() + Atemp ;
//         }else{
//           stingdata[i].substring(0,1).toUpperCase() + stingdata[i].substring(1,6).toLowerCase()  ;
//         }
//     }
// }

// 第二版 
// issting();
// function issting(params) {
//     var stingdata = ['why','gIT','vs2019','community','VERSION'];
//     var newstingdata = [];
//     for (let i = 0; i < stingdata.length ; i++) {
//         if (stingdata[i].length > 6 ) {
//           var Atemp =  stingdata[i].substring(0,6) ;
//           var Btemp =   Atemp.substring(0,1).toUpperCase() + Atemp.substring(1,6).toLowerCase() ;
//           newstingdata.push(Btemp)
//         }else{
//          var Ctemp = stingdata[i].substring(0,1).toUpperCase() + stingdata[i].substring(1,6).toLowerCase()  ;
//          newstingdata.push(Ctemp)
//         }
//     }
//     console.log(newstingdata );
// }
// 控制台输出
// (5) ["Why", "Git", "Vs2019", "Commun", "Versio"]

// 作业
// 创建一个函数getRandomArray(length, max)，能返回一个长度不大于length，每个元素值不大于max的随机整数数组。
//  空数组 []  长度3 假设max是 4 ，4以内的随机整数 
// 思路 根据长度生成次数 for if判断max值，生成随机值 
// var isarray = [];
// isarray.length = 3 ;

// getRandomArray(isarray , 4)

// function getRandomArray(length, max) {
//     var Bisarray = [];
//     for (let i = 0; i < length.length; i++) {
//         if (i>=0) {
//          var radom =  Math.floor(Math.random()*max);
//             Bisarray.push(radom);
//         }
        
//     }
// }

// 作业
// 生成一个函数toChinese()，可将传入的日期参数（如：new Date()）转换成中文日期格式（如：2019年10月4日 16点54分）
// 思路 要取出来值，顺序要改变，字符串插入值 ，月份是个麻烦 要加个判断返回变量吗？
// 
// var isdate = new Date()
// Sat Jun 05 2021 15:19:27 GMT+0800 (中国标准时间)
// toChinese(isdate);
// function toChinese(params) {
//     var  FullYea = params.getFullYear();
//     var  Month =  params.getMonth ();
//     var  BMonth = Month  + 1;
//     var  date  =   params.getDate() ;
//     var  Hours =  params.getHours() ;
//     var  Minutes = params.getMinutes();
//     var isnewdate = ` ${FullYea}年${BMonth}月${date}日  ${Hours}点${Minutes}分 `
//     console.log(isnewdate);

// }

// 作业
// 生成一个函数addDays(number)，可在当前日期的基础上增加number天
// 思路 函数、 传参、 获取当前时间 、 输入参数1天，在当前时间上加1天 
// get set


//  addDays(1);
// function addDays(params) {
//     var isdate = new Date()
//     var isaddDays = isdate.setDate(isdate.getDate()+params) ;
//     var Aisdate = new Date(isaddDays).toLocaleString();
//     console.log(Aisdate);
//     return (new Date(isaddDays))
// }

// 获取时间
// var curTime = new Date();
// 加上时间
// var addHour = curTime.setHours(curTime.getHours() + 1);
// 输出时间
// console.log(new Date(addHour));

// 什么是解析字符串？
// 通过parse 对日期解析，返回这个日期的毫秒数 ，就是解析结果 
// 结果： 818035920000
// 如何解析回去？在new 一次 时间方法对毫秒数解析回去
// console.log(new Date (javaScriptRelease));
// 不知道为什么要用？
// 附属资料
// 时间戳
// JavaScript内的时间戳指的是当前时间到1970年1月1日00:00:00 UTC对应的毫秒数，

// TimeStamp:时间戳
// 如果需要从当前的时间对象获取其相应的时间戳，我们可以使用getTime或者valueOf()，返回距离1970年1月1日0点的毫秒数:

// 对当前时间+1天后，就是时间戳格式

// 大概使用范围
// 时间戳转数据字符串，
// 数字字符串转时间戳

// 总结
// 还是有好多陌生的玩意 

// 正则 作业  // 是否是合格的Email格式
// 使用正则表达式判断某个字符串:
// 思路 30ddf86565367@qq.com
// 判断 数字范围 判断字母范围 @的值判断 .号判断  长度判断 ，输入顺序判断
// 个人设想 /^[0-9][a-z]@.{6-18}$ /
// 资料 
// var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
// verify 验证 

// verify ();
// function verify (params) {
//         var email = '300LL@23.lj';
//     var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
//     if(reg.test(email)){
//         alert("邮箱格式正确");
//     }else{
//         alert("邮箱格式不正确");
//     }
// }
// https://blog.csdn.net/lanseguhui/article/details/81325818


// 是否是小数（正负小数都可以）
// figure
// figure(2);
// function figure(params) {
//         var isfigure = 14;
//     var reg = /^(([^0][0-9]+|0)\.([0-9]{1,2}))$/;
//     if(reg.test(isfigure )){
//         alert("是小数");
//     }else{
//         alert("不是小数");
//     }
// }

// 将所有以zyf-开头的属性去掉zyf- （尽可能多的制造测试用例，比如：<a lzyf-old=''，或者：<span>zyf---+---fyz</span> ……）ssname(2);
// 失败 不搞了 

// 第五期作业
// 数字，比如：2、0、1……（答案：\d）   
// \d 
// 数字“串”，比如：2021、22               
// [0-9]{1,5}
// 单词，比如：going、to、At（大小写都行）……不包含I'm、e.g.、C#（带有标点符号）和2021（数字）
// [a-z]{2,4}
// 字母个数等于4个、大于4个、小于4个的单词
// [a-z]{4,} [a-z]{1,3}
// 以t开头的单词
// .t\w{1,10}
// 以I或者i开头的“字段”（单词，以及单词简写比如I'm）
// (I\'|i)\w{1,5} 
// 以大写字母开头的单词，比如Java、At，C#不是单词，还是不包含
// [A-Z]\w{1,10}
// 以ing结尾的单词
// [a-z]{1,10}.ing
// 以ing结尾的单词中不包含ing的部分
// (.[a-z]{1,10})(?=ing)
// .ing\b

// 难度
// (?<=red\;\">).*\s*\n*\W+
// 在程序中我们经常会遇到这样一种
// (?<=\"\>).*\n*\W{5}
// 概念引入
// (?<=<p).*\s*\w
// style="color:red;



// 需求 
// 匹配h标签的数字
// <h>.*[0-9]<h>
// 需求
// 匹配尾部换行的h标签数字
// <h>.*[0-9]\n*<h>
// 需求
// 标签内 匹配内容换行的
// <h>\n[0-9]+\n*<h></h>
