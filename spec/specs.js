describe('Person', function() {
  describe('name', function() {
    it('takes a person named Duane and returns "Duane"', function() {
      var newPerson = Object.create(Person);
      newPerson.name = 'Duane';
      expect(newPerson.name).to.equal('Duane');
    });
  });

  describe('age', function() {
    it('takes a persons age and returns 39', function() {
      var newPerson = Object.create(Person);
      newPerson.age = 39;
      expect(newPerson.age).to.equal(39);
    });
  });
});

describe('Movie', function() {
  describe('name', function () {
    it('takes a movies name and returns "X-Men"', function () {
      var newMovie = Object.create(Movie);
      newMovie.name = 'X-Men';
      expect(newMovie.name).to.equal('X-Men');
    });
  });

  describe('times', function() {
    it('takes a time and returns [3]', function() {
      var newMovie = Object.create(Movie);
      newMovie.addTime(3);
      expect(newMovie.times).to.eql([3]);
    });
  });

  describe('releaseDate', function() {
    it('takes a date and returns 1424246400000', function() {
      var newMovies = Object.create(Movie);
      newMovie.dateReleased('Feb 18, 2015');
      expect(newMovie.releaseDate).to.equal(1424246400000);
    });
  });
});











// Data Structure
// var newMovie = {
//   name: 'X-Men',
//   times: [3, 5, 7, 9, 11],
//   releaseDate: Date.parse('Feb 1, 2015')
// }
//
// var newPerson = {
//   name: 'Duane',
//   age: 39
// }
//
// var pricing = {
//   firstRun: 8.95,
//   secondRun: 6.45,
//   seniorDiscount: 3,
//   matineeDiscount: 3
// }
