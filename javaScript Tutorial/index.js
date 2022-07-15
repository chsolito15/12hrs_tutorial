const bob = document.querySelector('.face');
let count = 0;
function moveBob(){
 count += 50;
 bob.style.left = count + 'px'
 
}
bob.addEventListener('click', moveBob);

const display = document.querySelector('.display')
const movies = ['terminator','cowbow','musical','sparta']
display.innerHTML = movies;

moviesPop = () =>{
    movies.pop();
    display.innerHTML = movies;
}
display.addEventListener('click', moviesPop)

const display1 = document.querySelector('.display1');
const artist = ['Shakira', 'Snoop', 'Sia', 'Beyonce', 'Swift'];
userSlice = artist.splice(3,1); 
display1.innerHTML = userSlice;

const circles = document.querySelectorAll('.circle');

changeColor = () =>{
       circles.forEach(x => {       
        x.style.backgroundColor = 'red';
       
    });
}
const getID = document.getElementById("reColor");
getID.addEventListener('click', changeColor)

const canIVote =[
    {   name: 'Vladimir Kukov',
        age: 18
    }, 

    {   name: 'Juan Dela cruz',
        age: 12
    },

    {   name: 'Angel Locsin',
         age: 19
    },

    {   name: 'Bernard Teodoro',
         age: 59
    },

    {   name: 'Christopher Solito',
        age: 30
    }
];

const whoCanVote = canIVote.map(x => `${x.age >= 18}`)
console.log(whoCanVote);

const shows = [
    {
        name:'Lupin',
        series: 1,
        episode: 25
    },
    {
        name:'Naruto',
        series: 5,
        episode: 800
    },
    {
        name:'Bleach',
        series: 8,
        episode: 500
    },
    {
        name:'Dragon ball',
        series: 1,
        episode: 900
    },
    {
        name:'Cowboy bebop',
        series: 1,
        episode: 30
    }
];

showDisplay = shows.filter(x => x.episode >= 50)
console.log(showDisplay);

const scores =[1,2,3,4,5]

printScores = scores.reduce((a,b) => a + b);
console.log(printScores);

const sentence = 'Common baby light my fire'
const words = sentence.split(' ');
console.log(words[2]);






