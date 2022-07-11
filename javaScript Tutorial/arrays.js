const farenheit = [23,140,212,41];
let celciusArr;

getCelcius = () =>{
    return farenheit.map(x => (x - 32) * 5/9)
}
getCelcius();
console.log(celciusArr);
///////
const array = [11, NaN, [], 'Angels']

checkForFalsey = () =>{
   return array.some((item) => !item)
}
console.log(checkForFalsey())
//////
const words1 = ['Rabbit','Football','Cracking'];

getTotal = () => {
   return words1.reduce((total, word) => total + word.length, 1)
}
console.log(getTotal());
//////
const numbers = [9,16,81]
checkSquares = () =>{
  return  numbers.every((number) => Math.sqrt(number) % 1 ===0)
}

console.log(checkSquares());

const wordArr = ['Florida', 'Dog','Phone']
const num =5;
getWords = () =>{
    return wordArr.filter(x => x.length > 3)
}
console.log(getWords());



getWords1 = (arr, n) =>{
    return arr.filter(x => x.length >= n)
}
console.log(getWords1(['Florida','Dog','Phone'],5));
console.log(getWords1(['Pen','Astronaut','Puppy'],7));

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

//const saying = 'In West Philadelphia, born and raised'

const vowel = ['a','e','i','o','u','A','E','I','O','U']
getVowelCount = (sentences) =>{
    return sentences.split('').filter(letters => vowel.includes(letters)); //length
}
console.log(getVowelCount('I am a Dog'));
console.log(getVowelCount('I am a Christopher Solito'));


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


