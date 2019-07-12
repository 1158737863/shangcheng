<template>
        <div class="newslist">
            <headertop title='新闻列表' :headerbackshow='true'></headertop>
            <div class="contain">
             <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key='index'>
					 <router-link :to='{name:"newsinfo",query:{id:item.id}}'>  <!--此时使用路由传参，点击哪个新闻，跳转到详情页，并把新闻的id传过去，新闻页拿到标识符id，加载不同的数据 -->
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
						    <h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time | dateformat}}</span>
                                 <span class="click">点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
		         
			</ul>
            </div>
            <footernav></footernav>
       </div>
    
</template>
<script>
import headertop from '@/components/header/index'
import footernav from '@/components/footer/index'

export default {
    name:'news',
    data(){
        return{
            newslist:[]
        }
    },
    components:{
        headertop,
        footernav,
       
    },
    mounted(){
            
        this.$axios.get('/api/getnewslist').then(
            (res)=>{
                this.newslist=res.data.data
            }
        )
    }
}
</script>

<style lang="less" scoped>
.newslist{
    position: absolute;
    top:0px;
    left:0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index:5
}
.contain{
    width: 100%;
    height: calc(100% - 40px - 50px);
    overflow:auto;
    position: relative;  //这里一定要使用相对定位，让他依旧占据标准留。如果使用margin-top的话，margin的距离还会在父盒子滚动条的范围内（父盒子出现滚动条），造成可以滚动到header遮挡的部分。
    top: 40px;
}
.mui-media-body h1{
    
     overflow: hidden;
     text-overflow:ellipsis; //w文本溢出变成小点点，必须配合overflow：hidden使用
     padding: 5px 0px 10px 0px
}
.mui-ellipsis{
    color:blue;
    display: flex;
    justify-content: space-between
}
.click{
    color:red
}
</style>
