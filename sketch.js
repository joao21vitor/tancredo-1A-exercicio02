let cor;
let posicaoHorizontal;
let posicaoVertical;


function setup() {
 
 
  createCanvas(600,600);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255))
  posicaoHorizontal = 100;
  posicaoVertical = 300;

}

function draw() {
  stroke(cor);
  fill(cor)
  circle(posicaoHorizontal, posicaoVertical, 50);
 
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal -= 2
  }
 
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal += 2
}  
   
  if(mouseY < posicaoVertical) {
    posicaoVertical -= 2
     
}
   
  if(mouseY > posicaoVertical) {
     posicaoVertical += 2
}
  if(mouseIsPressed) {
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
 
  }
 
   
  }