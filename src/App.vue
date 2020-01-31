<template>
  <div id="app">
    <ThisIsTest msg="Hello User"/>
    <HelloWorld/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ThisIsTest from './components/Greet.vue'
// import MoviesList from './components/Movies.vue'
// import addMovie from './components/addMovie.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    ThisIsTest,
    
  },
}
</script>

<style>
#app {
  
}
</style>
