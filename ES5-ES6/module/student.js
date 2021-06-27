// 暴露赋值写一起 
// export let name = 'yf';



// 动态值例子 
// export let sname ;
// if (Math.random() > 0.5) {
//     sname = 'fg';
// } else {
//     sname = 'yf';
// }





// export时用花括号{}包裹变量名/类名等
// export {sname};
// let sname = 'yf';






// export 暴露 类 
// export {Student};

// class Student{
//     hello(){
//         console.log('暴露一个类 调用这个打印方法');
//     }
// }


// export 暴露类 换类名  
// export {Student as s };

// class Student{
//     hello(){
//         console.log('暴露一个类 换类名');
//     }
// }








// 通配符 导出集合 
// export {name};
// export {Student};
// let name = 'yf';
// class Student{
//     hello(){
//         console.log('暴露一个类 通配符');
//     }
// }






// 暴露默认成员 defaul 默认值 
// export default function () {
//     console.log('default 默认值');
// }





// 二次暴露   中转站 
// export {name};
// let name = 'yf';


