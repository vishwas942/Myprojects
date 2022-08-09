const progress = document.getElementById('id');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');


var currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circle.length){
        currentActive = circle.length;
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    
    update();
})


function update(){
    // update the active class in circle
    circle.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    // update the progress bar
    var activeCircles = document.querySelectorAll('.active');

    // Alternative -
    
    // if(activeCircles.length / circle.length == 0.5){
    //     progress.style.width = 33 + '%';
    // }
    // else if(activeCircles.length / circle.length == 0.75){
    //     progress.style.width = 66 + '%';
    // }
    // else if(activeCircles.length / circle.length == 1){
    //     progress.style.width = 100 + '%';
    // }

    progress.style.width = (activeCircles.length - 1) / (circle.length -1 ) * 100 + '%';
   


    // change the button state
    if(currentActive === 1){
        prev.disabled = true;
    }
    else if(currentActive === circle.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}