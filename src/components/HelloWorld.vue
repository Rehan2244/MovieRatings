<template>
  <div class="hello">
    <h1>Welcome To Movies Info Portal</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.hello{
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  color:white;
  background: #404040;
}
</style>
