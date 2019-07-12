<template>
    <div class="pinglun">
            <h1>发表评论</h1>
            <hr>
            <textarea maxlength=120 placeholder='BB的评论长度不能超过120字' v-model='massge'></textarea>
             <mt-button type="primary" size='large' class="tijiao" @click="tijiaopl(massge)">发表评论</mt-button> <!--data里面所有的数据都可以绑定在tempale里面，此处吧message数据当做实际参数传递给tijiaopl方法 -->
            <div class="contentinner">
                 <ul>
                     <Li v-for="(item,index) in commentlist" :key='index'>
                          <p class="cmttitle">
                              第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user}}&nbsp;&nbsp;发表时间：{{item.add_time}}
                          </p>
                          <div class="cmtbody">
                              {{item.comment}}
                          </div>
                     </Li>
                 </ul>
            </div>
            <mt-button type="danger" size='large' class="tijiao" @click='loadmore'>加载更多</mt-button>
            </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name:'pinglun',
    data(){
        return{
            commentlist:[],
            pageindex:1,
            id:0,
            massge:""
        }
    },
    created(){
       this.getcomments()
       this.id=this.$route.query.id
    },  
    mounted(){
      let a='hehe'
      let b=`dajiba${a}` //ES6zi字符串模板，拼接字符串。注意反引号。就是波浪符那个键
      console.log(b)
      let c=[1,2,3]
       c.splice(0,0,6) //在index为0的位置，删除0个元素，并插入6.相当于在最前面插入了一个6
      console.log(c)
    
    },
    methods:{
        getcomments(){
            this.id=this.$route.query.id
            this.$axios.get('/api/getcomments',
                {
                    params:{id:this.id,
                            pageindex:this.pageindex
                           }
               }).then(res=>{
                   this.commentlist=this.commentlist.concat(res.data.data)
                  // console.log(res)
               }) 
        },
        loadmore(){
            this.pageindex++
            this.getcomments()
        },
        tijiaopl(a){
            if(a.length>=5){
                     let body=a.trim() //a.trim()去除a中的空格字符
                     this.$axios.post(`/api/postcomment/${this.id}`,
                                {
                                    content:body
                                },//发送的数据
                                {
                                headers:{'Content-Type':'application/x-www-form-urlencoded'}
                                }).then(res=>{
                                        this.commentlist.splice(0,0,
                                             { louceng:1,
                                                user:'刘旭',           
                                                click:10,
                                                id:1,
                                                add_time:'2019-7-2', 
                                                comment:a
                                             }
                                        )
                                   this.$nextTick(this.massge="") //数据渲染完dom后，把输入框内容清空

                      
                              })
            }

            else {
               Toast({                 
                    message: '评论不能少于5个字',
                    duration: 1000                
               })
            }
         
        }

        
    }
}
</script>
<style lang="less" scoped>
.pinglun{
    width: 100%;
    text-align: center;
    textarea{
        width: 98%;
        height:200px;
        margin: 15px 0 0 0
    }
    .tijiao{
         width: 100%;
        color:black;
        margin: auto
    }
    .contentinner{
        width: 100%;
      
        .cmttitle{
            background-color:rgb(224,154,197);
            color: white;
            text-align: left
        }
        .cmtbody{
            text-align: left;
            font-size: 12px
        }
    }
}

</style>
