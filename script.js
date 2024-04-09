// 1. Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating:

// "+= does same thing as ratings + ratings = "

// function showRating(rating) {
//   let ratings = "";
//   for (let i = 0; i < Math.floor(rating); ++i) {
//     ratings += "*"
//     if (i !== Math.floor(rating) - 1) {
//       ratings += " ";
//     }
//   }
//   if (!Number.isInteger(rating)) {
//     ratings += " .";
//   }
//   return ratings;
// }

// console.log(showRating(4.5));

// STEPS

// initialize an empty string

// loop through the rounded down rating

// add a star for every iteration

// if it's not the last iteration add a space

// if the number is not an integer

// add a full stop

// return it

// -----------------------------------------------------------------

// 2. Given an array of numbers, return the prices sorted by low to high:

// .sort sorts alphabetically. If you want to sort by numbers you need to do this: ((a, b) => a - b).

// function sortLowToHigh(numbers) {
//   return numbers.sort((a, b) => a - b);
// }

// console.log(sortLowToHigh([1, 5, 0, 10, 4]));

// -----------------------------------------------------------------

// 3. Given an array of objects, return the prices sorted by high to low:

// function sortHighToLow(numbers) {
//   return numbers.sort((a, b) =>  b.price - a.price);
// }

// console.log(
//   sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 },
//   ])
// );


// -----------------------------------------------------------------


// On Youtube, watch (Don't need to code along with):

// 1. "The Async Await Episode I Promised" - Fireship

// 2. "Async Await JavaScript ES7" - Techsith (1.5x Speed)

// 3. "Async JS Crash Course - Callbacks, Promises, Async Await"    - Travsery Media (1.5x Speed) (Just if you still don't understand)


// -----------------------------------------------------------------


// 5. Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id:

// async function postsByUser(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  
//   const result = await promise.json();

//   const posts = result.filter(element => element.userId === userId)

//   console.log(posts)
// }

// postsByUser(4);


// -----------------------------------------------------------------


// 6. Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete to-do's from the result:

// async function firstSixIncomplete(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  
//   const result = await promise.json();

//   const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6)

//   console.log(incompleteTasks)
// }

// firstSixIncomplete(6);