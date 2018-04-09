function putval()
{
   let searchMovie = document.getElementById("val").value;
   fetch(`https://api.themoviedb.org/3/search/multi?api_key=cf04c17e405719e5a04624c3dc238a94&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
    .then((res) => { res.json()
        .then((data) => {
            console.log(data);
            for(var i=0;i<data.results.length;i+=1){
                var movieTitle = data.results[i].title;
                var movieOverview = data.results[i].overview;

                var show = `
                            <div>
                                <h3>${movieTitle}</h3>
                                <p>${movieOverview}</p>
                            </div>
                            `;
                document.getElementById("att").innerHTML += show;
            }
        })
    })
}
