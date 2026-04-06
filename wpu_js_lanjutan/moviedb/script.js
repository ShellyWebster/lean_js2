$.ajax({
    // url: 'x',
    url: 'https://www.omdbapi.com/?apikey=640e288c&s=toy',
    success: result => {
        const movies = result.Search;
        // console.log(movies);
        let cards = '';
        movies.forEach(m => {
            cards += `<div class="col-md-4 my-3">
                        <div class="card">
                            <img class="card-img-top" src="${m.Poster}">
                            <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#movieDetaiLModal" >Show Details</a>
                            </div>
                        </div>
                    </div>`;
        });
        $('.movie-container').html(cards)
    },
    error: (e) => {
        console.log(e.responseText);
    }
});