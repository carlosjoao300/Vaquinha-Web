function setup() {
  createCanvas(1349,640);
  somDaTrilha.loop(0,1,0.1);
  
}

function draw() {
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




