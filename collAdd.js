import { pass, addCollection } from "./appstate.js";
import $ from 'jquery';
import {putval} from './index.js'

/* add collection */


export function add() {
  ;
  var a = document.getElementById('addCollection').value;


  obj.push(a);
  document.getElementById('dropdown2').innerHTML += `<li id="${obj.length - 1}" onclick="addCollection(${obj.length - 1})">${a}</li>`;
  
  var d = `
                  <li>
                  <div class="collapsible-header"><i class="material-icons">class</i>${a}</div>
                  <div class="collapsible-body"  >
                  <ul id="${a}">
                  </ul>
                   </div>
                  </li>

                   `;
  document.getElementById('side').innerHTML += d;
}
window.add=add;
window.addCollection=addCollection;