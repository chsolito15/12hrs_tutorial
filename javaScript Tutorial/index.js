const bob = document.querySelector('.face');
let count = 0;
function moveBob(){
 count += 50;
 bob.style.left = count + 'px'
 
}
bob.addEventListener('click', moveBob);

// .pop()
// changes the length of the last Array
// .shift()
// changes the leangth of the first Array
// . push()
// changes the first length of the array

const display = document.querySelector('.display')
const movies = ['Argo','Aliens','Fear']
display.innerHTML = movies;

moviesPop = () =>{
    movies.pop();
    display.innerHTML = movies;
}
display.addEventListener('click', moviesPop)
// .unshift()
// this will change the array

const unshiftDisplay = document.querySelector('.unshift')
const movies1 = ['Argo']
unshiftDisplay.innerHTML = movies1;

let clicked = false
moviesPop1 = () =>{
    if(!clicked){
        clicked = true;
        unshiftDisplay.removeEventListener('click', moviesPop1)
    }
    movies1.unshift('Hamilton');
    unshiftDisplay.innerHTML = movies1;
}
unshiftDisplay.addEventListener('click', moviesPop1)

// .slice(start, end)
//syntax
// it does NOT mutate arrays
// it produces new ones
// .splice(start, deleteCount, replacement)
// syntax
const display1 = document.querySelector('.display1');
const artist12 = ['Shakira', 'Snoop', 'Sia'];
artist12.splice(2,0,'Hook');
display1.innerHTML = artist12;

const circles = document.querySelectorAll('.circle');

changeColor = () =>{
       circles.forEach(x => {       
        x.style.backgroundColor = 'red';    
    });
}
const getID = document.getElementById("reColor");
getID.addEventListener('click', changeColor)


// .forEach()
const names = ['Ania','Bobny', 'Melanie']
names.forEach(names => console.log(names))

const names1 = [32,543,43,43,22]
names1.forEach(x => console.log(x + 2))

//.reduce()
const scores =[1,2,3,4,5]
printScores = scores.reduce((acuumulator,currentValue) => acuumulator + currentValue);
console.log(printScores + " Total scores inside Array");
//.split()
const sentence = 'Common baby light my fire'
const words = sentence.split(' ');
console.log(words[0] + " = first element of array words[0]");

const sentence1 = 'I will have what she is having'
const letter = sentence.split(' ')
console.log(letter)

//.map()
// creates a NEW Array
//const value2 = values.map(value => value)
const ages2018 = [21,45,56,32,45,2]
const ages2021 = ages2018.map(age => age + 3)
console.log(ages2021)

const houseMates2018 = [
    {name: 'Ahmed',age: 24},
    {name: 'Ellen',age: 35},
    {name: 'Woody',age: 30}
];
const houseMates2021 = houseMates2018.map(x => x.age + 2)
console.log(houseMates2021)


/*
if statement 
Flizz Buzz
Start with the number 1, and count upwards.
If any number is divisible by three, it is replace by the word
fizz and any number divisible by five by the word buzz.
Numbers divisible by 15 become fizz buzz.
 */

for(let i = 1; i <= 10; i++){
    if(i % 15 === 0){
        console.log('Flizz');
    }
    else if(i % 5 === 0){
        console.log('Buzz');
     }
    else if(i % 3 === 0){
        console.log('Fizz Buzz');
     } 
}



    







