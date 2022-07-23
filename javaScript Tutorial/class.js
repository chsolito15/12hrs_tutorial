// Classes
// Class Declaration

class Rectangle{
    constructor(height, width){
        this.height = height
        this.width = width
    }
}

const  newRectangle = new Rectangle(300, 100);
console.log(newRectangle.width);

class Ghost{
    constructor(name, speed, color, startPoint){
        this.name = name;
        this.speed = speed;
        this.color = color;
        this.startPoint = startPoint;
    }
}

const blinky = new Ghost('Blinky', 300,'red', 4);
const inky = new Ghost('inky', 250,'blue', 4);
const pinky = new Ghost('pinky', 350,'pink', 4);
const cylde = new Ghost('cylde', 450,'orange', 4);

console.log(cylde.startPoint)


//keys
 /*const circle00 = document.querySelector('.circle11');

let xAxis = 0;
let yAxis = 0;
     control = (e) =>{
       
    if(e.key === 'ArrowLeft'){
        console.log('pressed left')
    }else if(e.key === 'ArrowRight'){
        console.log('pressed right')
    }else if(e.key === 'ArrowUp'){
        console.log('pressed up')
    }else if(e.key === 'ArrowDown'){
        console.log('arrow press down')
    } 
    switch(e.key){
        case 'ArrowLeft':
        console.log('pressed left');
        xAxis -= 50;
        console.log(xAxis);
        circle00.style.left = xAxis + 'px';
        break;
        case 'ArrowRight':
        console.log('pressed right');
        xAxis += 50;
        console.log(xAxis);
        circle00.style.left = xAxis + 'px';
        break;
        case 'ArrowUp':
        console.log('pressed up');
        yAxis -= 50;
        console.log(yAxis);
        circle00.style.top = yAxis + 'px';
        break;
        case 'ArrowDown':
        console.log('pressed down');
        yAxis += 50;
        console.log(yAxis);
        circle00.style.top = yAxis + 'px';
        break;

        default:
            console.log('key not recognized')    
    }
 }
document.addEventListener('keydown', control)
*/

// click keyboard UP and Down arrow
const face = document.querySelector('.circleFace');
const mouth = document.querySelector('#mouth');

function controlCircle(e){

    switch(e.key){
        case 'ArrowUp':
            console.log('pressed up');
            mouth.classList.remove('sad-mouth');
            mouth.classList.add('happy-mouth');
        break;
        case 'ArrowDown':
            console.log('pressed down');
            mouth.classList.remove('happy-mouth');
            mouth.classList.add('sad-mouth');          
        break;
        default:
            console.log('key not recognized');        
    }
}

document.addEventListener('keydown', controlCircle)

// .sort()
const planets = ['Mars', 'Jupiter','Uranius','Earth']
console.log(planets.sort())

const ages = [32,45,21,13,78,64]
console.log(ages.sort())

// .includes()
const books = ['Cowboy','Alf','Life of Pi','Power of Now'];
const isInBook = books.includes('Sapiens')
console.log(isInBook)

// .contains()
// check if contains a childnode

const body = document.querySelector('body');
const circle01 = document.querySelector('.circleFace');
console.log(body.contains(circle01));

//.createElement()

const square = document.querySelector('div');
const body00 = document.querySelector('body');
const image = document.createElement('img');
console.log(square);
body.appendChild(image);
image.setAttribute('src', 'images/solito.jpg');
image.setAttribute('data-id', 4)

// .getAttribute()

const imagePath = image.getAttribute('src');
const imageId = image.getAttribute('data-id');
console.log(imagePath)
console.log(imageId)
console.log(body00)


