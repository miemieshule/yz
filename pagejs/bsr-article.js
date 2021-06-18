// isdele();

// function isdele(params) {
//     var islength = document.querySelectorAll("div.card-body").length
//     for (let i = 0; i < islength; i++) {
//         var number = document.getElementsByClassName("card-body")[i].getElementsByClassName("badge","badge-primary")[2].nextElementSibling
//         var isnumber = number.innerHTML ;
//         if (isnumber==0) {
//             const parent = document.getElementsByClassName("card-body")[i];
//             const child = document.getElementsByClassName("card-body")[i].getElementsByClassName("badge","badge-primary")[2].nextElementSibling;
//             parent.remove(child);
//         }
//     }
// }

// 离谱 居然整个div删掉了 


// isdele();

// function isdele(params) {
//     var islength = document.getElementsByClassName("batch").length
//     for (let i = 0; i < islength; i++) {
//         var number = document.getElementsByClassName("batch")[i].getElementsByTagName("span")[4]
//         var isnumber = number.innerHTML ;
//         if (isnumber==0) {
//             const parent = document.getElementsByClassName("batch")[i];
//             const child = document.getElementsByClassName("batch")[i].getElementsByTagName("span")[4]
//             parent.removeChild(child);
//         }
//     }
// }

//  正常
// 说明 要看好方法说明
// removeChild() 方法指定元素的某个指定的子节点。

// 写一个函数getKeywordsCount()，可以统计某个求助使用了多少关键字
// 位置 长度 
// getKeywordsCount()
// function getKeywordsCount(params) {
//     var islength = document.getElementsByClassName("batch").length
//     for (let i = 0; i < islength; i++) {
//         var issum = document.getElementsByClassName("batch")[i].getElementsByTagName("span").length
//         console.log(`第${i}块 关键字 ${issum}个`);
//     }
// }
