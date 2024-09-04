//ANOTAÇÃO
let botaoesq = document.getElementById("Btesc");
let botaodirt = document.getElementById("Btdirt");
let personagem = document.getElementById("mario");
let posx = 30, posy = 550;

function moverDir(){
    //Codigo do botão de mover o personagem para a direita.
    posx = posx + 10; //Incrementa a posição do personagem.
    personagem.style.left = posx + "px"; //exemplo: se posx for 20 left 40px

}

function moverEsq(){
        //Codigo do botão de mover o personagem para a esquerda.
    posx = posx - 10; //Incrementa a posição do personagem.
    personagem.style.left = posx + "px"; //exemplo: se posx for 20 left 40px
    
    
}
botaoesq.onclick = moverEsq;
botaodirt.onclick = moverDir;