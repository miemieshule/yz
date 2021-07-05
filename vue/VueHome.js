var vm = new Vue({
    el: "#logo",
    data: {
        StudyLogo: "键盘敲烂 代码过万"
    }
})



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
                    var  newenrolleds = value ;
                    console.log(newenrolleds);
 
                }


            }
        }
    })

    //作業  想了两小时 做不出来 只能增加不能减 
