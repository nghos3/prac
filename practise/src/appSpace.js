
// export function global(){
// var dat;
// var x;
// var obj = [];
// var collections = [];
// var store = [];

// }

export const global1 = {
  dat : [],
  x : null,
  obj : [],
  collections : [],
  store : []
};

/* pass function */
export function pass(l) {
  x = l;
  // console.log(x);
}

/* function for data collections(appstate) */
export function addCollection(j) {
  let res = {};

  res.collection = obj[j];
  res.movie = dat[x].title;
  res.date = dat[x].release_date;
  res.summary = dat[x].overview;
  res.ratings = dat[x].vote_average;
  collections.push(res);

  //dispCollection(res.movie, res.collection);
  // console.log(collections);
}
