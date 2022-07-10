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

delArr = () =>{
    movies.pop();
    display.innerHTML = movies;
}

display.addEventListener('click', delArr)

const display1 = document.querySelector('display1');

const artist = ['Shakira', 'Snoop', 'Sia', 'Beyonce'];

