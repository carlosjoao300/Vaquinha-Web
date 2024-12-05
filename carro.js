//código do carro

let xCarros = [1280,1280,1280,1280,1280,1280];
let yCarros = [80,160,250,340,425,520];
let velocidadeCarros = [10,9,7,5,7,4];
let comprimentoCarro = 60;
let alturaCarro = 50;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ){  
  image(imagemCarros[i], xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);

  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ) {  
  xCarros[i] -= velocidadeCarros[i];
 
  }
  
}



function voltaPosicaoincialDoCarro(){
    for ( let i = 0; i < imagemCarros.length; i++ ) {
   if (passouTodaATela(xCarros[i])){
       xCarros[i] = 1280
   }
   
}
}

function passouTodaATela(xCarro){
    return xCarro < -50;
}
