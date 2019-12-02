import React from 'react';
// import axios from 'axios';

/*
  1. 네트워크에 존재하는 데이터를 가져아서 const변수에 넣음
  1-1. fetch - promise(x)
  1-2. axios(o)
  2. const 변수를 view시킨다
*/

// const API_KEY = "524a130893027ea4aebef3cd951b1caa";
// const URL = "https://api.themoviedb.org/3/";
// const param = {
//   path: "movie/popular",
//   lan: "en" 
// }

function App(){
  const axios = require("axios");//네트워크에 있는 데이터 가져오는 기능
  
  let movies = null;
  axios
  .get(
    "https://api.themoviedb.org/3/movie/popular?api_key=524a130893027ea4aebef3cd951b1caa&language=en-US&page=1"
    )
  .then(function(response){
    
    movies = response.data.results;
    console.log(movies);

    const movieList = document.getElementById("movieList");
    for(let i = 0; i < movies.length; i++){
      const li = document.createElement("li");
      const span = document.createElement("span");

      span.innerHTML = movies[i].title;
      console.log(movies[i].title);
      li.appendChild(span);

      movieList.appendChild(li);
    };
  })
  .catch(function(error){
    console.log(error);
  })
  .finally(function(){

  })

  return <ol id="movieList"></ol>
}

export default App;
