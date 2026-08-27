//실습
const movies = [
  { id: 1, title: "Inception", voteAverage: 8.4 },
  { id: 2, title: "Interstellar", voteAverage: 8.7 },
  { id: 3, title: "The Dark Knight", voteAverage: 9.0 },
 ];
 //01.
 const foundMovie = movies.find((movie) => movie.id ===2);
 console.log(foundMovie);
//02.
 const filterMovies = movies.filter((movie) => movie.voteAverage >= 8.5);
 console.log(filterMovies);
//03.
 const movieTitles = movies.map((movie)=> movie.title);
 console.log(movieTitles);
//04.
const movieLowerCaseTitles = movies.map((movie) => movie.title.toLocaleLowerCase());
console.log(movieLowerCaseTitles);
