/*
MINLESTONE 2
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

MILESTONE 3
CONSEGNA
Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva,
 che quindi verrà visualizzata al posto della precedente.

svolgimento
1) creo in struttura due elemnti (pulsanti) freccia su e giù
2)al click della freccia su
- rimuovo la classe active dall'elemento visualizzato
-aggiungo la classe active all'elemento successivo
3)al click della freccia già
- rimuovo la classe active dall'elemento visualizzato
-aggiungo la classe active all'elemento precedente


*/

//input dati
const containerImg = document.querySelector(".container-img");
const pulsanteUp = document.querySelector("#up");
console.log("cosa contien pulsante up", pulsanteUp , typeof pulsanteUp);
const pulsanteDown = document.querySelector("#down");
console.log("cosa contien pulsante down", pulsanteDown , typeof pulsanteDown);
//array di immagini
const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];

//ciclo di lettura array
for (let i = 0; i < images.length; i++) {
    if (i == 0){
        containerImg.innerHTML += `
            <div class="item active">
                <img src="${images[i]}" alt="">
            </div>
        `;    
    }
    else{
        containerImg.innerHTML += `
        <div class="item">
            <img src="${images[i]}" alt="">
        </div>
    `;
    }
}

let n = 0;
const items = document.querySelectorAll(".item")
console.log("gli item sono", items.length, typeof items)

pulsanteUp.addEventListener("click", function () {
if(n < (items.length -1)){
    items[n].classList.remove("active")
    n++;
    items[n].classList.add("active")
}
else if(n == items.length-1){
    items[n].classList.remove("active")
    n = 0;
    items[n].classList.add("active")
}
})

pulsanteDown.addEventListener("click", function () {
    if(n > 0){
        items[n].classList.remove("active")
        n--;
        items[n].classList.add("active")
    }
    else if(n == 0){
        items[n].classList.remove("active")
        n = items.length - 1;
        items[n].classList.add("active")
    }
    })
    
