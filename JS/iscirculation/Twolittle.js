// 循环作业 


/*
杨辉三角
0: (4) ["gty", "lw", "zdh", "lzb"]
1: (3) ["lgy", "ht", "zl"]
console.log(students[0][1]); 	0排第一个元素 1
展示方式是标记了 一行展示 ，并且标记哪一排 

console.log(students[i]);这个有什么区别？
展示方式不一样了，成了一行一列展示，不展示排了 ，还是有长度显示 

console.log(students[i][j]);
展示成了一列 完全丢去了数组长度标识 

杨辉三角和 i  j 和 ij一列展示相同  丢失了数组长度 和数组下标
让我们试验一下。
1.一个数组不能相同 不然就只展示一个 
2.行数是从下往上走的，

*/
// 杨辉三角
function ysj(params) {
    var rows = 5,
    columns = rows * 2 - 1;   //确定一共多少列
var yh = [];
for (var i = 0; i < rows; i++) {
    yh[i] = [];             //避免undefined错误
    var lines = '';         //为按行输出做准备
    for (var j = 0; j < columns; j++) {
        if (i == 0) {       //第一行只能手工做
            yh[i][j] = (j == rows - 1) ? 1 : 0;
        } else {
            var preRow = i - 1,
                //边界值替换
                preColumn = j - 1 >= 0 ? yh[preRow][j - 1] : 0,
                nextColumn = j + 1 < columns ? yh[preRow][j + 1] : 0;
            yh[i][j] = preColumn + nextColumn;
        }
        lines += yh[i][j] + ' ';
    }
    console.log(lines);
}
}

// 图形版杨辉三角 
function ysjj(params) {
    var str1 = "1";
    for (let i = 0; i < 10; i++) {
     for (let j = 0; j < i; j++) {
        str1 += "*" ; 
         
     }
        str1 +="\n";
    }
}

//  求奇数 
function name(params) {
    for (let i = 2; i < 1000 ; i++) {
        if (1000%i !=0) {
            
        }
        
    }
}

// 二维数组 
function twoarray1(params) {
   var students = [ ['0', '1', '0', '1'], ['0', '1', '0'] ] ; 

   for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < students[i].length; j++) {

        console.log(students[i][j]);
    }
}
   
}
// 冒泡排序
// function bSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len-1; i++) {
//       for (var j = 0; j < len - 1 - i; j++) {
//            // 相邻元素两两对比，元素交换，大的元素交换到后面
//           if (arr[j] > arr[j + 1]) {
//               var temp = arr[j];
//               arr[j] = arr[j+1];
//               arr[j+1] = temp;
//           }
//       }
//     }
//     return arr;
//   }
  
//   //举个数组
//   myArr = [20,18,27,19,35];
//   //使用函数
//   bSort(myArr)

