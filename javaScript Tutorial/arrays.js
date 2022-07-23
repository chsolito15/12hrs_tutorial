//Array work!
// Using 'map' write a function that converts farenheit to celcius.
const farenheit = [23,140,212,41];
let celciusArr;

getCelcius = () =>{
    return farenheit.map(value => (value - 32) * 5/9)
}
// console.log(getCelcius())
celciusArr = getCelcius(farenheit);
console.log(celciusArr) // OUTPUT: [-5, 60, 100, 5]

// Using 'some' write a function that checks an array for a 'falsey'
// value.

const array = [11, NaN, [], 'Angels',{}]
checkForFalsey = () =>{
   return array.some((item) => !item)
}
console.log(checkForFalsey()) //OUTPUT: true

//. some()
const hearts = Array.from(document.querySelectorAll('.heart'))
console.log(hearts)
const isHeartBroken = hearts.some(heart => heart.hasChildNodes())
console.log(isHeartBroken)

const countries = ['Afghanistan', 'Poland', 'South America'];
console.log(countries.some(x => x === 'Poland') + " using some()")

// Using 'reduce' write a function that will return the total number
// of characters in an array of strings
const words1 = ['Rabbit','Football','Cracking'];

getTotal = () => {
   return words1.reduce((total, word) => total + word.length, 0)
}
console.log(getTotal());
//.every()
//if everything in our array matches a rule retun true
// if every students have greater than 50 score returns true, else if one of the students had less than 50 score (inside array) returns false

const testResults = [140, 134, 55, 91, 145, 125, 130]
const studentPass = testResults.every(result => result >= 50)
console.log(studentPass)//OUTPUT: true

// Using 'every' write a function that checks wheather every number in
// an array is a square number.

const numbers = [9, 16, 81]
checkSquares = () =>{
  return  numbers.every((number) => Math.sqrt(number) % 1 ===0) // every
}
console.log(checkSquares());//OUTPUT: true

const animals = ['cat', 'rat', 'dog', 'mouse'];
const animalLength = animals.every(animal => animal.length === 3)
console.log(animalLength); //OUTPUT: false

const movieShows = ['Lupin' ,'Cobra', '24', 'Mr.Robot'];
const displayShows = movieShows.filter(x => x.length <= 5)
console.log(displayShows)

// Using an array method, write a function that returns the string
// elements of an array that have a given length or larger.
//

const wordArray = ['Florida', 'Dog','Phone']
const num = 5;
getWords = () =>{
    return wordArray.filter(x => x.length >= num) // filter
}
console.log(getWords()); // OUTPUT: ['florida', 'phone']
//
getWords1 = (arr, num) =>{
    return arr.filter(x => x.length >= num) // filter
}
console.log(getWords1(['Florida','Dog','Phone'],5)); // OUTPUT: ['florida', 'phone']
console.log(getWords1(['Pen','Astronaut','Puppy'],6)); // OUTPUT: ['Astronaut']

//Using an array method, write a function that converts an array
// of cm values as strings, into an array of numbers
const cmValues = ['25cm','5.6cm','1000cm'];
getValues = () =>{
    return cmValues.map(x => parseFloat(x))
}
console.log(getValues());

getValues = (cmVal) =>{
    return cmVal.map(x => parseFloat(x))
}
console.log(getValues(['35cm','55cm','1.2cm']));
console.log(getValues(['25cm','15cm','5cm']));

// Using 'split', 'filter' and 'include' write a funtion that counts 
// the vowel in a sentence 
//const saying = 'In West Philadelphia, born and raised'
const vowel = ['a','e','i','o','u','A','E','I','O','U']
getVowelCount = (sentences) =>{
    return sentences.split('').filter(letters => vowel.includes(letters)); //length
}
console.log(getVowelCount('I am a Dog'));
console.log(getVowelCount('I am a Christopher Solito'));

// Using 'split', 'map' and 'join' write a function that capitalises
// first letter of each word in a sentence.
//const mywords = 'the queens gambit'
capitalise = (mywords) =>{
    return mywords.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}

console.log(capitalise('the incredibles'));

