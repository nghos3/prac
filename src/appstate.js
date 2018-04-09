import {add} from "./collAdd.js";
import $ from 'jquery';
import {putval} from './index.js';
/*export const global1 = {
  dat : [],
  x : null,
  obj : [],
  collections : [],
  store : []
};
*//* pass function */
var dat;
var x;
var obj =[];
var collections=[];
var store=[];
export function pass(l) {
  x = l;
  // console.log(x);
}

/* function for data collections(appstate) */
export function addCollection(j,dat) {
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
window.dat=dat;
window.x=x;
window.collections=collections;
window.store=store;