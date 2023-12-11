const canvas = document.getElementById('LienzoUno');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
   
});

const mouse = {
    x: null,
    y: null,
};

let isMouseDown = false;
let prevX, prevY;
window.addEventListener('mousedown', function(event){
    isMouseDown = true;
    prevX = event.x;
    prevY = event.y;
});

window.addEventListener('mouseup', function(event){
 isMouseDown = false;
});

// canvas.addEventListener('click', function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;

//     drawCircle();
// });

// function drawCircle(){
//     ctx.fillStyle = 'white';
//     ctx.beginPath();
//     ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI*2);
//     ctx.fill();
// }

window.addEventListener('mousemove', function(event){
    if(isMouseDown){
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(event.x, event.y);

        ctx.lineWidth = 5;
        ctx.strokeStyle = 'white';
        ctx.stroke();
        prevX = event.x;
        prevY = event.y;
    }
});
