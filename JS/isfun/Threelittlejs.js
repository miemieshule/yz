// 函数练习 


/*
构建函数
has9(number)，可以判断number中是否带有数字9；
has8(number)，可以判断number中是否带有数字8；
has6(number)，可以判断number中是否带有数字6；
让get986()通过调用has9()/has8()/has6()，能找出number以内有多少个数字包含：9或者8或6。
*/

// // 判断9
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




//将之前“找出素数”的代码封装成一个函数findPrime(max)，可以打印出max以内的所有素数。
// prime 质数  characteristic标识符  composite合数

/*
条件：
1不用算 ，被除数本身不用算 
除不尽为素数

例子
从4计算
1不算 4不算 
4/2 = 2 // 因为中间范围的数字有一个被整除了，所有不算素数了 
4/3 = 1.3 

取模运算符，能整除0不能整除1

*/

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

findPrime(10);
function findPrime (max) {
     for (let i = 2; i < max; i++) {
        let boolen = true;
        for (let j = 2; j < i ; j++) {
            
            if (i % j== 0 ) {
                boolen = false ;
                break;
            }
        };

        if (boolen) {
            console.log(i +'我是素数');
        }

     };
}

//封装一个函数，建立一个函数getMaxNumber()，可以接受任意多各种类型的参数，并找出里面最大的数（忽略数值以外的其他类型）
// 内置函数
// IsNaN()函数用于检查其参数是否是非数字值。 
// isNaN()的缺点就在于 null、空格以及空串会被按照0来处理 ,turn也会当做字符串处理 
// 变量名称 
// signboard 标识符 、

getMaxNumber(6,undefined,'s','nub',100,1888,99);

function getMaxNumber() {
    var NumberPrice = [];
    
    for (let i = 0 ; i < arguments.length ; i++) {
        var isNumber = true ;
        if (isNaN(arguments[i]) ) {
            if ((arguments[i]===undefined) && (arguments[i]===true)) {
            }
            isNumber = false ; 
        }

        if (isNumber ==true) {
            NumberPrice.push(arguments[i]);
            
        }

    }console.log(Math.max.apply(null,NumberPrice));   
    
}

// 封装一个函数swap(arr, i, j)，可以交换数组arr里下标 i 和 j 的值
// 顺利实现 ！
var isswap = [1,2,3,4];
swap(isswap);
function swap(arr) {
    for (let i= 0; i < arr.length; i++) {
            var tep = arr[i] ;
            arr[i] = arr[2];
            arr[i] = tep ;
    }
    return(arr);
}

// 利用上面的swap()函数，将“冒泡排序”封装成函数bubbleSort()
//  冒泡排序是从左到右 、01顺序大小比较大小交换 、总体一把排序 、
// 要求
//  把swap函数修改为i和j值大小比较交换
var isnumber = [3,2,1]
bubbleSort(isnumber);
function bubbleSort(arr) {
    for (let i= 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j]>arr[j+1]) {
                var tep = arr[j] ;
                arr[j] = arr[j+1];
                arr[j+1] = tep ;
            }
        }
    }
    return(arr);   
}

// 封装函数deleteDuplicated()删除一个数组里面重复的元素
// 单词
var isarr = [2,2,2,1,2,3,3,3,4]
deleteDuplicated (isarr);
function deleteDuplicated (arr) {
    var temp = arr ;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i]==arr[j]) {
                arr.splice(j,1);
            }
            
       }
       
    }
    console.log(temp);
}



//  字符串颠倒 
// var ischaracter = 'hello,yuan zhan'
// Twocharacter(ischaracter);

//  function  Twocharacter (params) {
//      var newstring = [] ;

//     for (let i = params.length ; i > 0 ; i--) {
//         if (ischaracter[i]=='string')  {
//         }else{
//             newstring.push(ischaracter[i]);
//         }
//     }

//     console.log(newstring);
//  }



//  统计出这段文字中有多少个单词：
//  counti 计量 
//  var  word = 'There are two ways to create a RegExp object : a literal notation and a constructor. To indicate strings , the parameters to the literal notation do not use quotation marks while the parameters to the constructor function do use quotation-marks. So the following expressions create the same regular expression'
// counti(word);
// function counti(params) {
//         var sum = 1 ;
//         for (let i = 0; i < word.length; i++) {
//             if (word[i]==" ") {
//                 sum++;
//             }
//         }
//         return sum ;
// }
