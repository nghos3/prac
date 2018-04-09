

 function zumba(){

    var myTable = [
    {
        "url" : "https://github.com/angular/angular",        
        "issue_count" : 1825,
        "branches" : 33,
        "contributors" : 591,
        "star" : 33113,
        "commit" : 9602,
        "watchers" : 2890
    },
    {
        "url" : "https://github.com/angular/material2",        
        "issue_count" : 739,
        "branches" : 15,
        "contributors" : 239,
        "star" : 13121,
        "commit" : 3304,
        "watchers" : 1109
    },
    {
        "url" : "https://github.com/angular/angular-cli",        
        "issue_count" : 879,
        "branches" : 11,
        "contributors" : 329,
        "star" : 15754,
        "commit" : 2217,
        "watchers" : 1131
    },
    {
        "url" : "https://github.com/angular/angular.js",        
        "issue_count" : 506,
        "branches" : 14,
        "contributors" : 1604,
        "star" : 58026,
        "commit" : 8720,
        "watchers" : 4400
    },
    {
        "url" : "https://github.com/angular/material",        
        "issue_count" : 746,
        "branches" : 21,
        "contributors" : 345,
        "star" : 16049,
        "commit" : 4434,
        "watchers" : 909
    },
    {
        "url" : "https://github.com/angular/protractor",        
        "issue_count" : 242,
        "branches" : 9,
        "contributors" : 247,
        "star" : 7315,
        "commit" : 1699,
        "watchers" : 514
    },
    {
        "url" : "https://github.com/angular/devkit",        
        "issue_count" : 30,
        "branches" : 4,
        "contributors" : 42,
        "star" : 353,
        "commit" : 572,
        "watchers" : 55
    },
    {
        "url" : "https://github.com/angular/ngtools-webpack-builds",        
        "issue_count" : 0,
        "branches" : 39,
        "contributors" : 2,
        "star" : 13,
        "commit" : 396,
        "watchers" : 13
    },
    {
        "url" : "https://github.com/angular/clutz",        
        "issue_count" : 73,
        "branches" : 39,
        "contributors" : 24,
        "star" : 75,
        "commit" : 527,
        "watchers" : 24
    },
    {
        "url" : "https://github.com/angular/flex-layout",        
        "issue_count" : 64,
        "branches" : 9,
        "contributors" : 33,
        "star" : 2267,
        "commit" : 470,
        "watchers" : 145
    },
    {
        "url" : "https://github.com/reactjs/reactjs.org",        
        "issue_count" : 60,
        "branches" : 20,
        "contributors" : 866,
        "star" : 1161,
        "commit" : 3332,
        "watchers" : 37
    },
    {
        "url" : "https://github.com/reactjs/react-rails",        
        "issue_count" : 55,
        "branches" : 9,
        "contributors" : 114,
        "star" : 4757,
        "commit" : 984,
        "watchers" : 119
    },
    {
        "url" : "https://github.com/reactjs/redux",        
        "issue_count" : 17,
        "branches" : 4,
        "contributors" : 556,
        "star" : 38197,
        "commit" : 2551,
        "watchers" : 1391
    },
    {
        "url": "https://github.com/daniel-e/tetros",
        "issue_count": 0,
        "branches": 1,
        "contributors": 2,
        "star": 630,
        "commit": 40,
        "watchers": 20
    },  

    {
        "url": "https://github.com/havivha/Nand2Tetris",
        "issue_count": 0,
        "branches": 1,
        "contributors": 1,
        "star": 115,
        "commit": 49,
        "watchers": 11
    },
    {
        "url": "https://github.com/programble/dotfiles",
        "issue_count": 0,
        "branches": 1,
        "contributors": 1,
        "star": 41,
        "commit": 806,
        "watchers": 3
    },
        {
        "url": "https://github.com/checkstyle/checkstyle",
        "issue_count": 434,
        "branches": 1,
        "contributors": 168,
        "star": 3288,
        "commit": 7524,
        "watchers": 176
    },
        {
        "url": "https://github.com/daniel-e/tetros",
        "issue_count": 0,
        "branches": 1,
        "contributors": 2,
        "star": 630,
        "commit": 40,
        "watchers": 20
    },
        {
        "url": "https://github.com/automerge/automerge",
        "issue_count": 9,
        "branches": 3,
        "contributors": 10,
        "star": 4451,
        "commit": 199,
        "watchers": 107
    },
        {
        "url": "https://github.com/yangshun/front-end-interview-handbook",
        "issue_count": 6,
        "branches": 1,
        "contributors": 54,
        "star": 5801,
        "commit": 180,
        "watchers": 206
    },
    {
        "url": "https://github.com/arialdomartini/Back-End-Developer-Interview-Questions",
        "issue_count": 10,
        "branches": 1,
        "contributors": 9,
        "star": 3335,
        "commit": 297,
        "watchers": 161
    },
    {
        "url": "https://github.com/GhostText/GhostText",
        "issue_count": 22,
        "branches": 3,
        "contributors": 10,
        "star": 812,
        "commit": 219,
        "watchers": 22
    },
    {
        "url": "https://github.com/facebookresearch/TensorComprehensions",
        "issue_count": 7,
        "branches": 7,
        "contributors": 7,
        "star": 554,
        "commit": 25,
        "watchers": 41
    },
        {
        "url": "https://github.com/photonstorm/phaser",
        "issue_count": 17,
        "branches": 4,
        "contributors": 293,
        "star": 18456,
        "commit": 8858,
        "watchers": 1105
    }
]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < myTable.length; i++) {
            for (var key in myTable[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.id="myTab";
        table.setAttribute('class', "table ");
       
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.
       

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myTable.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myTable[i][col[j]];
            }
        }
          
  // FINALLY ADD THE" [-] NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
       
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
 
//hide the elements
      
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTab");
        tr = table.getElementsByTagName("tr");

    var m;    
window.test = function(n)

    if(this.value === "issue_count")
    {m==1;
        console.log(n.m);}
    else if(n.value == "branches")
    {m== 2;}
    else if(n.value == " contributors")
    {m== 3;}
    else if(n.value == "star") 
    {m== 4;}
    else if(n.value =="commit")
    {m== 5;}
    else if(n.value== "watchers")
    {m== 6;}
};

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }


 }


   