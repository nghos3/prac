import { pass, addCollection } from "./appstate.js";
/* add collection */
function add() {
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
