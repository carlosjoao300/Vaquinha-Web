function mouseClicked(){
    if (mouseX>= x && mouseX<=(x+l) && mouseY>=y && mouseY<=(y+h)){
        somDoGame.loop(0,1,0.1);
        tela=2;
    }
}