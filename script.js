let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: (numberOfFilms === '') ? 0 : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let number = 0,
    movie,
    movieRating;

function rememberFilms() {
    while (number < 2) {
        movie = prompt('Один из последних просмотренных фильмов?', '');
        movieRating = prompt('На сколько оцените его?', '');
        if ((movie || movieRating) === '' || (movie || movieRating) === null ||
            (movie.length || movieRating.length) > 50) {
            movie = prompt('Один из последних просмотренных фильмов?', '');
            movieRating = prompt('На сколько оцените его?', '');
        }
        personalMovieDB.movies[movie] = movieRating;
        number++;
    }
}

rememberFilms();

function personLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

personLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`, ''));
    }
}
writeYourGenres();