document.addEventListener('DOMContentLoaded',() =>{

    //console.log('testing')

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


    const move= document.querySelector('.circle');

    let height = 0;

    moveCircle = () =>{

        height += 50;
        move.style.top = height + 'px'
        if(height > 300){
            move.removeEventListener('click', moveCircle)
        }
    }

    move.addEventListener('click' , moveCircle)

  /*  let i = 0;
   while(i < 5){
    i++;
    console.log("Counting " + i)
   
   } */
   
})