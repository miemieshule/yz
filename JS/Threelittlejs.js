// 函数练习 


/*
构建函数
has9(number)，可以判断number中是否带有数字9；
has8(number)，可以判断number中是否带有数字8；
has6(number)，可以判断number中是否带有数字6；
让get986()通过调用has9()/has8()/has6()，能找出number以内有多少个数字包含：9或者8或6。

测试
封装代码测试9 看看能否成功调用 
1.对象方法如何传参 传不了 
直接调用看看 不同的参数名都没事 ，直接调进来然后传入numebr
2.对象可以传 
3.函数调用函数也可以 
教训
问题：参数名要相同，使用的方法都要写入参数名 
问题：一次传入最好写个数组东西是一条，识别所有内容

*/

// // 判断9
// //  传入参数 多次判断 判断条件 
// // comparison 对比 nine 9 
// function has9(number) {
//     var Ccomparisonnine = [] ;
//     for (let i = 0; i < number.length; i++) {
        
//         if (number[i] === 9 ) {
//             Ccomparisonnine.push(number[i])
//         };
        
//     }
//     console.log(Ccomparisonnine.length + '个九');
    
// }

// // 找出参数8 函数
// function has8(number) {
//     var Ccomparisonnine = [] ;
//     for (let i = 0; i < number.length; i++) {
        
//         if (number[i] === 8 ) {
//             Ccomparisonnine.push(number[i])
//         };
        
//     }
//     console.log(Ccomparisonnine.length + '个八');
    
// }

// // 找出数字6函数 
// function has6(number) {
//     var Ccomparisonnine = [] ;
//     for (let i = 0; i < number.length; i++) {
        
//         if (number[i] === 6 ) {
//             Ccomparisonnine.push(number[i])
//         };
        
//     }
//     console.log(Ccomparisonnine.length + '个六');
    
// }


// // has9(number)，可以判断number中是否带有数字9；
// console.log(has986([1,6,3,8,9,5]));
// function  has986(number) {
//         has9(number);
//         has8(number);
//         has6(number);
// };


/*
条件：
1不用算 ，被除数本身不用算 ，
除不尽为素数
例子
从4计算
1不算 4不算 
4/2 = 2 // 因为中间范围的数字有一个被整除了，所有不算素数了 
4/3 = 1.3 

思路设计A
人家比我聪明 我设定相除范围是
根据一个特定值值来算他的大小然后减一得到 2 到 他倒数第二位的值 

条件设置
外层循环 设定要判断的数字范围  计数器递增
里层循环次数根据数字大小5 设定，2开始 获取计数器数字大小，小于5，次数减一，2 3 4

思路设计B
1.人家是 除法 得出范围值 ，
2.细节果然会死，比对的时候人家是用的取模运算符，能整除0不能整除1，之间状态标识好了，我TM还以为那是除以符号。最后一个就是
3.进行除法如果第一个是明明是 除不尽的 但是，但是还有对第二个递增再次计算？ 

*/

//将之前“找出素数”的代码封装成一个函数findPrime(max)，可以打印出max以内的所有素数。
// prime 质数  characteristic标识符  composite合数

// findPrimetest()
// function findPrimetest() {

// // 设定要取素数的循环范围 并且素数已知是2开始 
// for (let i = 2; i < 10; i++) {
//     var characteristic = true ;
//     var prime = [];
//     // 设置对每个数相除看看是否有余数 从2开始 1就不算了 ， 除不尽就是素数 
//     //  设定状态标识符 
//     for (let j = 2; j < i/2; j++) {
//         // 设置素数和相除数判断 如果可以取模除尽 就不是素数 0 真 ，除不尽为1 假 
//         if (i%j==0) {
//             // 设定标识符 如果为真 全部都不是素数
//             characteristic = false ;
//             break;
//         }
        
//     }
//     if (characteristic = true) {
//         // 状态标识符已经标出非素数的， 现在真就是经过判断的素数 ，如果是素数写入数组
//         console.log(i);
    
//     } 
// }

// 输入数字 得出判断结果 
// isPrime(2);
// function isPrime(n){
//     if(n === 2 ){return true;}
//     for(let i=2;i<n;i++){
//       if(n % i === 0){
//           console.log('不是素数');
//         return false;
//       }
//     }
//     console.log('是素数');
//     return true;

//   }


// findPrime(10);
// function findPrime (max) {
//      for (let i = 2; i < max; i++) {
//         let a = 1;
//         for (let j = 2; j < i ; j++) {
            
