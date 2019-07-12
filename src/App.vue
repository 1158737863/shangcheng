<template>
  <div id="app">
    <transition name='fade'>
       <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./assets/chushuhua";
#app{
  width: 100%;
  height: 100%;
}
 .fade-enter-active,.fade-leave-active{  /*元素进入到css设定样式状态和离开css设定样式状态的过程的过渡效果 */
  transition: all 0.3s
}
.fade-enter,.fade-leave-to{     /*元素进入到css设定样式前状态和离开css设定样式后的状态 */
  opacity: 0;
}
</style>