const hexa = document.getElementById('hexagon');
clickHexagon = () =>{
    hexa.style.backgroundColor = 'red'
}
hexa.addEventListener('click', clickHexagon)

// Arrays
const book = ['Moby Dick','Life of Pi','Sapiens','The Hungry Caterpillar']
let listMovies = 0;
for(let i = 0; i < book.length; i++){
    listMovies++
    console.log(listMovies +" " + book[i]);
    if(book[i] === 'Sapiens'){
        listMovies += 1
        console.log(listMovies)
    }
}
/*
Arrays
this method does not change the existing arrays,
it returns a "new array"
*/

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];
const newArray = array1.concat(array2,array3)
console.log(newArray + " New Array")

// Objects
const user = {
    name: 'Ania',
    lastName: 'Kubow',
    pets: false
}
console.log(user)

//Arrays of Objects

const ObjectUsers = [
    { username: 'Mo244', followers: 34, is_followed: false},
    { username: 'Angela_boo', followers: 133, is_followed: true},
    { username: 'SexyRicky21', followers: 234421, is_followed: false}
]
console.log(ObjectUsers[0].is_followed)

for(let i = 0; i < ObjectUsers.length; i++){
    if(ObjectUsers[i].is_followed === false){
        console.log('Hi '+ ObjectUsers[i].username +' long time no speak')
    }
}

// Functions
// camelCase for naming functions - best pratices

let Bobyname = 'Danny';
function sendText(){
    //block of code
    console.log('Hey '+ Bobyname +' do you want to hang out')
}
sendText();
// reuse code

function sendText(name01, time01){
    //block of code
    console.log('Hey '+ name01 +' do you want to hang out '+ time01);
}
sendText('Booby',10);
sendText('Boby',8);
sendText('Farooq', 9);

function sendRemainder(name1, time1){
    console.log('Dear ' + name1 + ' your meeting at ' + time1);

}
sendRemainder('qwerty', '5pm');

let name2 = 'Ania';
count1 = 1
function showAlert(){
    console.log(name2 + ' wake up! This is alarm number ' + count1)
    count1 += 1;
}
showAlert();
showAlert();
showAlert();

const canIVote =[
    {name: 'Vladimir Kukov', age: 18},
    {name: 'Juan Dela cruz', age: 12},
    {name: 'Angel Locsin', age: 19},
    {name: 'Bernard Teodoro', age: 59},
    {name: 'Christopher Solito',age: 30}
];
const whoCanVote = canIVote.map(x => `${x.age >= 18}`)
console.log(whoCanVote);

const shows = [
    {  name:'Lupin', series: 1, episode: 5},
    {  name:'Cobra', series: 5, episode: 30},
    {  name:'24', series: 8, episode: 50},
    {  name:'Mr Robot', series: 1, episode: 24}
];
showDisplay = shows.filter(show => show.series > 2)
console.log(showDisplay);

//concat

const string1 = 'Say Cheese, '
const string2 = 'Ania'
console.log(string1.concat(string2))

 // .querySelector()
 console.log(document.querySelector('div'))

// Math.random()
// Math.floor() - rounds numbers down to the nearest full integer
// Math.ceil() - round up
// Math.round() - round to nearest integer

const Tetrominoes = ['LTetromino', 'ZTetromino', 'iTetromino'];
const randomNumber = Math.random() * Tetrominoes.length
console.log(randomNumber)
const randomInteger = Math.floor(randomNumber);
console.log(randomInteger)
console.log(Tetrominoes[randomInteger])

const drinksMenu = ['Vodka Tonic', 'White Wine', 'Beer', 'Mocktail']

const randomMenu = Math.random() * drinksMenu.length
console.log(randomMenu)
const randomWines = Math.ceil(randomMenu)
console.log(randomWines)
console.log(drinksMenu[randomWines])

//console.log(drinksMenu[Math.floor(Math.random() * drinksMenu.length)])

// join
// returns a NEW String
const textDisplay = document.querySelector('.text');
const emotions = ['Happy', 'Sad','Confident'];
const newEmotion = emotions.join(' ')
textDisplay.innerHTML = newEmotion





