// function smart() {
//     console.log(`飞哥帅呆了`);
// }

// function smart() {
//     console.log(`飞哥帅呆了`);
// }


// // 匿名函数 
// var timerID = setInterval(
//     function () {
//         console.log(`飞哥帅呆了-3`+new Date());
//     },
//     2000
//     );

    // 特点
    //浏览器支持多个计时器运行

    // console.log("你要好好学哦");
    // var k = Date.parse(new Date ()); 
    // console.log(k);
    // setInterval(
    //     function() {
    //         console.log("不要作死");
    //         console.log(Date.parse (new Date()) -k);
    //         // console.log(Date.parse (new Date()) -j);
    //     },
    //     3000
    // )
    // console.log("你在放屁");
    // var j = Date.parse(new Date ()); 
    // console.log(j);

    // 后面的执行的时间减去前面的世界就得出自己在同步多少秒后执行的

//     弹出游戏玩法说明，等待用户点击“确认”，开始游戏；
// 浏览器生成一个不大于1000的随机正整数；（Math.floor(Math.random()*1000)）
// 用户输入猜测；
// 如果用户没有猜对，浏览器比较后告知结果：“大了”或者“小了”。如果用户：
// 只用了不到6次就猜到，弹出：碉堡了！
// 只用了不到8次就猜到，弹出：666！
// 用了8-10次猜到，弹出：猜到了。
// 用了10次都还没猜对，弹出：^(*￣(oo)￣)^


//  游戏说明
// 小明拿个板子 ，上面有游戏说明，小王选择确定，小明把他送入房间
// 方法运行后，弹出窗口，显示文本信息，拿到确定值，弹出输入框

// 游戏开始
// 房间内 小明抱着一个盒子生成了一个3以内的数字

// 人物交互
// 小王开始猜每次小明生成的随机数字是数字几，
// 取到小王的猜测值 变量存入输入框口方法 也存入了用户输入值，然后和小明的进行比对

// 交互判断
// 一共能猜3次，小王有3次填写机会，小明看小王答案进行判断，告知大小 
// 只能用for了，小王有三个答题卡，
// 第一个答题卡就没猜对，就小了

//  小明打算根据次数来告知小王的猜测情况，他把小王猜测的错误次数进行统计，
// 直到知道小王猜对时候，告诉他，猜测水平如何，错误1次大师，错2次专家，错三次平民。


// 弹窗不断出现3次，不断拿到输入值，并且累加输入值次数进行判断
// 设置不断弹出，第二次对的话，弹出
// 多次里面只要有一次对，游戏结束

// 有点卡壳
// for内判断 先判断是否相等，再去判断大小， 如果相等跳出，进行输入次数判断，
// 成功 就是 代码优雅度估计不咋样。。。

// 需求
// 3次不成功提示游戏结束
// 一次成功提示游戏结束，并且告知等级 
// 特点
// 一次成功的时候进行跳出，循环i值只执行一次从0，变成了3，代表执行了3次？

//没有考虑到一次都不对的情况  

// Games游戏 //hint

//  NumberGames();
// function NumberGames(params) {
//     // 计数器     
//     var Acount = 0 ;
//     var Bcount = 0 ;
//      // 游戏提示
//     var isconfirm = window.confirm('朋友 点击确认开始猜数字游戏 ')
    
//     //  送入游戏房间
//      if (isconfirm=true) {
//         for (let i = 0; i < 3 ; i++) {
//             var next = i ;
//             console.log(next);
//             // 随机数
//             var israodom = Math.floor(Math.random()*3);
//             // 用户输入重复1弹出
//             var isprompt =window.prompt('请输入3以内的 猜测数字吧！');
            
//             // 输入数据比对 
//             if (isprompt==israodom) {
//                 isgn = true ;
//                 break;
//             }else{
//                 if (isprompt>israodom) {
//                     alert("数字太大了");
//                     ++Acount; 
//                 } else if (isprompt<israodom) {
//                     alert("数字太小了")
//                     ++Bcount;
//                 }
//             }
//         };

//         // 输入次数计算
//         var sum = Acount+Bcount ;
//         // 游戏水平判断
//         if (isgn==true&&sum==0) {
//             alert(' 一次就猜对的 大师');
//         } else if(isgn==true&&sum==1){
//             alert(' 平民');
//         }

//         else if(isgn==true&&sum==2){
//             alert('  菜狗');
//         }

        
//         else if(isgn==true&&sum==3){
//             alert('渣渣');
//         }


//         if (next=3) {
//             alert('游戏结束');
//         }
        
//     }
// };


// NumberGames();
// function NumberGames(params) {
//     // 游戏提示
//      var isconfirm = window.confirm('朋友 点击确认开始猜数字游戏 ')
    
//     //  送入游戏房间
//      if (isconfirm=true) {
//         var isprompt =window.prompt('请输入3以内的 猜测数字吧！');
//         var israodom = Math.floor(Math.random()*3);

//     // 开始和小明比对
//         if (isprompt==israodom ) {
//             alert("不错一下就猜到了")
//         }else{
//             alert('再试试吧');
//         }
//       };

// }


// 分别使用setInterval()使用setTimeout()实现：每隔1秒钟依次显示：第n周，源栈同学random人。（n逐次递增，random随机）
// 循环定时器 定时器放时间方法 在加上字符串 随机数 
// 3秒钟过去后在执行一次, 

var sum = 1 ;
istime();
 function istime(params) {
    var radom =  Math.floor(Math.random()*100);
    var islog =  `第${sum++}周 源栈同学 ${radom} 人` ;
    console.log(islog);
}

// setTimeout(istime,1000)

// setInterval(setInterval(istime,1000))
// setInterval(istime,1000)
