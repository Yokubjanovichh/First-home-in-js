let numbersOfSeries = prompt("Nechta serial ko'rdingiz ", "");

const seriesDB = {
  count: numbersOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Oxirgi ko'rgan serialingiz?", ""),
    b = prompt("Nechchi baho berasiz?", "");
  if (a != null && a != "" && b != null && b != "") {
    seriesDB.series[a] = b;
    console.log("Done");
  } else {
    console.log("ERROR");
    --i;
  }
}

if (seriesDB.count <= 5) {
   console.log("Kam serial ko'ripsiz");
} else if (5 < seriesDB.count <= 10) {
   console.log( "Siz classik tamoshabin ekansiz");
} else {
   console.log( "Siz serialchi zvezda ekansiz");
}

console.log(seriesDB);
