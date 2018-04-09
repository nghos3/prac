function arm(){

num=parseInt(document.getElementById("no").value);

var a=num,b=0,c=0,
    i=0;

while(a!=0)
{   i++;
   a=parseInt(a/10);
   }
console.log(i);
a=num;   
while(a!=0)
{    d=1;
	b=parseInt(a%10);
    a=parseInt(a/10);
    for(j=0;j<i;j++){d*=b;}
    
    console.log("d:"+d);
    
    c=c+d;
    console.log("c:"+c);
}
if(c === num){
 document.write("it is an armstrong no");
}

else
	document.write("it is not an armstrong no");


}