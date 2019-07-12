<template>
  <div class="hello">
     <headertop title='首页' headerbackshow=true headermoreshow=true>
     </headertop>
     <footernav></footernav>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import headertop from './header/index'
import footernav from './footer/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    
  },
  components:{
      headertop,
      footernav,
    },
  methods:{
   gg(){
    Toast({
      message: '提示',
      position: 'bottom',
      duration: 5000,
      iconClass: 'iconfont icongouwuchekong'
    })
  }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
