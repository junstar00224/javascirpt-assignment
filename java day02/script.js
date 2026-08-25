// const voteAverage = 8.4;

// const ratingText = voteAverage >= 8.4 ? "추천 영화" : "일반 영화";

// console.log(ratingText);

// const isMember = true;
// const totalPrice = 36000;

// if (isMember && totalPrice >= 30000) {
//   console.log("회원 혜택 적용");
// } else if (isMember) {
//   console.log("기본 회원 혜택 적용");
// } else {
//   console.log("일반 예매");
// }

// const movies = [
//   { title: "스파이더맨", voteAverage: 8.4, releaseDate: "2026-08-21"},
//   { title: "오디세이", voteAverage: 8.2, releaseDate: "2026-08-21"},
//   { title: "어벤져스", voteAverage: 9.0, releaseDate: "2026-08-21"},
// ];

// console.log(movies[1].title);
// console.log(movies[0].voteAverage);

// for (let i = 1; i < 11; i++) {
//   console.log(i);
//  }

//  const videos = [
//   { id: 1, title: "인셉션", voteAverage: 8.4 },
//   { id: 2, title: "인터스텔라", voteAverage: 8.7 },
//   { id: 3, title: "다크 나이트", voteAverage: 9.0 },
//   { id: 4, title: "테넷", voteAverage: 7.3 },
// ];
// for (const video of videos) {
//   if (video.voteAverage >= 8) {
//   console.log(video.title);
//   }
//  }

// 01번 문제
const movie = {
  id: "1",
  title: "인셉션",
  voteAverage: 8.4,
  voteCount: 35000,
  releaseDate: "2010-07-15",
  isFavorite: false,
};
console.log(movie.title);
console.log(movie.voteAverage);
console.log(movie.isFavorite);

// 02번 문제
const voteAverage = 8.4;
const ratingText = voteAverage >= 8 ? "추천 영화" : "일반 영화";

if (voteAverage >= 8) {
  console.log("추천 영화");
} else {
  console.log("일반 영화");
}
// 03번 문제
if (movie.voteAverage >= 8 && movie.voteCount >= 30000) {
  console.log("일반 영화");
}

// // 04번 문제
// const isFavorite = true;
// const buttonText = isFavorite ? "찜 해제" : "찜하기";
// console.log(buttonText);

// 05번 문제
const movies = [
  {
    id: 1,
    title: "인셉션",
    voteAverage: 8.4,
    releaseDate: "2010-07-15",
  },
  {
    id: 2,
    title: "인터스텔라",
    voteAverage: 8.7,
    releaseDate: "2014-11-05",
  },
  {
    id: 3,
    title: "테넷",
    voteAverage: 7.3,
    releaseDate: "2020-08-26",
  },
];

// 06번 문제
console.log(movies[0].title);
console.log(movies[1].voteAverage);
console.log(movies[2].releaseDate);
console.log(movies.length);

// 07번 문제
movies[0].voteAverage = 8.5;
console.log(movies[0].voteAverage);

movies.push({
  id: 4,
  title: "다크 나이트",
  voteAverage: 9.0,
  releaseDate: "2008-07-16",
});
console.log(movies.length);

function showMessage() {
  console.log("주문 완료");
}
function orderCoffee(menu, callback) {
  console.log(`${menu}주문 접수`);
}
callback();
orderCoffee("아메리카노", showMessage);
