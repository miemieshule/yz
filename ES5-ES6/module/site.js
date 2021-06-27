// import { sname } from './student.js';
// 解释器 从studen文件 引入一个name对象 

// 使用引入对象
// console.log(sname);

// 引用类 
// import { Student } from './student.js';
// new Student().hello();


// 换类名引用类 
// import { s } from './student.js';
// new s().hello();



// 通配符使用 
// 特点 引入暴露集合，点. 出暴露内容
// import * as Yz from './student.js';
// console.log(Yz.name);
// new Yz.Student().hello();



// 引入暴露默认成员 执行匿名函数 
// import s from './student.js';  //注意：没有{}
// s();



// mieddlejs文件  二次暴露后 在导入
// import { name } from './middle.js';
// console.log(name);





// 验证异步加载
// console.log(' site 后加载');



