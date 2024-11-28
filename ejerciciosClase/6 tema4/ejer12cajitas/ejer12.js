const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const caja4 = document.getElementById("caja4");

const desplazar = document.getElementById("desplazar");
const volver = document.getElementById("volver");
const megacaja = document.getElementById("megacaja");

function paderecha() {

    caja2.style.order = 1;
    caja1.style.order = 2;
    caja3.style.order = 4;
    caja4.style.order = 3;
    caja1.style.transform = "translateX(100vw)";
    caja2.style.transform = "translateX(100vw)";
    caja3.style.transform = "translateX(100vw)";
    caja4.style.transform = "translateX(100vw)";
    let bebes = megacaja.children;

    for (let i = 0; i < bebes.length; i++) {
        bebes[i].style.transition = "transform 4s";
        bebes[i].style.transform = "translateX(650px)";
        bebes[i].addEventListener("mouseover", () => {
            bebes[i].style.transition = "transform 4s";
            bebes[i].style.transform = "translateX(650px) rotate(270deg)";

        });
        bebes[i].addEventListener("mouseout", () => {
            bebes[i].style.transform = "translateX(650px)";

        });
    }


}

desplazar.addEventListener("click",paderecha);


function paizquierda() {
    megacaja.style.display = "flex";
    megacaja.style.alignItems = "flex-start"
    let bebes = megacaja.children;

    for (let i = 0; i < bebes.length; i++) {
        bebes[i].style.transition = "transform 4s";
        bebes[i].style.transform = "translateX(0px) rotate(0deg)";
        bebes[i].addEventListener("mouseover", () => {
            bebes[i].style.transition = "transform 4s";
            bebes[i].style.transform = "translateX(0px) rotate(270deg)";

        });
        bebes[i].addEventListener("mouseout", () => {
            bebes[i].style.transform = " translateX(0px) rotate(0deg)";

        });



    }

    caja2.style.order = 2;
    caja1.style.order = 1;
    caja3.style.order = 3;
    caja4.style.order = 4;
}

volver.addEventListener("click",paizquierda);