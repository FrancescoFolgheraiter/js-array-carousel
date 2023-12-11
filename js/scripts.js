/*
CONSEGNA
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente 
servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe 
specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, 
ma costruito dinamicamente attraverso JavaScript.

SVOLGIMENTO:
1)creo un array che contenga le immagini(le stringhe con il percorso)
2)creo un ciclo di lettura dell'array 
    -dopo il primo ciclo di lettura array imposta le altri immagini con la classe d-none
*/

//input dati
const containerImg = document.querySelector(".container-img")
//array di immagini
const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"]

//ciclo di lettura array
for (let i = 0; i < images.length; i++) {
    if (i>0){
        containerImg.innerHTML +=`<img src=${images[i]} class="position-absolute d-none">`      
    }
    else{
        containerImg.innerHTML +=`<img src=${images[i]} class="position-absolute">`
    }
}