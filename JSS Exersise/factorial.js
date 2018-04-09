function fac(){
	console.log("in pal");
	var num= parseInt(document.getElementById("no").value);
	var a= 1;
if(num>=0){
	for(i=1;i<=num;i++)
	{
     
     a=i*a;
	}
 return document.write(a);
}

return document.write("factorial not possible");
 
}