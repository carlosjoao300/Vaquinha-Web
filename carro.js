//código do carro

let xCarros = [1280,1280,1280];
let yCarros = [80,160,250];
let velocidadeCarros = [4,9,7];


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1 ){  
  image(imagemCarros[i], xCarros[i],yCarros[i],60,50);

  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i +1 ) {  
  xCarros[i] -= velocidadeCarros[i];
 
  }
  
}



function voltaPosicaoincialDoCarro(){
    for ( let i = 0; i < imagemCarros.length; i = i +1 ) {
   if (passouTodaATela(xCarros[i])){
       xCarros[i] = 1280
   }
   
}
}

function passouTodaATela(xCarro){
    return xCarro < -50;
}
