let imgActive;
let slideNext;

// Creazione array con immagine delle slide
let slide = document.getElementsByClassName('slide');
console.log(slide)

// Inizio ciclo for per controllare le immagini
for (let i = 0; i < slide.length; i++) {

    const slideControl = slide[i]
    console.log(slideControl)

    // controllo slide se hanno la classe active
    if (slideControl.classList.contains('active')) {
        // se contine ACTIVE lo rimuovo
        slideControl.classList.remove('active')

        // segno quale array ha la classe ACTIVE
        imgActive = i;

    }
}

// seleziono la prossima slide da attivare
slideNext = imgActive + 1;

if (slideNext == slide.length) {
    slideNext = 0;
}

slide[slideNext].classList.add('active')


