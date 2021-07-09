
    var vm = new Vue({
        el: "#yz-hello",


        data: {  
            all:false ,

            students: [
                { id: 8, name: '夏康平', enrolled: false },
                { id: 12, name: '陈国栋', enrolled: false },
                { id: 6, name: '韩佳宝', enrolled: false }
            ],
        },

        computed: {
            enrolleds:{
                get : function(){
                    return this.students.filter(function (s) {
                        return s.enrolled;
                    }).map(function (s) {
                        return s.id;
                    });
                },
                    set: function (value) {
                        // this.value;
                }
            }
        },

        methods: {
            allfun:function(){
                if (!this.all) {
                    return this.students.filter(function (s) {
                        return s.enrolled = true;
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
// 思路 dom元素 点击 选择状态 ，获取值 ，另外两个dom元素 ，传值 ， 
// subscript 下标 

var isSelect = new Vue({
    el: "#isselect",
    data: {  
        selectCheckbox:false,
        selectedId:[],
        students: [
            { id: 8, name: '夏康平', enrolled: true },
            { id: 12, name: '陈国栋', enrolled: false },
            { id: 6, name: '韩佳宝', enrolled: true }
        ],
    },  
   

    methods: {
        selectHint:function(){
            return this.students.filter(function (s) {
                if (s.id === this.selectedId) {
                    this.$refs.slagon.value = s.name;
                } 
            }.bind(this))
        },

        hintChange:function() {
            if (!this.selectCheckbox) {
                this.$refs.slagon.disabled = false;
            }
        }

    }
})


    // 参考发布求助，实现其关键字功能：
    // 没有选择一级关键字，不能选择二级关键字
    // 选择一级关键字后，二级关键字只能是一级关键字下的子集
    // 一级关键字和二级关键字被选中后，会显示在下拉列表上方
    // 自定义关键字输入完成后（按空格键），输入的关键字显示在下拉列表上方
    // 后输入的关键字显示在前面

    var selectBind = new Vue({
        el: "#select-Bind",
        data: {  
            Custom:'',
            selectCheckbox:false,
            selectedId:[],
            students: [
                { id: 8, name: '一年级', enrolled: true },
                { id: 12, name: '二年级', enrolled: false },
                { id: 6, name: '三年级', enrolled: true }
            ],
            isone: ['杨嘉栋','大飞滚'],
            istwo:['张世明','大飞'],
        },  

    
        methods: {
            selectHint:function(){
                if (this.selectedId =="") {
                    alert("先选择第一个 才能选择第二个 ")
                }else{
                    console.log('第一个选好了');
                }
            },
           
            selectBind:function(){
                if (this.selectedId===8) {
                    return this.isone ;
                }else{
                    console.log('没有选择第一级');
                }
            },

            showStairfun :function(){
                return (function(){
                    for (var n in this.students) {
                        if (this.students[n].id === this.selectedId) {
                            document.getElementById('showStair').innerHTML = this.students[n].name; 
 
                            break;
                        }else{
                           console.log('未选择');
                        }
                    }
                }.bind(this))()
            },


            showTwohintFun :function(){
                var twoselect =  document.getElementById('selectTwoid').selectedOptions[0].innerHTML ;
                var showTwohint = document.getElementById('showTwo').innerHTML = twoselect ;
            },
        }
    })
