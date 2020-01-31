/* eslint-disable no-console */
<template>
<div id="description">
    <h2>Description about {{this.title}}</h2>
    <div>
        <img class="poster" v-bind:src="this.poster" alt=""></div>
    <div>
        <div class="row">
        <div class="col"> Name of Movie</div>
        <div class="col"> Genre</div>
        <div class="col"> Rating</div>
        <div class="col"> IMDB ID</div>
        <div class="col"> Runtime:(in Minutes)</div>
        <div class="col"> Release Year</div>
    </div>
    </div>
    <div class="row">
    <div class="col">{{this.title}}</div>
    <div class="col-2">{{this.genre}}</div>
    <div class="col">{{this.rating}}</div>
    <div class="col">{{this.id}}</div>
    <div class="col">{{this.runtime}}</div>
    <div class="col">{{this.year}}</div>
    </div>
    <div class="row">
        
        
        <div class="col">
        <br>
        <br>    
        <h4>Plot:</h4>{{this.plot}}</div>
    </div>

</div>
</template>
<script>
// import axios from 'axios';
export default{ 
data(){
    return {
        id:this.$route.params.id,
        title:'',
        plot:'',
        rating:'',
        year:'',
        runtime:'',
        genre:'',
        poster:''
    };
},
methods:{
    selectMovie:function(){
        
        }
    },
    mounted:function(){
        this.movies=JSON.parse(sessionStorage.getItem("movies"))
        for(var i=0;i<this.movies.length;i++)
        {
            if(this.movies[i].data.imdbID==this.id)
            {
                // eslint-disable-next-line no-console
                console.log(this.movies[i].data.Title)
                this.title=this.movies[i].data.Title
                this.plot=this.movies[i].data.Plot
                this.rating=this.movies[i].data.imdbRating
                this.year=this.movies[i].data.Year
                this.runtime=this.movies[i].data.Runtime
                this.genre=this.movies[i].data.Genre
                this.poster=this.movies[i].data.Poster
                
            }
        }
    // const List=await axios.get('http://www.omdbapi.com/?t=harry+potter&y=2011&apikey=e0620bd4');
    //   const Icon=await axios.get('http://img.omdbapi.com/?t=harry+potter&apikey=e0620bd4')
    //   this.poster=Icon.data.poster

    // eslint-disable-next-line no-console
    // console.log(JSON.stringify(this.moviesList)),

   
    // this.moviesList.pop(this.moviesList[0])
    //this.moviesList.push(List.data)
    
    
    // sessionStorage.setItem("movies",JSON.stringify(List.data))
    
}
}
</script>
<style lang="css" scoped>
.poster{
    float: left;
    width: 300px;
    height: 600;

}
</style>
