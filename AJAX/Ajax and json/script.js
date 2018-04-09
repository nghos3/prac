var animalContainer= document.getElementById("animals");
var btn =document.getElementById("btn");// set a variable for button
var pageptr = 1;
btn.addEventListener("click", function(){  // what will happen if we clickthe button


var Req = new XMLHttpRequest();
Req.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageptr+'.json');//url
Req.onload= function(){ //onloading this function will start

 var ourData=JSON.parse(Req.responseText);// store data as a Json in ourdata
 fn(ourData); 
}

Req.send(); //sends the dat to page
pageptr++;//increment ptr to change url
if(pageptr>3){
	btn.classList.add("hide-me");
}
});

function fn(data){
	var htmltester="";//variable for printing data onclick
	for( let i=0;i<data.length;i++)
	{

		htmltester += "<p>"+ data[i].name + "wa is a " + data[i].species + "</p>" + "and ";
        
	}
animalContainer.insertAdjacentHTML('beforeend',htmltester);//inserting text in the html
}