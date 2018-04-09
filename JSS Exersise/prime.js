function pri(){
	num=parseInt(document.getElementById("no").value);
	for (var counter = 0; counter <= num; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false && counter >1) {
                document.write(counter +" ");
    }
}
}