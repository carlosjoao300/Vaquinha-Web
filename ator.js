//Codigo do Ator
let xAtor = 100;
let yAtor = 590;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 40,40);
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