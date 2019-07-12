<template>
    <div class="newinfo">
          <headertop title='新闻详情' :headerbackshow='true'></headertop>
               <div class="contain">
                        <div class="title">
                            <h1>{{content.title}}</h1>
                            <p class="childtitle">
                                <span>发表时间：{{content.add_time}}</span>
                                <span>点击数:{{content.click}}</span>
                            </p>
                        </div>
                        <hr >
                        <div class="newinner">
                            <p>{{content.content}}</p>
                            <img :src="content.img_url" alt="" class="innerimg">
                        </div>
                        <pinglun ></pinglun>
                </div>
               

          <footernav></footernav>
    </div>
</template>

<script>
import headertop from '@/components/header/index'
import footernav from '@/components/footer/index'
import pinglun from '../../../components/pinglun/index.vue'
export default {
    name:"newsinfo",
    data(){
        return{
          newid:0,
          content:{}
        }
    },
    components:{
        headertop,
        footernav,
        pinglun,
    },
    mounted(){
         this.newid=this.$route.query.id
         this.$axios.get('/api/getnew',{params:{newid:this.newid}}).then(res=>{
              this.content=res.data.data[this.newid]
         })
    }
}
</script>
<style lang='less' scoped>
.newinfo{
    width: 100%;
    height: 100%;
    background-color: white;
    position:absolute;
    top: 0;
    left: 0;
    z-index:4
}
.contain{
    width: 100%;
    height: calc(100% - 40px - 50px);
    position: relative;   /*//这里一定要使用相对定位或者padding，让他依旧占据标准留。如果使用margin-top的话，margin的距离还会在父盒子滚动条的范围内（父盒子出现滚动条），造成可以滚动到header遮挡的部分。 */
    top:40px;
    overflow: auto; //产生滚动，让子元素可以完全看到
}
.contain h1{
    text-align: center;
    padding: 5px 5px
}
.childtitle{
    display: flex;
    justify-content: space-between;
    padding:5px 5px
}
.newinner{
    p{
        text-indent: 2em;
        padding:5px 5px
        
    }

    .innerimg{
            width: 100%;
    }
}
</style>

