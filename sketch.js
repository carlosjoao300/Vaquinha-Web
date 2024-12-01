let imagemDaEstrada;
let imagemDoAtor;
let ImagemCarro;

//carro
let xCarro = 1280;
let Ycarro = 80;

//ator

let xAtor = 100;
let yAtor = 590;


function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemDoAtor = loadImage("Imagens/ator-1.png")
  ImagemCarro = loadImage("Imagens/carro-1.png")
}

function setup() {
  createCanvas(1349,640);
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor,xAtor,yAtor, 40,40 );
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  
}

function mostraCarro(){
  image(ImagemCarro, xCarro,80,60,50)

}

function movimentaCarro(){
  xCarro -= 2;
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }

  if (keyIsDown(DOWN_ARROW)){
    yAtor +=3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor +=3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -=3;
  }
}


