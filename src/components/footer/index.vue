<template>
    <div class="footernav">
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/menber">
               
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">{{num}}</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
            <router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
            </router-link>
		</nav>
    </div>
    
</template>
<script>
export default {
    name:'footernav',
    data(){
        return{
           num:0
        }
    }
}
</script>
<style scoped>

.mui-bar-tab .mui-tab-item {
	color:black;
	

}
.mui-bar{
	z-index:2
}
.router-link-active{
 color:red!important
}
</style>

