 import $ from 'jquery';
import { pass, addCollection } from "./appstate.js";
import add from './collAdd.js';

$("#add").click(function() {
 
add();
})
 $("#test").click(function() {
    putval();
 });

export function putval(){

     document.getElementById('att').innerHTML = "";
     var movie = document.getElementById("val").value;
     var url1 = `https://api.themoviedb.org/3/search/multi?api_key=cf04c17e405719e5a04624c3dc238a94&language=en-US&query=`;
     var url2 = `&page=1&include_adult=false`;
     var p = 0;
     var url = url1 + movie + url2;
     fetch(url)
         .then((res) => {
             res.json()
                 .then((data) => {

                     dat = data.results;
                     //console.log(data);
                     for (var i = 0; i < data.results.length; i += 1) {


                         if (data.results[i].title === undefined || data.results[i].poster_path === null) //if array title is not there then skip
                             continue;

                         var title = data.results[i].title;
                         var overview = data.results[i].overview;
                         var pic = data.results[i].poster_path;
                         if (p % 3 === 0)
                             var arranger = `<div class="row " >`;

                         var disp = `
                             <div class="col s12 m4 l4">
                            <div class="card">
                       <div class="card-image waves-effect waves-block waves-light">
                       <img class="activator" src="https://image.tmdb.org/t/p/w200${pic}" alt="pic: ${title}">
                          </div>
                         <div class="card-content">
                         
                     <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">
                     more_vert</i></span>
                      <p>  <a class="waves-effect waves-light btn modal-trigger" href="#modal1"  onclick="pass(${i})"  >
                      <i class="material-icons">bookmark</i>ADD</a></p>
                              </div>
                  <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>${overview}</p>
    </div>
  </div>

                            </div>
                            `;
                         arranger += disp;

                         if (p % 3 === 2) {
                             arranger += `</div>`;
                             document.getElementById('att').innerHTML += arranger;
                         }

                         p++;

                     }

                 })
         })

 }

 window.pass=pass;