// 冒泡排序 
  function bSort() {
    var arr = [20,18,4];
    console.log(arr.length);
    var len = arr.length;
    
    for (var i = 0; i < len-1; i++) {
        console.log(i);
      for (var j = 0; j < len - 1 - i; j++) {
            console.log('几次'+'j');
           // 相邻元素两两对比，元素交换，大的元素交换到后面
          if (arr[j] > arr[j + 1]) {
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
    }
    return arr;
  }
/* 冒泡排序  数组长度 3 设定减一等于2，计数器 从0开始，到二，就是三次 
    最里面的for循环，左右两个交换，最外层的for循环执行总体更新次数 
*/
// 冒泡排序解析 
// 从左到右 比较 如果大存入 交换位置 
  function sth (params) {
      var arr = [3,2,4];
      var len = arr.length ;
    //   console.log(len);
      //   3个下标值 

    //   获取数组第二个数字的下标值 
    for (let i = 0; i < len-1; i++) {

        for (let j = 0; j < len-1-i ; j++) {
            
            //判断左边和右边的值 0 1 
            if (arr[j]>arr[j+1]) {
                //  j=0 j+1 =1  3>2
                var temp = arr[j] ;
                // console.log(temp); > temp=3 
                arr[j] = arr[j+1];
                // j=[.0 3] j+1=[.1 2]  change  j=[0. 2]
                arr[j+1] = temp;
                //  j+1=[.1 2 ] change  j+1=[.1 3]
                //  

            }
        }
    }
    
  }

//   数组去重 个人版 
function array7 (params) {
    
    var b = [1,2,2] ;
    var c = [];
    
    for (let i = 0; i < b.length; i++) {
        var a = 0 ;
        for (let j = 0; j < c.length; j++) {
            if (b[i]==c[j]) {
                a = 1 ;
                break ;
            }

        }
        if (a==0) {
            c.push(b[i]);
            console.log(c);
        }
    }
}

// 飞哥版本 
function ssss (params) {
    
    var b = [1,2,2,5, 2,5] ;
    var c = [];
    
    for (let i = 0; i < b.length; i++) {
        
        var isDuplicated = false;

        //将b中的元素依次和结果数组c进行比较
        for (let j = 0 ; j < c.length; j++) {
            if (b[i]==c[j]) {
               isDuplicated  = true; //有了重复
               break;  
            }
        }

        //和所有的c元素比较都没有重复
        if (!isDuplicated) {
            c[c.length] = b[i];
        }//else nothing

    } 
    console.log(b);
}



// 数组重复元素提取 
function array2(params) {
    var a = [1,2,3,3,4,4,4,4,];
    var b = [];
    
    for (let i = 0; i < a.length; i++) {
        var sta = 0 ;
        for (let j = 0; j< b.length; j++) {
           if (a[i]==b[j]) {
               sta = 1 ;
               break ;
           }
        }
        if(sta==0){
            console.log(a[i]);
            b.push(a[i])
            // console.log(b);
           
        }
    }
}

/*需求
找到数组中的最小值 
你是不是比我小？ 比我就把你的值给我 ，
在判断 你是不是比我小？ 比我小把你的值给我 
在判断 你是不是比我小？ 比我小把你的值给我
*/
function  Arraytest4 (params) {
    var odds = [];
    var mmm = 99 ;
    // 得出一百以内的奇数 
    for (let index = 0; index < 100; index++) {
        if (index%2) {
            odds.push(index)
        }
        

    }
    // 找到最小的值 

    for (let i = 0; i < odds.length; i++) {
        if (mmm>odds[i]) {
            mmm = odds[i];
        }
      
    }
    console.log(mmm);
}

/*数组
需求 
找到奇数  
思换
判断1/2能除尽吗？不能算是奇数 
如果除不尽，推入数组 
*/ 
function  Arraytest3 (params) {
    var odds = [];
    var oddss = [];
    // 得出一百以内的奇数 
    for (let index = 0; index < 100; index++) {
        if (index%2) {
            odds.push(index)
        }

        // 计算奇数的和
        var price = 0;
        for (let p = 0; p < odds.length; p++) {
            var dataa = price + oddss[p] ;
            console.log(dataa);
            
        }

    }
}

// 找到数组位置 
function Arraytest2(params) {
    var seed = 7;
    var numbers = [1,2,3,4,6,4,7] ;
    for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === seed) {
        console.log(`${seed}在第${i+1}位`);
    }
}
}


// 数组 
function Arraytest () {
    var nuber = [1,2,3,'s','b']   
    console.log(nuber); 

    for (let index = 0; index < nuber.length; index++) {
        console.log(nuber[index]);
    }
}



// 循环输出
var  i = 0 ; 
function Loopoutput2 () {
    for (let i = 0; i < 10  ; i++) {
        console.log(+i+'YJD真帅');
        var som = 0 ;
        som += i ;
        console.log(som);
    }
}

// 循环输出
var  i = 0 ; 
function Loopoutput () {
    while(i<5){
        i++;
        console.log(+i+ '飞哥有点炸喔');

    }
}
/*循环 如果不出来，我就一直找！直到天黑地裂！
需求 飞哥真高输出五遍
累加器，如果i小于5，那I++递增一次 ，每次都执行一遍代码内容

数组
遍历数组 
根据长度 累加器做出次数 数组取出一次 使用一次下标”累加器值“
*/ 

/* 循环递减 
     for (i = 10; i > 0; i--) {
         console.log(i);
     }
     
     */ 