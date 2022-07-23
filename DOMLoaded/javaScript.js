document.addEventListener('DOMContentLoaded',() =>{

    const bdy = document.querySelector('body');

    bdy.addEventListener('click', function(){
        console.log("Click me!!!")})
     
    const circle = document.querySelector('.circle');
    let count = 0;
    toggleColor = () => {
        circle.classList.toggle('red-circle')
        count++
        console.log(count);
        if(count > 5){
            circle.removeEventListener('click', toggleColor);
        }
    }   
    circle.addEventListener('click', toggleColor)
// remove EventListener

    const move= document.querySelector('.circle2');

    let height = 0;
    moveCircle = () =>{
        height += 50;
        move.style.top = height + 'px'
        if(height > 300){ 
            move.removeEventListener('click', moveCircle)
        }
    }
    move.addEventListener('click' , moveCircle)

    // Date
    const dateDisplay = document.querySelector('.date');

    const today = new Date();
    const date = today.getDate();
    const day = today.getDay();
    const fullYear = today.getFullYear();
    const hours = today.getHours()
    const isoString = today.toISOString();
    console.log(isoString);

    const christMas = new Date('2022-07-22T13:25:05.674Z')
    const milisecondsToXmas = christMas - today;
    const minutes = milisecondsToXmas / 60000;
    dateDisplay.textContent = Math.round(minutes)
    console.log(minutes);

    // setTimeout()
    // setTimeout(function, miliseconds)
    const speechBubble = document.querySelector('.bubble');

    const time = 3000;
    function showText(){
        speechBubble.innerHTML = 'Hey dude!'
    }

    setTimeout(showText, time)
    
    function deleteText(){
        /* speechBubble.innerHTML = '' */
        speechBubble.style.display = 'none'
    }
    setTimeout(deleteText, 5000);

    // setInterval()
    const bubble1 = document.querySelector('.bubble1')
    const text = 'Alert'
    const time1 = 2000;
    
    const timer = setInterval(showAlert =() => {
        const textDisplay = document.createElement('div');
        textDisplay.innerHTML = text
        bubble1.appendChild(textDisplay)
    }, time1);
    clearInterval(timer)
    ///////////
    const bubble2 = document.querySelector('.bubble2')
    let timer2 = 0;
    
    showAlert1 =() => {  
        timer2++
        const txtDisplay = document.createElement('div');
        txtDisplay.innerHTML = timer2
        bubble2.appendChild(txtDisplay)
        
        if(timer2 === 3){
            clearInterval(txx)              
        }
    }
    const txx = setInterval(showAlert1, 1000);
    //clearInterval()

let counts = 0;
function TimerStarter(){
    console.log(counts++)
    if(counts === 5){
        clearInterval(timeID) 
        console.log(counts)
    }
}
const timeID = setInterval(TimerStarter, 1000)

})