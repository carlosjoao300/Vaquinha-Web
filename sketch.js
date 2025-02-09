var tela = 1;
var x = 600;
var y = 500;
var l = 220;
var h = 30;


function setup() {
  createCanvas(1349,640);
 
  
}

function draw() {
  if (tela == 1){
    tela1();
    }
    if (tela == 2) {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoincialDoCarro()
  verificaColisao()
  incluiPontos();
  mostraPonto();
   }
    if (tela ==3){
      telaFinal();
   }
}




