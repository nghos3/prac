var dat;
var x;
var obj = [];
var collections = [];
var store = [];

function putval() {
     document.getElementById('att').innerHTML = "";
     var movie = document.getElementById("val").value;
     url1 = `https://api.themoviedb.org/3/search/multi?api_key=cf04c17e405719e5a04624c3dc238a94&language=en-US&query=`;
     var url2 = `&page=1&include_adult=false`;
     var p = 0;
     url = url1 + movie + url2;
     fetch(url)
         .then((res) => {
             res.json()
                 .then((data) => {
                     //console.log(data);
                     dat = data.results;
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
                         
                     <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
                      <p>  <a class="waves-effect waves-light btn modal-trigger" href="#modal1"  onclick="pass(${i})"  ><i class="material-icons">bookmark</i>ADD</a></p>
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

/* pass function */
function pass(l) {
  x = l;
  // console.log(x);
}


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


/*delete movies*/

function del(a) {
  console.log(a);
  var li = document.getElementById(a);
  li.parentNode.removeChild(li);
}

