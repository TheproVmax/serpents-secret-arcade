window.addEventListener("load", () => {

/* PARTICLES */
const canvas = document.getElementById("particles");
if(canvas){
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let p = [];

for(let i=0;i<60;i++){
p.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.2,
dy:(Math.random()-0.5)*0.2
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i of p){
i.x += i.dx;
i.y += i.dy;

ctx.fillStyle="rgba(0,0,0,0.08)";
ctx.beginPath();
ctx.arc(i.x,i.y,i.r,0,Math.PI*2);
ctx.fill();
}

requestAnimationFrame(draw);
}

draw();
}

/* FOG SYSTEM */
const fogCanvas = document.getElementById("fog");
if(fogCanvas){
const f = fogCanvas.getContext("2d");
fogCanvas.width = window.innerWidth;
fogCanvas.height = window.innerHeight;

let t = 0;

function fog(){
f.clearRect(0,0,fogCanvas.width,fogCanvas.height);

for(let i=0;i<6;i++){
f.fillStyle="rgba(200,200,200,0.05)";
f.beginPath();

f.arc(
Math.sin(t/50 + i)*200 + fogCanvas.width/2,
Math.cos(t/60 + i)*100 + fogCanvas.height/2,
200,
0,
Math.PI*2
);

f.fill();
}

t++;
requestAnimationFrame(fog);
}

fog();
}

});
