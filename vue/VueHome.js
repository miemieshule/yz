var vm = new Vue({
    el: "#logo",
    data: {
        StudyLogo: "键盘敲烂 代码过万"
    }
})

// Vue：表单输入绑定 / v-model 作业
// 需求：完成课堂上没有完成的checkbox绑定
// 要求  enrolleds筛选出的入栈同学值 ， 点击后  enrolleds 发生变化 
    var vm = new Vue({
        el: "#yz-hello",

        data: {  
            students: [
                { id: 8, name: '夏康平', enrolled: true },
                { id: 12, name: '陈国栋', enrolled: false },
                { id: 6, name: '韩佳宝', enrolled: true }
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

                set:function(value){
                                    
                    return (function(){
                        for (let i = 0; i < value.length; i++) {
                            this.students.filter(function (s) {
                                return  s.id === value[i]   ;
                            }).map(function (s) {
                                return s.enrolled = true;
                            });
                        }
                    }.bind(this)())
 
                }


            }
        }
    })

    //作業  想了两小时 做不出来 只能增加不能减 
