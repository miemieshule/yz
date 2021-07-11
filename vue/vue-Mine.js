
// 需求  参考消息页面：完成勾选全选功能
    var vm = new Vue({
        el: "#yz-hello",


        data: {  
            all:false , //所有 

            students: [
                { id: 8, name: '夏康平', enrolled: false },
                { id: 12, name: '陈国栋', enrolled: false },
                { id: 6, name: '韩佳宝', enrolled: false }
            ],
        },

        methods: {
            allfun:function(){  //复选框 所有方法 
                if (!this.all) {
                    return this.students.filter(function (s) {
                         s.enrolled = true;
                    })
                }else{
                    return this.students.filter(function (s) {
                        return s.enrolled = false;
                    })
                }
            },
        }
       
    })

// 独立全选 false true ，点击事件 ， 绑定函数方法 



// 需求
// 根据下拉列表选中项，填充“文字内容”和“链接”文本框
// 参考求助首页侧边栏“免费广告发布”弹出Modal，实现（不需要弹出Modal）：
// subscript 下标 


var isSelect = new Vue({
    el: "#isselect",
    data: {  
        selectCheckbox:false,  //选择复选框 
        selectedId:[],
        students: [
            { id: 8, name: '夏康平', enrolled: true },
            { id: 12, name: '陈国栋', enrolled: false },
            { id: 6, name: '韩佳宝', enrolled: true }
        ],
    },  
   

    methods: {
        // 需求 根据下拉列表选中项，填充“文字内容”和“链接”文本框
        selectHint:function(){   //  selectHint选择提示 
            return this.students.filter(function (s) {
                if (s.id === this.selectedId) {
                    this.$refs.slagon.value = s.name;
                }else{
                } 
            }.bind(this))
        },

        // 需求 点击复选框可以修改填充内容的值 
        chengeInput:function() { 
            if (!this.selectCheckbox) {
                this.$refs.slagon.disabled = false;
            }else{
                this.$refs.slagon.disabled = true;
            }
        }

    }
})

// alter 改变 


    // 参考发布求助，实现其关键字功能：
    // 没有选择一级关键字，不能选择二级关键字
    // 选择一级关键字后，二级关键字只能是一级关键字下的子集
    // 一级关键字和二级关键字被选中后，会显示在下拉列表上方
    // 自定义关键字输入完成后（按空格键），输入的关键字显示在下拉列表上方
    // 后输入的关键字显示在前面

    var selectBind = new Vue({  //选择绑定 
        el: "#select-Bind",
        data: {  
            Custom:'',  //自定义关键字 
            selectedId:[],
            students: [
                { id: 8, name: '一年级', enrolled: true },
                { id: 12, name: '二年级', enrolled: false },
                { id: 6, name: '三年级', enrolled: true }
            ],
            isone: ['杨嘉栋','大飞滚'],  //一年级名字
            istwo:['张世明','大飞'],    //二年级名字 
        },  

    
        methods: {
            // 需求 没有选择一级关键字，不能选择二级关键字
            selectHint:function(){  // selectHint 选择提示 
                if (this.selectedId =="") {
                    alert("先选择第一个 才能选择第二个 ")
                }else{
                }
            },
           
            // 功能：据第一级关键字 展示二级关键字内容 
            showTwoselect:function(){   
                if (this.selectedId===8) {
                    return this.isone ;
                }else{
                }
            },

            //需求： 一级关键字选中后，会显示在下拉列表上方
            // 显示一级关键字 
            showStairfun :function(){  //Stair 一级 
                return (function(){
                    for (var n in this.students) {
                        if (this.students[n].id === this.selectedId) {
                            document.getElementById('showStair').innerHTML = this.students[n].name; 
                            break;
                        }else{
                        }
                    }
                }.bind(this))()
            },

            //需求：二级关键字选中后，会显示在下拉列表上方
            showTwohintFun :function(){  //显示二级信息方法 
                var twoselect =  document.getElementById('selectTwoid').selectedOptions[0].innerHTML ;  //selectedOptions 获取下拉列表已选择的值 
                var showTwohint = document.getElementById('showTwo').innerHTML = twoselect ;
            },
        }
    })
