var Person = {

};

var Movie = {
  times: [],
  releaseDate: 0,
  addTime: function(time) {
    this.times.push(time);
  },
  date: function(date) {
    this.releaseDate = Date.parse(date);
  }
};

var Pricing = {

};

$(document).ready(function() {
  $('form#new-movie').submit(function(event) {
    event.preventDefault();

    var movieName = $('input#movie-name').val();
    var releaseDate = $('input#release-date').val();

    var newMovie = Object.create(Movie);
    newMovie.name = movieName;

    $('ul#show-movies').append("<li><span class='movie'>" + newMovie.name + "</span></li>")

    $('input#movie-name').val("");
  });
});
