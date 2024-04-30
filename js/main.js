// CONSEGNA
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata 10x10 (con 100 celle).
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// MILESTONE #2
// Commentate l'HTML e iniettatelo tramite un ciclo in JS, senza pensare al click o alle funzioni.

// // seleziono il div grid che conterrà le colonne
// let grid = document.getElementById(`grid`);
// // ciclo for
// for (let i = 1; i <= 100; i++) {
// 	// ad ogni ciclo creo un elemento e lo inserisco nel div grid e gli aggiungo la classe .col
// 	let elementoDiv = document.createElement(`div`);
// 	// inserisco del testo dentro al div creato
// 	elementoDiv.innerText = `${i}`;
// 	// inserisco il div creato in grid
// 	grid.append(elementoDiv);
// 	// aggiungo la classe
// 	elementoDiv.classList.add(`col`);
// }

// MILESTONE #3
// Aggiungete la gestione dell'evento di click, che stampi il numero e cambi il colore della cella.

// // seleziono il div grid che conterrà le colonne
// let grid = document.getElementById(`grid`);
// // ciclo for
// for (let i = 1; i <= 100; i++) {
// 	// ad ogni ciclo creo un elemento e lo inserisco nel div grid e gli aggiungo la classe .col
// 	let elementoDiv = document.createElement(`div`);
// 	// inserisco del testo dentro al div creato
// 	elementoDiv.innerText = `${i}`;
// 	// inserisco il div creato in grid
// 	grid.append(elementoDiv);
// 	// aggiungo la classe
// 	elementoDiv.classList.add(`col`);
// 	// aggiungo evento di click
// 	elementoDiv.addEventListener(`click`, function () {
// 		// aggiungo o rimuovo classe per colore di sfondo colonna
// 		elementoDiv.classList.toggle(`bg`);
// 		console.log(`Hai cliccato sulla casella numero: ${i}`);
// 	});
// }

// MILESTONE #4
// Spostate alcuni elementi in funzioni, ad esempio la creazione del quadrato e/o l'event listener.

// seleziono il div grid che conterrà le colonne
let grid = document.getElementById(`grid`);
let div = `div`;
let classeCol = `col`;
let classeColore = `bg`;
// ciclo for
for (let i = 1; i <= 100; i++) {
	// ad ogni click viene richiamata funzione che crea una colonna con numero e la colora
	let elementoDiv = creaColonna(i, grid, div, classeCol, classeColore);
}
// funzione per creare colonna dentro ad un div e ne scrive il numero dentro ad un ciclo ed al click viene colorata o tolto il colore//
function creaColonna(numero, griglia, element, classe1, classe2) {
	let elementoDiv = document.createElement(element);
	elementoDiv.innerText = `${numero}`;
	griglia.append(elementoDiv);
	elementoDiv.classList.add(classe1);
	// aggiungo evento di click
	elementoDiv.addEventListener(`click`, function () {
		// aggiungo o rimuovo classe per colore di sfondo colonna
		elementoDiv.classList.toggle(classe2);
		console.log(`Hai cliccato sulla casella numero: ${numero}`);
	});
	return elementoDiv;
}
