<template>
    <div class="headertop">
    <mt-header :title="title">
        <router-link to="/" slot="left" v-if='headerbackshow'> 
            <mt-button icon="back" @click="handelback">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right" v-if='headermoreshow'></mt-button>
    </mt-header>
    </div>
</template>
<script>
export default {
    name:'headertop',
    data(){
        return{
         
        }
    },
    props:{title:String,headerbackshow:Boolean,headermoreshow:Boolean},//通过父组件传过来的值判断是否显示左右插槽
    mounted(){
       
    },
    methods:{
        handelback(){
            this.$router.back()
        }
    }
}
</script>
<style lang="less" scoped>
.headertop{
    width: 100%;
    position: fixed;
    left:0;
    top:0;
    z-index:1
}
</style>

