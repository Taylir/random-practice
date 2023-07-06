// 1. Will be a brief section of fetch and .then()
// 2. Will be creating promises
// 3. Is dealing with multiple promises

//~~~~~~ 1. Start fetch and .then() usage~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start
//This is coming back as a promise we will need to "process it"

// const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/goldeen");

// pokemon
//   //The first "ping" will be a response, it is still unreadable to front end
//   //But using the .json() it makes it readable in the next .then()
//   .then((res) => res.json())
//   //Below here the data is now redable and we get a bunch of info we can use!
//   .then((data) => console.log(data))
//   //This will give us the error that happened if we did not get an approprite response
//   .catch((err) => console.log(err));

//~~~~~~ 1. End~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End

//~~~~~~ 2. Start Promise Creation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start

// //This is how a promise is created with the new keyword and the resolve
// //and reject parameters. Although both parameters may not be required?
// const promise = new Promise((resolve, reject) => {

//   //Just saying what we want to happen in the function in this case will
//   //reject after 3 seconds 
//   setTimeout(()=> {
//     reject("Dang it")
//   }, 3000)
// });


// //And here we are saying what we want to do with the data we get although since
// // we had it reject in the promise the catch will run and not the .then()
// promise
//   .then((data) => console.log(data)) 
//   .catch((err) => console.log(err, 'Empty Data'));

//~~~~~ 2. End Promise Creation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End

// Start~~~~~~ 3. Multiple Promises ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start

// const youTubePost = { id: 1, comment: 'You Rock!'}
// const hobbies = ['Bowling', 'Cooking']

// const post = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(youTubePost)
//   }, 4000);
// })

// const hobby = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(hobbies)
//   }, 1000);
// })

// Promise
//   .all([post, hobby])
//   .then((res) => console.log(res));

const pokemon1 = fetch(`https://pokeapi.co/api/v2/pokemon/goldeen`);
const chuckJoke = fetch(`https://api.chucknorris.io/jokes/random`);

Promise
  .all([pokemon1, chuckJoke])
  .then(res => {
    return Promise.all(res.map(res => res.json()));
  })
  .then(data => {
    const [poke, joke] = data;
    console.log(poke.name, joke.value);
  })

// End~~~~~~ 3. Multiple Promises ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End
