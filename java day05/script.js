//01.
const movies = [
  {
    id: 1,
    title: "인셉션",
    voteAverage: 8.4,
  },
  {
    id: 2 ,
    title: "인터스텔라",
    voteAverage: 8.7,
  },
  {
    id: 3 ,
    title: "다크 나이트",
    voteAverage: 9.0,
  },
  {
    id : 4 ,
    title: "테넷",
    voteAverage: 7.3,
  },
];

//02.find()로 영화 찾기
const foundMovie = movies.find((movie) => movie.id ===2);
console.log(foundMovie);

//03.filter()로 평점이 높은 영화 찾기
const filterMovies = movies.filter((movie) => movie.voteAverage >= 8.5);
console.log(filterMovies);

//04.map()으로 영화 제목만 가져오기
const movieTitles  = movies.map((movie) => movie.title);
console.log(movieTitles);

//05.검색어 가공하기
const searchForm = document.querySelector("#search-Form");
const searchForm = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-result");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchKeyword = searhInput.value.trim().toLowerCase();
  searchResult.textContent = `검색어: ${searchKeyword}` ;
})