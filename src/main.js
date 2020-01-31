import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MoviesList from './components/Movies.vue'
// import addMovie from './components/addMovie.vue'
import Desc from './components/movieDescription.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes=[
  {path:"/",component:MoviesList},
  {path:"/Desc",component:Desc},
  {path:"/Desc/:id",component:Desc}

];

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