//             if (i % j== 0 ) {
//                 a = 2 ;
//                 break
//             }
            

//         };
//         if (a==1) {
//             console.log(i +'我是素数');
//         };

//      };
// }

//封装一个函数，建立一个函数getMaxNumber()，可以接受任意多各种类型的参数，并找出里面最大的数（忽略数值以外的其他类型）
//  目前我知道
// 数组能传各种参数，但是要设定传进一个数组 
// 我设定多少个参数名，才能传入对应的几个参数值 
// 要求
// 接受多个参数 各种类型 ，用户输入8种类型 不设置参数名
// 资料
// arguments 这个函数可以得到所有的参数 
// 思路设计 
// arguments本身像一个数组，，利用下标不断找出数字，传入新数组，利用冒泡排序对新数组进行排序，传出数组最后一个值 
// 内置函数
// IsNaN()函数用于检查其参数是否是非数字值。 
// isNaN()的缺点就在于 null、空格以及空串会被按照0来处理 ,turn也会当做字符串处理 
// 变量名称 
// signboard 标识符 、

// getMaxNumber(6,undefined,'s','nub',100,1888,99);

// function getMaxNumber() {
//     var NumberPrice = [];
    
//     for (let i = 0 ; i < arguments.length ; i++) {
//         var isNumber = true ;
//         if (isNaN(arguments[i]) ) {
//             if ((arguments[i]===undefined) && (arguments[i]===true)) {
//             }
//             isNumber = false ; 
//         }

//         if (isNumber ==true) {
//             NumberPrice.push(arguments[i]);
            
//         }

//     }console.log(Math.max.apply(null,NumberPrice));   
    
// }

// 封装一个函数swap(arr, i, j)，可以交换数组arr里下标 i 和 j 的值
//  目前我知道
//  数组下标值可以通过循环不断获取 、 
//  两个计数器 可以获取两个不同位置的下标 
// 要求
//  值交换 
// 资料
// 冒泡排序 
// 思路设计 
// 0 和 1交换 0存入临时变量，1赋值给0，零食变量赋值给1 
// 顺利实现 ！
// swap([1,2,3,5,6,9,5,3,5]);
// function swap(arr) {
//     for (let i= 0; i < arr.length; i++) {
//         if (j= arr.length) {
//             j--;

//             var tep = arr[i] ;
//             arr[i] = arr[j];
//             arr[j] = tep ;
//         }
        
//     }
//     console.log(arr);
//     return(arr);
    
// }

// 利用上面的swap()函数，将“冒泡排序”封装成函数bubbleSort()
//  目前我知道
//  冒泡排序是从左到右 、01顺序大小比较大小交换 、总体一把排序 、
//  用到J+1 
// 要求
//  把swap函数修改为i和j值大小比较交换
// 资料
// 冒泡排序 
// 思路设计 
// 一个for控制总体循环次数，一个for控制下标两两交换次数，一个
// 一个if进行01下标值比较，下标值交换： 0 和 1交换 0存入临时变量，1赋值给0，临时变量赋值给1 
//  完成 感谢天感谢地 感谢f12的发明 感谢冒泡的发明 ！
// bubbleSort([3,2,1]);
// function bubbleSort(arr) {
//     for (let i= 0; i < arr.length-1; i++) {
//         for (let j = 0; j < arr.length-1-i; j++) {
//             if (arr[j]>arr[j+1]) {
//                 var tep = arr[j] ;
//                 arr[j] = arr[j+1];
//                 arr[j+1] = tep ;
//             }
//         }
//     }
//     console.log(arr);
//     return(arr);
    
// }

// 封装函数deleteDuplicated()删除一个数组里面重复的元素
//  目前我知道
//  数组去重 数组一个值和另数组所有值挨个对比 ，外头数组转一下，里面数组转十下比对，
//  如果不重复就写入， 有重复跳出 使用下一个值转十遍，
// 资料
// 一对多
// 思路设计 
// 一个for控制A数组下标值，一个for控制B数组下标值 
// 一个if a的0 和 b的  0 1 2 3 比较 重复 删除 
// 一个if a的1 和 b的  0 1 2 3 比较 重复 删除  
// 单词
// repetition 重复 、
//  实现区别 如果单纯去重那是放入b为空的对比数组 不影响arr ，如果要删除直接对arr进行操作 ，但是影响对比数组。
// 缺陷： 如果 出现 2 2 2 2 的这种排列数字，会漏掉。
// deleteDuplicated([2,2,2,2,222,1,22,55,9]);
// function deleteDuplicated(arr) {
//     var Petition = [];

