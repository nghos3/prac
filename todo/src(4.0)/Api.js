
function postRequest(temp){

	 fetch('http://localhost:3000/items', {
                method: 'POST',
                headers: {
      				'Accept': 'application/json',
      				'Content-Type': 'application/json'
    			},
                body:JSON.stringify({heading:temp.heading, details:temp.details})
            })
	 	.then((res) =>res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
}

function deleteRequest(id){
	fetch(`http://localhost:3000/items/${id}`, {
                method: 'DELETE',
            })
	 	.then((res) =>res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
}

module.exports = {
  deleteRequest: deleteRequest,
  postRequest: postRequest
}