
// Carousel automatique du header
let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let slide2 = document.querySelectorAll('.myslides2');
    // faire une boucle
    for (let i = 0; i < slide2.length; i++) {
        // mettre en display none
        slide2[i].style.display = "none";
    }
    // ajouter une image
    slideIndex2++;
    // quand le tableau est fini ca repart au debut grace au 1
    if (slideIndex2 > slide2.length) {
        slideIndex2 = 1
    }
    // pour chaque image qu'on veut visible mettre en block
    slide2[slideIndex2 - 1].style.display = "block";

    // Change l'image toutes les 2secondes
    setTimeout(showSlides2, 2000);
}

// carousel1 manuel du main

var slide = new Array('assets/img/img1.jpg', 'assets/img/img2.jpg', 'assets/img/img3.jpg', 'assets/img/img4.jpg');
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
   
}
// carouse2 manuel du main
var slide2 = new Array('assets/img/immg1.jpg', 'assets/img/immg2.jpg', 'assets/img/immg3.jpg', 'assets/img/immg4.jpg');
var numero1 = 0;

function ChangeSlide2(sens) {
    numero1 = numero1 + sens;
    if (numero1 < 0)
        numero1 = slide2.length - 1;
    if (numero1 > slide2.length - 1)
        numero1 = 0;
    document.getElementById("slide2").src = slide2[numero1];
   
}
// carousel3 manuel du main
var slide3 = new Array('assets/img/iimmg1.jpg', 'assets/img/iimmg2.jpg', 'assets/img/iimmg3.jpg', 'assets/img/immgg2.jpg');
var numero1 = 0;

function ChangeSlide3(sens) {
    numero1 = numero1 + sens;
    if (numero1 < 0)
        numero1 = slide3.length - 1;
    if (numero1 > slide3.length - 1)
        numero1 = 0;
    document.getElementById("slide3").src = slide3[numero1];
   
}
// carousel4
var slide4 = new Array('assets/img/immgg1.jpg', 'assets/img/iimmg4.jpg', 'assets/img/immgg3.jpg', 'assets/img/immgg4.jpg');
var numero1 = 0;

function ChangeSlide4(sens) {
    numero1 = numero1 + sens;
    if (numero1 < 0)
        numero1 = slide4.length - 1;
    if (numero1 > slide4.length - 1)
        numero1 = 0;
    document.getElementById("slide4").src = slide4[numero1];
   
}
// carousel5
var slide5 = new Array('assets/img/iiimmg1.jpg', 'assets/img/iiimmg2.jpg', 'assets/img/iiimmg3.jpg', 'assets/img/iiimmg4.jpg');
var numero1 = 0;

function ChangeSlide5(sens) {
    numero1 = numero1 + sens;
    if (numero1 < 0)
        numero1 = slide5.length - 1;
    if (numero1 > slide5.length - 1)
        numero1 = 0;
    document.getElementById("slide5").src = slide5[numero1];
   
}
var slide6 = new Array('assets/img/immg1.jpg', 'assets/img/immg2.jpg', 'assets/img/immg3.jpg', 'assets/img/immg4.jpg');
var numero1 = 0;

function ChangeSlide6(sens) {
    numero1 = numero1 + sens;
    if (numero1 < 0)
        numero1 = slide6.length - 1;
    if (numero1 > slide6.length - 1)
        numero1 = 0;
    document.getElementById("slide6").src = slide6[numero1];
   
}
var slide7 = new Array('assets/img/immg1.jpg', 'assets/img/immg2.jpg', 'assets/img/immg3.jpg', 'assets/img/immg4.jpg');
var numero1 = 0;

function ChangeSlide7(sens) {
    numero1 = numero1 + sens;
    if (numero1 < 0)
        numero1 = slide7.length - 1;
    if (numero1 > slide7.length - 1)
        numero1 = 0;
    document.getElementById("slide7").src = slide7[numero1];
   
}
var slide8 = new Array('assets/img/immg1.jpg', 'assets/img/immg2.jpg', 'assets/img/immg3.jpg', 'assets/img/immg4.jpg');
var numero1 = 0;

function ChangeSlide8(sens) {
    numero1 = numero1 + sens;
    if (numero1 < 0)
        numero1 = slide8.length - 1;
    if (numero1 > slide8.length - 1)
        numero1 = 0;
    document.getElementById("slide8").src = slide8[numero1];
   
}