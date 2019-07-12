<template>
    <div class="home">
       <headertop title='搜索' > </headertop>

       <footernav></footernav>
    </div>
    
</template>
<script>
import headertop from '../../components/header/index'
import footernav from '../../components/footer/index'
export default {
    name:'home',
    data(){
        return{

        }
    },
    components:{
        headertop,
        footernav
    }
}
</script>
<style scoped>

</style>