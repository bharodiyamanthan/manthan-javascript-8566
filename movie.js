// document.querySelector("#btn").addEventListener('click' , () => {
//     let  searchText = document.querySelector('#search').value;

//     fetch(`https://www.omdbapi.com/?apikey=49e6c128&t=${searchText}`)
//     .then(res =>  res.json())
//     .then((data) => {
//         console.log(data);
//         let moviedetail = document.querySelector("#movieDetail");
//         let poster = document.createElement('img');
//         poster.setAttribute("src",data.Poster)
//         poster.style.height = "300px"
//         poster.style.width = "300px"
//         moviedetail.append(poster)

//         let title = document.createElement('h2')
//         title.innerHTML = data.title;
//         moviedetail.append(title);
//     })
//     .catch(err => console.log(err));    
// })

document.querySelector("#btn").addEventListener('click', () => {
    let searchText = document.querySelector('#search').value;

    fetch(`https://www.omdbapi.com/?apikey=49e6c128&t=${searchText}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        let moviedetail = document.querySelector("#movieDetail");
        moviedetail.innerHTML = ''; // Clear previous results

        // Check if the movie data is available
        if (data.Response === "True") {
            let poster = document.createElement('img');
            if (data.Poster && data.Poster !== "N/A") {
                poster.setAttribute("src", data.Poster);
                poster.style.height = "300px";
                poster.style.width = "300px";
            } else {
                poster.setAttribute("src", "default-poster.jpg"); // Default image if no poster available
            }
            moviedetail.append(poster);

            let title = document.createElement('h2');
            title.innerHTML = data.Title || "Title not available";
            moviedetail.append(title);
        } else {
            moviedetail.innerHTML = '<p>Movie not found. Please try again.</p>';
        }
    })
    .catch(err => {
        console.log(err);
        let moviedetail = document.querySelector("#movieDetail");
        moviedetail.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    });
});
