// const showMovie = function (title) {
//   return title;
//  };

//  function calculateTotal(price, quantity) {
//   const total = price * quantity;

//   return total;
// }

// const finalPrice = calculateTotal(10000, 3);

// console.log(finalPrice);

//  function calculateTicketPrice(price, count) {
//   return price * count;
//  }
//  const totalPrice = calculateTicketPrice(12000,3);
//  console.log(`총 예매 금액: ${totalPrice}원`);

//  console.log(document);

//02번
const getMovieMessage = (title, voteAverage) => {
  return `${title}의 평점은 ${voteAverage}점입니다.`;
};

console.log(getMovieMessage("인셉션", 8.4));

//03번
const message = getMovieMessage("인셉션", 8.4);
console.log(message);

//04번
const title = document.querySelector(".title");

title.textContent = "오늘의 추천 영화";

document.querySelector(".title");

//05번
const description = document.querySelector(".description");

description.classList.add("text-primary", "fw-bold");

//06번
const movieList = document.querySelector("#movie-list");

const movieItem = document.createElement("div");

movieItem.textContent = message;

movieItem.classList.add("border", "rounded", "p-3", "mb-2");

movieList.append(movieItem);

//07번
const message2 = getMovieMessage("인터스텔라", 8.7);

const movieItem2 = document.createElement("div");

movieItem2.textContent = message2;

movieItem2.classList.add("border", "rounded", "p-3", "mb-2");

movieList.append(movieItem2);

//08번
movieItem2.remove();
