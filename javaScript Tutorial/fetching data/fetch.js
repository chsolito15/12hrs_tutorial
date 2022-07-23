//Using fetch
//To get - GET REQUEST

/* fetch('https://my-burger-api.herokuapp.com/burgers')
    .then((response) => response.json())
    .then((data) => console.log(data)) */

/* function getData(){
    fetch('https://my-burger-api.herokuapp.com/burgers')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const name = data[0].name
        console.log(name)
    })
}
getData() */

//GET


const beerDisplay = document.querySelector('.name');
const button = document.querySelector('.button');

function getData(){

fetch('https://my-burger-api.herokuapp.com/burgers')
.then((response) => response.json())
.then((data) => {
    console.log(data)
    const randomNumber =  Math.random() * data.length;
    const randomInteger = Math.floor(randomNumber);
    const name = data[randomInteger].name
    //const name = data[0].name
    console.log(name)
    beerDisplay.innerHTML = name
 })

}

button.addEventListener('click', getData)


