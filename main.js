let imgActive;
let slideNext;

// Creazione array con immagine delle slide
let slide = document.getElementsByClassName('slide');
let slideLateral = document.getElementsByClassName('slide-lateral');


// inserisco bottone per passare alla prossima slide
document.getElementById('next').addEventListener('click', function () {


    // Inizio ciclo for per controllare le immagini
    for (let i = 0; i < slide.length; i++) {

        const slideControl = slide[i]
        const slideL = slideLateral[i]

        // controllo slide se hanno la classe active
        if (slideControl.classList.contains('active')) {
            // se contine ACTIVE lo rimuovo
            slideControl.classList.remove('active')
            slideL.classList.remove('active', 'border-lateral')


            // segno quale array ha la classe ACTIVE
            imgActive = i;

        }
    }

    // seleziono la prossima slide da attivare
    slideNext = imgActive + 1;

    // se mi trovo all'ulitma slide torno alla prima
    if (slideNext == slide.length) {
        slideNext = 0;
    }

    slide[slideNext].classList.add('active')
    slideLateral[slideNext].classList.add('active', 'border-lateral')


})

// inserisco bottone per passare alla slide precedente

document.getElementById('back').addEventListener('click', function () {


    // Inizio ciclo for per controllare le immagini
    for (let i = 0; i < slide.length; i++) {

        const slideControl = slide[i]
        const slideL = slideLateral[i]


        // controllo slide se hanno la classe active
        if (slideControl.classList.contains('active')) {
            // se contine ACTIVE lo rimuovo
            slideControl.classList.remove('active')
            slideL.classList.remove('active', 'border-lateral')


            // segno quale array ha la classe ACTIVE
            imgActive = i;

        }
    }

    // seleziono la prossima slide da attivare
    slideNext = imgActive - 1;
    console.log(slideNext)

    // se mi trovo all'ulitma slide torno alla prima
    if (slideNext == -1) {
        slideNext = slide.length - 1;
    }

    slide[slideNext].classList.add('active')
    slideLateral[slideNext].classList.add('active', 'border-lateral')

})

