//Imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;
let imagemMenu;
let imagemFinal;

//sons do jogo.

let somDaTrilha;
let somDaColisao;
let somDoPonto;
let somDoGame;
let somDoFinal;


function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,imagemCarro, imagemCarro2, imagemCarro3];
  imagemMenu = loadImage("Imagens/imagemMenu.png");
  imagemFinal = loadImage("Imagens/imgFim.png");
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3"); 
  somDoPonto = loadSound("sons/pontos.wav");
  somDoGame = loadSound("sons/somDoGame.mp3");
  somDoFinal = loadSound("sons/somDoFinal.mp3")

}