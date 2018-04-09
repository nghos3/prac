 function pal(){
 	
 	var a;
 	var b=0;
 	var no= parseInt(document.getElementById("no").value);
    a=no;
    
    while (a>0)
    {
    	temp = parseInt(a%10);
    	b = parseInt(b*10) + temp;
        a=parseInt(a/10);
    	 
    } 
     
   if(b==no)
   {
     document.write("It is a pallindrome");
   }
 }