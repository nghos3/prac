function fib() {
 var c=0;
 var a=0;
 var b=1;
 var num= parseInt(document.getElementById("no").value);
  document.write(a);
  document.write(b);
 for(i=0;i<num-2;i++)
 {
     c=a+b;
     a=b;
     b=c;
     document.write(c);
 }
	 
}




/*function add_number(){
            var first_number = parseInt(document.getElementById("Text1").value);
            var second_number = parseInt(document.getElementById("Text2").value);
            var result = first_number + second_number;
            document.getElementById("txtresult").value = result;    
            }*/