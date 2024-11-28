const desplazar = document.getElementById("desplazar");
const volver = document.getElementById("volver");
const megacaja = document.getElementById("megacaja");

const caja = document.getElementsByClassName("caja");
const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const caja4 = document.getElementById("caja4");

let boleano=true;

function losNiñosNOGiran(){

    this.style.transition = "transform 4s, height 4s, width 4s, background-color 4s, color 4s, font-size 4s";

    this.style.position = "relative"; 
    this.style.height = "150px"; 
    this.style.width = "150px";   

    this.style.backgroundColor = "red"; 
    this.style.color = "black";      

    this.style.fontSize = "x-large"; 

    this.style.transform = "rotate(0deg)";
    if( boleano===false){
        let hijos = megacaja.children;  
    
        for (let i = 0; i < hijos.length; i++) {
            hijos[i].style.transform = "translateX(800px)";  
        }
    
    }

}

function losNiñosGiran() {

    
    this.style.transition = "transform 4s, height 4s, width 4s, background-color 4s, color 4s, font-size 4s";

    this.style.position = "relative";  
    this.style.height = "75px"; 
    this.style.width = "75px";   

    this.style.backgroundColor = "blue"; 
    this.style.color = "yellow";      

    this.style.fontSize = "larger"; 
    if(boleano===true){
    this.style.transform = "rotate(270deg)";}
    if(boleano===false){
        let hijos = megacaja.children;  
    
        for (let i = 0; i < hijos.length; i++) {

            hijos[i].style.transform = "translateX(800px)";  

        }
        
    
    }
}


for (let i = 0; i < caja.length; i++) {
    caja[i].addEventListener("mouseover", losNiñosGiran);
}


for (let i = 0; i < caja.length; i++) {
    caja[i].addEventListener("mouseleave", losNiñosNOGiran);
}

function paderecha(){
     megacaja.style.display = "flex";

    boleano=false;
    let hijos = megacaja.children;  
    
    for (let i = 0; i < hijos.length; i++) {
        hijos[i].style.transition = "transform 4s";  
        hijos[i].style.transform = "translateX(800px)";  
    }
    moverNiños();

    
}

function moverNiños(){
    caja2.style.order= 1;
    caja1.style.order= 2;
    caja4.style.order= 3;
    caja3.style.order= 4;
}

desplazar.addEventListener("click",paderecha);

function paizquierda(){
    boleano=true;
    megacaja.style.display = "flex";  
    let hijos = megacaja.children;  
    
    for (let i = 0; i < hijos.length; i++) {
        hijos[i].style.transition = "transform 4s";  
        hijos[i].style.transform = "translateX(0px)";  
    }

    removerNiños();

    
for (let i = 0; i < caja.length; i++) {
    caja[i].addEventListener("mouseover", losNiñosGiran);
}


for (let i = 0; i < caja.length; i++) {
    caja[i].addEventListener("mouseleave", losNiñosNOGiran);
}
}

function removerNiños(){
    caja1.style.order= 1;
    caja2.style.order= 2;
    caja3.style.order= 3;
    caja4.style.order= 4;
}

volver.addEventListener("click",paizquierda);



