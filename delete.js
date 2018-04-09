
/*delete movies*/

function del(a) {
  console.log(a);
  var li = document.getElementById(a);
  li.parentNode.removeChild(li);
}