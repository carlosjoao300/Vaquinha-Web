//Codigo do Ator
let xAtor = 256;
let yAtor = 590;
let colisao = false
let meusPontos = 5;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 40,40);
    print (xAtor);
    
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -=3;
    }
  
    if (keyIsDown(DOWN_ARROW)){
      if (podeDescer()){
      yAtor +=3;
      }
    }
    //if (keyIsDown(RIGHT_ARROW)){
      //if (podeIrFrente()){
      //xAtor +=3;}
    //}
   // if (keyIsDown(LEFT_ARROW)){
     // if (podeIrTras()){
     // xAtor -=3;}
    //}
  }

  function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i = i +1 ){
      colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,25)
      if (colisao){
        voltaPosicaoincialDoAtor();
        somDaColisao.play()
        if (pontosMaiorQueZero()){
        meusPontos -=1;
        }
      }

    }

  }

  function voltaPosicaoincialDoAtor(){
    yAtor = 590;
  }

  function incluiPontos(){
    textSize(35);
    fill(color(0,0,128));
    text(meusPontos, width / 5, 40);
  }

  function mostraPonto(){
    if (yAtor < 23){
      meusPontos +=1;
      somDoPonto.play();
      voltaPosicaoincialDoAtor();
  } if (meusPontos == 6){
      tela = 3;
      somDoFinal.play(0,1,0.1);
  }

}

  function pontosMaiorQueZero(){
    return meusPontos > 0;
  }
  function podeDescer() {
    return yAtor < 590;
  }
  function podeIrFrente(){
    return xAtor < 1309; 
  }

  function podeIrTras(){
    return xAtor > 0;
  }

