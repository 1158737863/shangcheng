<template>
    <div class="home">
       <headertop title='首页' :headerbackshow='false'  :headermoreshow='false'> </headertop> <!-- 传递布尔型数组一定要有v-bind的形式，具体看vuejs prop传布尔型 -->
       <div class="contain">
           <div class="inner">
                <mt-swipe :auto="4000">
                    <mt-swipe-item  v-for='(item,index) in lunbolist' :key="index" @click.native='handelgo(index)'>  <!--在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 .native 修饰符：  -->
                            <img :src="item.img_url" alt="" class="swipeimg">
                    </mt-swipe-item>
                </mt-swipe>
                <div class="mui-content">
                        <ul class="mui-table-view mui-grid-view mui-grid-9">
                         <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                  <router-link to="/home/news">    <!-- mui美体查询，是将屏幕的宽度分为12分，sm-3，表示占屏幕宽度的30%// -->
                                        <span class="imgbot">
                                           <img src="../../assets/news.png" alt="">
                                        </span>
                                        <div class="mui-media-body">新闻资讯</div>
                                  </router-link>
                          </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                               <router-link to="/home/news">    <!-- mui美体查询，是将屏幕的宽度分为12分，sm-3，表示占屏幕宽度的30%// -->
                                        <span class="imgbot">
                                           <img src="../../assets/picshare.png" alt="">
                                        </span>
                                        <div class="mui-media-body">图片分享</div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                               <router-link to="/home/news">    <!-- mui美体查询，是将屏幕的宽度分为12分，sm-3，表示占屏幕宽度的30%// -->
                                        <span class="imgbot">
                                           <img src="../../assets/shopcart.png" alt="">
                                        </span>
                                        <div class="mui-media-body">商品购买</div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                               <router-link to="/home/news">    <!-- mui美体查询，是将屏幕的宽度分为12分，sm-3，表示占屏幕宽度的30%// -->
                                        <span class="imgbot">
                                           <img src="../../assets/fankui.png" alt="">
                                        </span>
                                        <div class="mui-media-body">留言反馈</div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to="/home/news">    <!-- mui美体查询，是将屏幕的宽度分为12分，sm-3，表示占屏幕宽度的30%// -->
                                        <span class="imgbot">
                                           <img src="../../assets/vidio.png" alt="">
                                        </span>
                                        <div class="mui-media-body">视频专区</div>
                                </router-link>
                          </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                  <router-link to="/home/news">    <!-- mui美体查询，是将屏幕的宽度分为12分，sm-3，表示占屏幕宽度的30%// -->
                                        <span class="imgbot">
                                           <img src="../../assets/lianxi.png" alt="">
                                        </span>
                                        <div class="mui-media-body">联系我们</div>
                                </router-link>
                            </li>
                                  
                        </ul> 
                </div>
            </div>
       </div>
         <transition name='fade'>
             <keep-alive>
                   <router-view></router-view>       
             </keep-alive>
         </transition> 
       <footernav></footernav>
    </div>
    
</template>
<script>
import headertop from '../../components/header/index'
import footernav from '../../components/footer/index'
import { Swipe, SwipeItem } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
    name:'home',
    data(){
        return{
          lunbolist:[],
         
          router:['/shopcart','/menber','/shopcart','/menber','/shopcart','/menber']
        }
    },
    components:{
        headertop,
        footernav
    },
    mounted(){
            this.getlunbotu() 
    },
    methods:{
        getlunbotu(){
             this.$axios.get("/api/getlunbo"
                
            ).then(res=>{
                    //console.log(res)
                   this.lunbolist=res.data.data
            }).catch((err)=>{
                    Toast({
                            message: '数据请求失败',
                            iconClass: 'icon icon-success'
                    }); 
                })
        },
     
        handelgo(index){
            console.log(index)
            this.$router.push(this.router[index])
        }
    }
}
</script>
<style  lang="less" scoped>
.home{
    height: 100%;
    width: 100%;
    position: relative;
}
.contain{
    width: 100%;
    height: calc(100% - 40px - 50px);
    overflow:auto;
    position: relative;  //这里一定要使用相对定位，让他依旧占据标准留。如果使用margin-top的话，margin的距离还会在父盒子滚动条的范围内（父盒子出现滚动条），造成可以滚动到header遮挡的部分。
    top: 40px;
}
.mint-swipe{         //ui框架都是百分比布局，只要设置父盒子宽高即可实现下面子元素的宽高更新
    height: 200px;
    background-color: red;
}
.swipeimg{
    width: 100%;
}
.mui-content > .mui-table-view:first-child {
    margin-top: 0px;
}
.mui-table-view-cell a:hover{
    text-decoration: none
}
.imgbot img{
    width: 50px;
    height: 50px;
    border-radius: 50%
    
}
.fade-enter-active,.fade-leave-active{
    transition: all 0.3s
}
.fade-enter,.fade-leave-to{
    opacity: 0;
   
}
</style>


