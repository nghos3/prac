var dat;
var x;
var obj = [];
var collections = [];
var store = [];

/* pass function */
function pass(l) {
  x = l;
  // console.log(x);
}

/* function for data collections(appstate) */
function addCollection(j) {
  var res = {};

  res.collection = obj[j];
  res.movie = dat[x].title;
  res.date = dat[x].release_date;
  res.summary = dat[x].overview;
  res.ratings = dat[x].vote_average;
  collections.push(res);

  dispCollection(res.movie, res.collection);
  // console.log(collections);
}
