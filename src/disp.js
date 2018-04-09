import {add} from "./collAdd.js";
import $ from 'jquery';
import {putval} from './index.js';
import addCollection from './appstate.js';
/* function for adding movies collections */
function dispCollection(mov, coll) {
  // console.log(collections[0].collection);

  for (let a = 0; a < obj.length; a++) {
    if (coll == obj[a]) {
      var d = `<li col="l2 m2" id="${coll}-${mov}">
      <a  href="#!" id="${mov}-${coll}" onclick="del('${coll}-${mov}')"><i class="material-icons ">delete_forever</i></a>
      ${mov}</li>`;
      document.getElementById(obj[a]).innerHTML += d;
      /*
      var aTag = document.getElementById(`${mov}-${coll}`);
      aTag.onclick = function(){ */
    }
  }
}