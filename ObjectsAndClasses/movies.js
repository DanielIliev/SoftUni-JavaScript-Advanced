function movies(commands) {
    const movieTemplate = {
        name: '',
        date: '',
        director: ''
    }

    let actions = commands;

    let movies = [];

    // Add data to a movie based on received command
    for (let index = 0; index < actions.length; index++) {
        let movieName = fetchMovieName(actions[index]);
        let movieId = -1;

        if (actions[index].includes('addMovie')) {
            let movie = Object.create(movieTemplate);
            movie.name = movieName;
            movies.push(movie);
        } else if (actions[index].includes('onDate')) {
            movieId = checkIfMovieExists(movies, movieName);
            if (movieId != -1) {
                let movieDate = fetchMovieDate(actions[index]);
                movies[movieId].date = movieDate;
            }
        } else if (actions[index].includes('directedBy')) {
            movieId = checkIfMovieExists(movies, movieName);
            if (movieId != -1) {
                let movieDirector = fetchMovieDirector(actions[index]);
                movies[movieId].director = movieDirector;
            }
        }
    }

    // Print only the movies that have full descriptions
    for (let index = 0; index < movies.length; index++) {
        if (movies[index].name != '' && movies[index].date != '' && movies[index].director != '')
            console.log(JSON.stringify(movies[index]));
    }

    function fetchMovieName(commandString) {
        let movieName = '';
        let arr = [];
        if (commandString.includes('addMovie')) {
            arr = commandString.split('addMovie ');
            movieName = arr[1];
        } else if (commandString.includes('onDate')) {
            arr = commandString.split(' onDate ');
            movieName = arr[0];
        } else if (commandString.includes('directedBy')) {
            arr = commandString.split(' directedBy ');
            movieName = arr[0];
        }
        return movieName;
    }

    function fetchMovieDate(commandString) {
        let arr = commandString.split(' onDate ');
        return arr[1];
    }

    function fetchMovieDirector(commandString) {
        let arr = commandString.split(' directedBy ');
        return arr[1];
    }

    function checkIfMovieExists(moviesArray, searchedMovie) {
        let movieId = -1;
        for (let index = 0; index < moviesArray.length; index++) {
            if (moviesArray[index].name == searchedMovie) {
                movieId = index;
                break;
            }
        }
        return movieId;
    }
}
// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);