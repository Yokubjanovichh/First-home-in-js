let numbersOfSeries = prompt("Nechta serial ko'rdingiz ", "");

const seriesDB = {
  count: numbersOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt("Oxirgi ko'rgan serialingiz?", ""),
  b = prompt("Nechchi baho berasiz?", ""),
  c = prompt("Oxirgi ko'rgan serialingiz?", ""),
  d = prompt("Nechchi baho berasiz?", "");

  seriesDB.series[a]=b;
  seriesDB.series[c] = d;

  
  console.log(seriesDB);
  