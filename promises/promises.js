// 1. Will be a brief section of fetch and .then()
// 2. Will be creating promises

//~~~~~~ 1. Start fetch and .then() usage~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start
//This is coming back as a promise we will need to "process it"
const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/goldeen");

pokemon
  //The first "ping" will be a response, it is still unreadable to front end
  //But using the .json() it makes it readable in the next .then()
  .then((res) => res.json())
  //Below here the data is now redable and we get a bunch of info we can use!
  .then((data) => console.log(data))
  //This will give us the error that happened if we did not get an approprite response
  .catch((err) => console.log(err));

//~~~~~~ 1. End~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End

//~~~~~~ 2. Start Promise Creation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start

const promise = new Promise((resolve, reject) => {});

//~~~~~ 2. End Promise Creation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End
