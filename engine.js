// SIMPLE MAGIC PARTICLE SYSTEM

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
dx:(Math.random()-0.5)*0.5,
dy:(Math.random()-0.5)*0.5
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let p of particles){

p.x += p.dx;
p.y += p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

ctx.beginPath();
ctx.fillStyle="rgba(255,204,102,0.6)";
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
}

requestAnimationFrame(animate);
}

animate();
