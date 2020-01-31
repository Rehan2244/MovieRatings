<template lang="html">

  <section class="Greet">
    <h1>{{msg}}</h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'Greet',
    props: {
      msg: String
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .Greet{
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
