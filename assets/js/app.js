let slideIndex = 0;
showSlides();

function showSlides() {
    let slide = document.querySelectorAll('.myslides');
    // faire une boucle
    for (let i = 0; i < slide.length; i++) {
        // mettre en display none
        slide[i].style.display = "none";
    }
    // ajouter une image
    slideIndex++;
    // quand le tableau est fini ca repart au debut grace au 1
    if (slideIndex > slide.length) {
        slideIndex = 1
    }
    // pour chaque image qu'on veut visible mettre en block
    slide[slideIndex - 1].style.display = "block";

    // Change l'image toutes les 2secondes
    setTimeout(showSlides, 2000);
}
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