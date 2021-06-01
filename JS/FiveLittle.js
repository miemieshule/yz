//  作用域练习 

// 全局变量污染 
// pollution 污染 
// 问：reallySmart(); 执行返回什么？ 未定义 
pollution();
function pollution(params) {
    var sname = "飞哥";
    function smart() {
        alert(`${sname}最帅`);
    }

    function reallySmart() {
        var sname = '子祥';
        smart();
        局部变量sname有更高优先级
        console.log(sname);dd
    }
    reallySmart();
}