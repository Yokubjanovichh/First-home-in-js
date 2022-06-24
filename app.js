let numbersOfSeries;
let b;

function startApp() {
  numbersOfSeries = prompt("Nechta serial ko'rdingiz ", "");
  while (
    numbersOfSeries == "" ||
    numbersOfSeries == null ||
    isNaN(numbersOfSeries)
  ) {
    numbersOfSeries = prompt("Nechta serial ko'rdingiz ", "");
  }
}

startApp();

const seriesDB = {
  count: numbersOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMySeries() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Oxirgi ko'rgan serialingiz?", "");
    b = prompt("Nechchi baho berasiz?", "");
    while (b == "" || b == null || isNaN(b)) {
      b = prompt("Nechchi baho berasiz?", "");
    }
    if (a != null && a != "" && b != null && b != "") {
      seriesDB.series[a] = b;
      console.log("Done");
    } else {
      console.log("ERROR");
      --i;
    }
  }
}

rememberMySeries();

function detectLevelSeries(miqdor) {
  if (miqdor <= 5) {
    console.log("Kam serial ko'ripsiz");
  } else if (5 < miqdor <= 10) {
    console.log("Siz classik tamoshabin ekansiz");
  } else {
    console.log("Siz serialchi zvezda ekansiz");
  }
}

detectLevelSeries(seriesDB.count);

function writeGenres() {
  for (let i = 0; i <= 2; i++) {
    let sevganJanrim = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, "");
    seriesDB.genres[i] = sevganJanrim;
  }
}

writeGenres();

function showDb(yashirin) {
  if (yashirin == false) {
    console.log(seriesDB);
  } else {
    console.log("xatolik yuz berdi");
  }
}

showDb(seriesDB.privat);
