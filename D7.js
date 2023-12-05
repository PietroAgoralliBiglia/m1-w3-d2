/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatAndUppercase(str1, str2) {
  const part1 = str1.substring(0, 2);
  const part2 = str2.slice(-3);
  const result = part1 + part2;
  const uppercaseResult = result.toUpperCase();
  console.log(uppercaseResult);
}
concatAndUppercase("hello", "world");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function generateRandomArray() {
  const randomArray = [];

  for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 101);
  }
  return randomArray;
}
const myRandomArray = generateRandomArray();
console.log(myRandomArray);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function getEvenNumbers(array) {
  const evenNumbers = array.filter(number => number % 2 === 0);
  
  return evenNumbers;
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = getEvenNumbers(myArray);
console.log(evenNumbersArray);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sumArrayNumbers(array) {
  let sum = 0;
  array.forEach(number => {
    if (typeof number === 'number' && !isNaN(number)) {
      sum += number;
    }
  });

  return sum;
}
const myArray = [1, 2, 3, 4, 5, 'invalid', 6];
const result = sumArrayNumbers(myArray);
console.log(result);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sumArrayNumbers(array) {
  const sum = array.reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'number') {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);
  return sum;
}
const myArray = [1, 2, 3, 4, 5];
const result = sumArrayNumbers(myArray);
console.log(result);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
function incrementArrayValues(array, n) {
  const incrementedArray = array.map(number => number + n);

  return incrementedArray;
}
const myArray = [1, 2, 3, 4, 5];
const incrementValue = 10;
const result = incrementArrayValues(myArray, incrementValue);
console.log(result);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function stringLengths(array) {
  const lengthsArray = array.map(str => str.length);

  return lengthsArray;
}
const myArray = ["EPICODE", "is", "great"];
const result = stringLengths(myArray);
console.log(result);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function createOddArray() {
  const oddArray = [];

  for (let i = 1; i <= 99; i += 2) {
    oddArray.push(i);
  }

  return oddArray;
}
const result = createOddArray();
console.log(result);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function trovaFilmPiuVecchio(films) {
  let filmPiuVecchio = null;
  films.forEach(film => {
    const annoFilm = parseInt(film.Year, 10);
    if (!filmPiuVecchio || annoFilm < parseInt(filmPiuVecchio.Year, 10)) {
      filmPiuVecchio = film;
    }
  });
  return filmPiuVecchio;
}
const filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log(filmPiuVecchio);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroDiFilm(films) {
  return films.length;
}
const numeroTotaleFilm = numeroDiFilm(movies);
console.log(numeroTotaleFilm);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function ottieniTitoli(films) {
  const titoli = films.map(film => film.Title);
  return titoli;
}
const titoliDeiFilm = ottieniTitoli(movies);
console.log(titoliDeiFilm);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filmMillennioCorrente(films) {
  const oggi = new Date();
  const annoCorrente = oggi.getFullYear();
  const filmMillennioCorrente = films.filter(film => parseInt(film.Year) >= 2000 && parseInt(film.Year) <= annoCorrente);
  return filmMillennioCorrente;
}
const filmMillennioCorrente = filmMillennioCorrente(movies);
console.log(filmMillennioCorrente);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnniProduzione(films) {
  const sommaAnni = films.reduce((acc, film) => acc + parseInt(film.Year), 0);
  return sommaAnni;
}
const risultatoSommaAnni = sommaAnniProduzione(movies);
console.log(risultatoSommaAnni);


/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function trovaFilmPerID(films, imdbID) {
  const filmCercato = films.find((film) => film.imdbID === imdbID);
  return filmCercato;
}
const imdbIDCercato = 'tt0167260';
const filmTrovato = trovaFilmPerID(movies, imdbIDCercato);

if (filmTrovato) {
  console.log('Film trovato:', filmTrovato);
} else {
  console.log('Nessun film trovato con l\'imdbID specificato.');
}

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function trovaIndicePrimoFilmPerAnno(films, annoCercato) {
  const indiceFilm = films.findIndex((film) => film.Year === annoCercato);
  return indiceFilm;
}
const annoCercato = '2003';
const indicePrimoFilm = trovaIndicePrimoFilmPerAnno(movies, annoCercato);

if (indicePrimoFilm !== -1) {
  console.log('Indice del primo film uscito nell\'anno specificato:', indicePrimoFilm);
} else {
  console.log('Nessun film trovato per l\'anno specificato.');
}