//     for (let i = 0;  i < arr.length ; i++) {
//         var isDelerePetition = true ;

//         for (let j = 0; j < Petition.length; j++) {
//             if (arr[i]==Petition[j]) {
//                 isDelerePetition = false;
//                 arr.splice(i,1);
//                 break;
//             }
            
//         }if (isDelerePetition==true) {
//             Petition.push(arr[i]);
//         }
//     }console.log(arr);
//     console.log(Petition);  
// }

// 封装函数deleteDuplicated()删除一个数组里面重复的元素 
// 上一个有缺陷 重新设计
// 思路设计 
// 一个for控制A数组下标值，一个for控制A数组下标值 
// 一个if a的0 和 A的   1 2 3 比较 重复 删除 
// 一个if a的1 和 A的   1 2 3 比较 重复 删除  
// 单词
// 这回可以了 就算是连续的也可以删除 

// deleteDuplicated ([2,2,2,1,2,3,3,3,4]);
// function deleteDuplicated (arr) {
//     var temp = arr ;
//     console.log(temp);
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[i]==arr[j]) {
//                 arr.splice(j,1);
//             }
            
//        }
       
//     }
//     console.log(temp);
// }



//不使用JavaScript内置函数
//将一个字符串顺序颠倒，比如：'hello,yuanzhan' 变成 'nahznauy,olleh'。
// 我知道的
// 这玩意没有下标，只有字符串 ，那就是应该还是数据的思路，找位置，截取一部分  ，然后传入数组，根据数组下标显示，如此反复
// 资料 split 
// 结论 很遗憾 我还是用了内置函数 ！slit函数 
// character();
//  function  character (params) {
//      var ischaracter = 'hello|,yuan|zhan'
//      var arr = ischaracter.split("|");
//      console.log(arr);
//      var install = arr[2]+arr[1]+arr[0];
//      console.log(install);
//  }

//  字符串颠倒 方法2 
// 设计思路
// 如果能控制字符串下标的话，随便倒啊~
// tmd 好像字符串不能颠倒顺序啊 ，
//  tmd 怎么传入一个新字符串 ！ 该死的双引号 
// Twocharacter();
//  function  Twocharacter (params) {
//      var ischaracter = 'hello,yuan zhan'
//      var islength =  ischaracter.length;
//      var newstring = [] ;
//      var Bnewstring = '' ;
//     for (let i = islength ; i > 0 ; i--) {
//         if (ischaracter[i]=='string')  {
//             console.log('这是啥');
//         }else{
//             newstring.push(ischaracter[i]);
//             Bnewstring = ischaracter[i] ;
//         }
//     }
//     console.log(newstring);
//     console.log(Bnewstring);
     
//  }



//  统计出这段文字中有多少个单词：
// 我知道的 
// 最明显的就是空格 单数 和长度 
// 资料 
// 设计思路
// if 判断这个字符串有多少空格 + 最后一个结尾单词  
//  结果
// 1.能判断空格，用长度来决定次数 ，对每个字符判断，但是字符的起始位置也要设定，累了 ！
// 2. 能利用下标判断空格了 基本上48个好像 ，还有一些乱七八糟的冒号 a . 啥的 ，估计要更麻烦 
//  counti 计量 
// counti();
// function counti(params) {
//     var  word = 'There are two ways to create a RegExp object : a literal notation and a constructor. To indicate strings , the parameters to the literal notation do not use quotation marks while the parameters to the constructor function do use quotation-marks. So the following expressions create the same regular expression'
    
//         var worda = "There are two "

//         var sum = 1 ;
//         for (let i = 0; i < word.length; i++) {
//             if (word[i]==" ") {
//                 sum++;
//             }
//         }
//         console.log(sum-1);
// }

// // 别人的的设计 试验正常 ！ 和我的思路就一小块，TMD 为什么我想不到可以对默认字符串进行下标控制 ！！！
// // carry 搬运 
// carry();
// function carry(params) {
//     str = "How are you";
//     var num = 1;
//     for(i=0;i<str.length;i++)
//     {
//     if(str[i]==" ")
//     {
//         num++;
//     }
//     }

//     alert(num+1);

// }

// 作业总结
// 效果:不是完全实现 代码不简洁 ,
// 难度:函数本身不难, 最麻烦的是 for循环 数组对比 冒泡这些需要时间形成感觉