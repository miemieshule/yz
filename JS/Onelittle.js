//  变量 

// 帮帮豆等级 
function Nabertest() {
    var  counts = 200 ;
    if (counts<3) {
        console.log('你走吧');
    }else{
        if (counts==30) {
            console.log('大门境');
        } else if (counts==100) {
            console.log('入气境');
        }else if (counts==200){
            console.log('凝水境');
        }
    }
}
/*
if 主枝表达式 分枝蔓表达式 
问题 
分支的嵌套不熟练 ，练习太少
主枝和真枝的区别 
主枝和过度枝的区别 
主枝和假枝的区别

终于有我理解的了
满足 呢就输出，不满足 就往下跑分支，如下
< 小于 、>大于
如果帮帮点小于5输出不行的
就按照如果来走，一次一层。

需求
如果小王点数少于3 ，输出你走吧  满足真 输出 不满足执行下一条 
如果小王点数等于30 ，输出入门
如果小王点数等于 100 输出 聚气 
如果小王点数等于200 输出凝水 

化简为3，通过真执行就能看出来，要的是不是自己替换的值。

*/ 


// 帮帮豆逻辑文字实现 
// 插入标签 变量值插入 
function test4(params) {
    var program = '你好牛逼哈';
    var pBody = "a href=http://17bang.ren target=_blank 源栈·一起帮</a>，助你实现<span style=font-size:16px>'+program+'</span>梦想" ;
   
    console.log(pBody);
}


// 测试变量是否能打印传出
function ts (params) {
    var a = '高手' ;
    alert('a');
    console.log(a);
}   

// 我不能改变你
function tst () {
    var a = '4' ;
    var b = a ;
    b = 39 ;
    console.log(a);
    console.log(b);
}

// 我要改变你
function tst1 (params) {
    var wpz = { age: 23 };
    var atai = wpz;
     atai.age = 18;
    console.log(wpz.age);  
    console.log(atai.age);
}

// 数据类型变化
function tst2 (params) {
    var a = '大神小班' ;
    console.log(typeof a);
    var a = 888 ;
    console.log( typeof a);
    }

    // // object 对象 
    // function tst3  (params) {
    //     var problem = {
    //         name : '王飞' ,
    //         age : 11 ,
    //     }
    //     console.log(problem.age);
    //     console.log(problem["name"]);
    // 

    
// // 弹出姓名a
// var sanme = '杨嘉栋 ' + '小金鱼' +'大金鱼' ;

// var Asanme = '杨嘉栋' ;
// var Bsanme = '杨大炮' ;
// var Csanme = '杨坚果' ;

// //弹出姓名 b
// alert('name' + sanme);

// // 弹出姓名a 
// alert('names' + sanmeA);

/*

数据类型
文本 数字 对象  undefined和Null
引用
引用值类型的原始值 /引用 对象类型 
js弱类型和动态特性

变量值的变化
从左往右赋值，从右往左赋值
有新值不会影响前面的值
你是个糖果，那我复制你变成糖，我想变成醋，那么我就是醋，对已经是糖果的你没有影响
引用类型 会产生后面的覆盖前面的 
你是个糖果，那我复制你变成糖，我想变成醋，那么我就是醋，我不满足我要把你也变成醋。

变量的引用
所有要用的变量值都要放在上面不然会下一个引用的时候会传空 
"+program+"
'names'
为什么这样 加单双引号？
https://zhidao.baidu.com/question/411804474.html

js的运算 
同类直接运算 
不同类型直接运算 严格比较 

全局变量
全局变量放在底部会提升，传出未定义 ，必须搞到顶部去 
一个变量只能写写入一个值 
alert 中 变量是无单引号的，只有值字符串才有单引号


*/ 