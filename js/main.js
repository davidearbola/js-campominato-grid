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

// // seleziono il div grid che conterrà le colonne
// let grid = document.getElementById(`grid`);
// let div = `div`;
// let classeCol = `col`;
// let classeColore = `bg`;
// // ciclo for
// for (let i = 1; i <= 100; i++) {
// 	// ad ogni click viene richiamata funzione che crea una colonna con numero e la colora
// 	let elementoDiv = creaColonna(i, grid, div, classeCol, classeColore);
// }
// // funzione per creare colonna dentro ad un div e ne scrive il numero dentro ad un ciclo ed al click viene colorata o tolto il colore//
// function creaColonna(numero, griglia, element, classe1, classe2) {
// 	let elementoDiv = document.createElement(element);
// 	elementoDiv.innerText = `${numero}`;
// 	griglia.append(elementoDiv);
// 	elementoDiv.classList.add(classe1);
// 	// aggiungo evento di click
// 	elementoDiv.addEventListener(`click`, function () {
// 		// aggiungo o rimuovo classe per colore di sfondo colonna
// 		elementoDiv.classList.toggle(classe2);
// 		console.log(`Hai cliccato sulla casella numero: ${numero}`);
// 	});
// 	return elementoDiv;
// }

// BONUS #2: CAPIRE EVENTI E FUNZIONI
// Provate a eseguire quanto fatto fin qui NON al caricamento della pagina, ma al click su un pulsante "Avvia gioco".

// // seleziono il div grid che conterrà le colonne
// let grid = document.getElementById(`grid`);
// // creo variabili da usare come paramentri nella funzione
// let div = `div`;
// let classeCol = `col`;
// let classeColore = `bg`;

// // seleziono bottone
// let btnStart = document.getElementById(`start`);
// // aggiungo eventlistener
// btnStart.addEventListener(`click`, function () {
// 	// ciclo for
// 	for (let i = 1; i <= 100; i++) {
// 		// ad ogni click viene richiamata funzione che crea una colonna con numero e la colora
// 		let elementoDiv = creaColonna(i, grid, div, classeCol, classeColore);
// 	}
// });

// // funzione per creare colonna dentro ad un div e ne scrive il numero dentro ad un ciclo ed al click viene colorata o tolto il colore//
// function creaColonna(numero, griglia, element, classe1, classe2) {
// 	let elementoDiv = document.createElement(element);
// 	elementoDiv.innerText = `${numero}`;
// 	griglia.append(elementoDiv);
// 	elementoDiv.classList.add(classe1);
// 	// aggiungo evento di click
// 	elementoDiv.addEventListener(`click`, function () {
// 		// aggiungo o rimuovo classe per colore di sfondo colonna
// 		elementoDiv.classList.toggle(classe2);
// 		console.log(`Hai cliccato sulla casella numero: ${numero}`);
// 	});
// 	return elementoDiv;
// }

// BONUS #3: QUANDO IL GIOCO SI FA DURO
// Aggiungere una select accanto al bottone di start. La select presenterà tre difficoltà di gioco tra cui scegliere (easy, medium, hard).
// Quando generate la griglia userete un numero di celle che dipende dalla difficoltà.
// Easy: 100 celle (10x10)
// Medium: 81 celle (9x9)
// Hard: 49 (7x7)
// //***************************************************** */
// seleziono il div grid che conterrà le colonne
let grid = document.getElementById(`grid`);
// creo variabili da usare come paramentri nella funzione
let div = `div`;
let classeCol10 = `col-10`;
let classeCol9 = `col-9`;
let classeCol7 = `col-7`;
let classeColore = `bg`;

// seleziono bottone
let btnStart = document.getElementById(`start`);
// aggiungo eventlistener
btnStart.addEventListener(`click`, function () {
	// prendo il valore della select
	let valoreSelect = document.getElementById(`difficulty`).value;
	// if per controllare il valore delle select in base al valore farò dei cicli con parametri diversi
	if (valoreSelect == `easy`) {
		for (let i = 1; i <= 100; i++) {
			// aggiungo classe per width a grid
			grid.classList.add(`w-1000`);
			// ad ogni click viene richiamata funzione che crea una colonna con numero e la colora
			let elementoDiv = creaColonna(
				i,
				grid,
				div,
				classeCol10,
				classeColore
			);
		}
	} else if (valoreSelect == `medium`) {
		for (let i = 1; i <= 81; i++) {
			// aggiungo classe per width a grid
			grid.classList.add(`w-900`);
			// ad ogni click viene richiamata funzione che crea una colonna con numero e la colora
			let elementoDiv = creaColonna(
				i,
				grid,
				div,
				classeCol9,
				classeColore
			);
		}
	} else if (valoreSelect == `hard`) {
		for (let i = 1; i <= 49; i++) {
			// aggiungo classe per width a grid
			grid.classList.add(`w-700`);
			// ad ogni click viene richiamata funzione che crea una colonna con numero e la colora
			let elementoDiv = creaColonna(
				i,
				grid,
				div,
				classeCol7,
				classeColore
			);
		}
	}
});

// funzione per creare colonna dentro ad un div e ne scrive il numero dentro ad un ciclo ed al click viene colorata o tolto il colore//
function creaColonna(numero, griglia, element, classe1, classe2) {
	// creo elemento
	let elementoDiv = document.createElement(element);
	// scrivo numero dentro ad elemento
	elementoDiv.innerText = `${numero}`;
	// inserisco elemento dentro al div selezionato
	griglia.append(elementoDiv);
	// aggiungo classe che crea colonna
	elementoDiv.classList.add(classe1);
	// aggiungo evento di click
	elementoDiv.addEventListener(`click`, function () {
		// aggiungo o rimuovo classe per colore di sfondo colonna
		elementoDiv.classList.toggle(classe2);
		// stampo in console numero della colonna cliccata
		console.log(`Hai cliccato sulla casella numero: ${numero}`);
	});
	// restituisco risultato della funzione al chiamante
	return elementoDiv;
}
