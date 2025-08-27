const button = document.getElementById('loadusers');

button.addEventListener('click', async () => {
    const container = document.getElementById('tablecontainer');
    container.textContent = "Loading...";

    try {
        const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bc260344");
        const data = await response.json();

        let tablehtml = `
            <img src="${data.Poster}" alt="Movie Poster" style="width:200px; margin-bottom:10px;">
            <table border="1" cellpadding="5">
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Rated</th>
                    <th>Released</th>
                    <th>Director</th>
                    <th>Writer</th>
                    <th>Actors</th>
                    <th>Plot</th>
                </tr>
                <tr>
                    <td>${data.Title}</td>
                    <td>${data.Year}</td>
                    <td>${data.Rated}</td>
                    <td>${data.Released}</td>
                    <td>${data.Director}</td>
                    <td>${data.Writer}</td>
                    <td>${data.Actors}</td>
                    <td>${data.Plot}</td>
                </tr>
            </table>
        `;

        container.innerHTML = tablehtml;

    } catch (err) {
        container.textContent = "Error loading data!";
        console.log(err.message);
    }
}); 
  


