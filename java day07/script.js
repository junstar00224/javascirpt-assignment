const movie = {
  title:"Inception",
  voteAverage:9.1,
  releaseDate:"2010-08-21"
};

const { title, voteAverage,releaseDate } =movie;
const { title :movieTitle, voteAverage:movieVoteAverage, releaseDate:movieReleaseDate } =movie;

console.log(movieTitle);
console.log(movieReleaseDate);
console.log(movieVoteAverage);
console.log(movie.title);

const movies = [
  {
    id: 101,
    title: "Inception",
    vote_average: 8.4,
    release_date: "2010-07-16",
  },
  {
    id: 102,
    title: "Interstellar",
    vote_average: 8.7,
    release_date: "2014-11-05",
  },
  {
    id: 103,
    title: "The Dark Knight",
    vote_average: 9.0,
    release_date: "2008-07-18",
  },
];

movies.forEach((movie) => {console.log(movie.title);});
movies.forEach(({title}) => {console.log(title);});

const movies = [
  { id: 101, title: "Inception", vote_average: 8.4, release_date: "2010-07-16" },
  { id: 102, title: "Interstellar", vote_average: 8.7, release_date: "2014-11-05" },
  { id: 103, title: "The Dark Knight", vote_average: 9.0, release_date: "2008-07-18" },
  ];

const [firstMovie, secondMovie, thirdMovie] = movies;
console.log(firstMovie);
console.log(secondMovie);
console.log(thirdMovie);

const {title,vote_average,release_date} = firstMovie;
console.log("첫번째 영화")
console.log(`제목:${title}`);
console.log(`평점:${vote_average}`);
console.log(`개봉일:${release_date}`);

const {title:secondTitle, vote_average:secondVoteAverage, release_date:secondReleaseDate} = secondMovie;
console.log("두번째 영화");
console.log(`제목:${secondTitle}`);
console.log(`평점:${secondVoteAverage}`);
console.log(`개봉일:${secondReleaseDate}`);

const {title:thirdTitle} = thirdMovie;
console.log("세번째 영화");
console.log(`제목:${thirdTitle}`);

const movie = {
  title: "Inception",
  // detail: {
  // director: "Christopher Nolan",
  // },
  };
  const director = movie.detail?.director;
  console.log(director);

const data = {
  page: 1,
  results: [
  { id: 101, title: "Inception", vote_average: 8.4, release_date: "2010-07-16" },
  { id: 102, title: "Interstellar", vote_average: 8.7, release_date: "2014-11-05" },
  { id: 103, title: "The Dark Knight", vote_average: 9.0, release_date: "2008-07-18" },
  { id: 104, title: "Tenet", vote_average: 7.3, release_date: "2020-08-26" },
  ],
 };

const movies = data.results;
console.log(movies)

const firstMovie = movies[0];
const { title,vote_average,release_date} =firstMovie;
console.log(`제목:${title}`);
console.log(`평점:${vote_average}`);

const foundMovie = movies.find((movie) => movie.id ===102);
console.log(foundMovie);