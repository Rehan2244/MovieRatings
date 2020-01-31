<template>
<div class="Movies">
<p>List of Movies</p>
<div  v-bind:key="movie.data.imdbID" v-for="movie in moviesList">
    <div class="row" style="border-bottom:1px solid black;margin-bottom:30px" @click="goTo($event)"  v-bind:id="movie.data.imdbID"  >
      <div class="col-1">
    <img class="thumbnail"  v-bind:id="movie.data.imdbID"  v-bind:src="movie.data.Poster">
    </div>
    <div class="col-4"><strong  v-bind:id="movie.data.imdbID" >{{movie.data.Title}}</strong>
    <div class="row" v-bind:id="movie.data.imdbID" >{{movie.data.Plot}}</div>
    </div>
    <div class="col-3"  v-bind:id="movie.data.imdbID" >Release Year:{{movie.data.Year}}</div>
    <div class="col-3 rating"  v-bind:id="movie.data.imdbID" >Genre:{{movie.data.Genre}}</div>
    </div>
    </div>  
<div class="addMovie">
  <form action="">
    <table>
      <tr>
        <td>
      <tr>
        <td>Name of Movie:</td>
        <td><input class="form-control" type="text" v-model="title"></td>
      </tr>
      <tr>
        <td>Plot:</td>
        <td><textarea class="form-control" rows="3" cols="23" v-model="plot"></textarea></td>
      </tr>
      <tr>
        <td>Rating:</td>
        <td>
          <select class="custom-select" name="" id="" v-model="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </td>
      </tr>
      <tr>
          
          <td>Running Time:</td>
          <td><input type="number" class="form-control" placeholder="  In minutes" v-model="runtime">{{runtime}}</td>
        </tr>
      </td>
      <td>
        <tr><br></tr>
        
        <tr>
          <td>Genre:(Single/Multiple)</td>
          <select class="custom-select" multiple v-model="genre" style="width:400">
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Thriller">Thriller</option>
            <option value="Horror">Horror</option>
          </select>
        </tr>
       
          
       
        <tr>        
          <td>
          Upload Poster:
          <br>
        <input type="radio"  v-model="picked" name="select" value="pc" id="one" checked>
        <label for="pc">From Computer</label>
        <br>
        <input type="radio" v-model="picked" name="select" value="url" id="two" >
        <label for="url">From URL</label>
        </td>
        <td>Select Year:<select name="" id="year" v-model="year"></select></td>
        </tr>
        <div v-if="picked==='pc'">
        <tr><td><input type="file" id="uploaded-file" class="btn" style="color:white" value="url" ></td></tr>
        </div>
        <div v-else>
          <input type="text" value="url" placeholder="Enter URL For image..." class="form-control" style="width:50%" name="" id="" v-model="urlPic">
        </div>
        <div>
          <tr></tr>
        </div>
      </td>
    </tr>
      
    </table>
    <div style="text-align:centre;margin-left:40%;width:100%;">
    <input type="button" class="btn btn-info" style="width:200px;" v-on:click="addMovie()" value="add">
    </div>

  </form>
</div>
</div>    
</template>
<script>
import axios from 'axios'
import Router from '../main.js'
export default {

 name:"movies",

 data(){
    return {
      moviesList:[],
      movienames:'',
      compare:[],
      movies:'',
      poster:'',
      picked:'',
      rating:'',
      id:'',
      title:'',
      runtime:'',
      plot:'',
      genre:'',
      url:'',
      urlPic:'',
      selected:'',
      gen:'',
      start:1900,
      idGenerated:'tt',
      options:'',
      year:''
    };
  },
  methods:{
  
  
    goTo:function(event){
      this.$router.push('Desc/'+event.target.id)
    },
    addMovie: function () {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload=alert("loaded")
      }
      for(var i=2;i<9;i++)
      {
        
        this.idGenerated += String(Number(Math.floor(Math.random()*10)))
      }
          if(this.title=="")
          {
            alert("Enter Title")
          }
          else if(this.plot=="")
          {
            alert("Write Plot")
          }
          else if(this.rating=="")
          {
            alert("Select Rating")
          }
          else if(this.runtime=="")
          {
            alert("Enter Runtime")
          }
          else if(this.genre=="")
          {
            alert("Select Atleast one genre")
          }
          else if(this.year=="")
          {
            alert("Select year")
          }
          else if(!this.picked)
          {
            alert("Enter URL")

          }
          else{
            if(this.picked=="pc")
            {
              this.urlPic=File
            }
          this.genre=this.genre.toString()
          this.moviesList=JSON.parse(sessionStorage.getItem("movies"));
          this.moviesList.push({data:{"Title":this.title,"Plot":this.plot,"imdbRating":this.rating,"Runtime":this.runtime,"Genre":this.genre,"Poster":this.urlPic,"Year":this.year,"imdbID":this.idGenerated}})
          sessionStorage.setItem("movies",JSON.stringify(this.moviesList))
          // eslint-disable-next-line no-console
          console.log(this.moviesList)
          }
        },
    //   showId:function(tgt){
    //     /* eslint-disable no-console */
    //     window.location.href=window.location+"id="+tgt.target.id;
    //     console.log(tgt.target.id);
    /* eslint-enable no-console */
  toggle:function(){
      this.hidden=true;
  },
  navigate:function()
  {
    Router.routes.navigate("Foo")
    
  }
  },
  mounted:async function(){
      for(var i=this.start;i<=2020;i++)
      {
        this.options+="<option>"+i+"</option>"
      }
      document.getElementById("year").innerHTML=this.options
    {
    const List=await axios.get('http://www.omdbapi.com/?t=harry+potter&y=2011&apikey=e0620bd4');
   if(sessionStorage.length<1)
  {
      
      this.moviesList[0]=List
      sessionStorage.setItem("movies",JSON.stringify(this.moviesList))
      // eslint-disable-next-line no-console
      // console.log(this.moviesList)
      // eslint-disable-next-line no-console
      console.log(sessionStorage.getItem("movies"))
  } 
   else{
    //  this.moviesList=JSON.parse(sessionStorage.getItem("movies"));
     this.moviesList=JSON.parse(sessionStorage.getItem("movies"));
   }
    }
   
  }
}
</script>
<style scoped>
div{
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-left:10px;
   
}
.title{
    display: inline-block;
    float: left;
    
}
p{
    font-size: 24px;
}
.rowBar{
    margin-bottom: 1px solid black;
    display: flex;
    width: 95%;
    border: 1px solid grey;
    margin-top: 10px;
    border-top:1px solid black;
    height: auto;
    padding:10px;
    visibility: collapse;
}
.thumbnail{
    width: 90%;
    max-height: 100px ;
    min-height: 40px;
    float: left;
}
.rating{
   text-align: center;
}
.year{
    display: inline-block;
    width:20%;
}
.description{
    display: inline-block;
}

body{
    word-wrap:break-word;
}

.addMovie{
  color:white;
  background: #2c3e50
}

table{
  width: 80%;
  margin:auto;
  
}

</style>