<template>
    <div class="home">
       <headertop title='购物车' > </headertop>

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