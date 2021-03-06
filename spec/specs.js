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
  describe('name', function() {
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
      var newMovie = Object.create(Movie);
      newMovie.date('Feb 18, 2015');
      expect(newMovie.releaseDate).to.equal(1424246400000);
    });
  });
});

describe('Pricing', function() {
  describe('firstRun', function() {
    it('takes a price and returns 8.95', function() {
      var newPricing = Object.create(Pricing);
      newPricing.firstRun = 8.95;
      expect(newPricing.firstRun).to.equal(8.95);
    });
  });

  describe('secondRun', function() {
    it('takes a price and returns 6.45', function() {
      var newPricing = Object.create(Pricing);
      newPricing.secondRun = 6.45;
      expect(newPricing.secondRun).to.equal(6.45);
    });
  });

  describe('seniorDiscount', function() {
    it('takes discount dollar amount and returns 3', function() {
      var newPricing = Object.create(Pricing);
      newPricing.seniorDiscount = 3;
      expect(newPricing.seniorDiscount).to.equal(3);
    });
  });

  describe('matineeDiscount', function() {
    it('takes discount dollar amount and returns 3', function() {
      var newPricing = Object.create(Pricing);
      newPricing.matineeDiscount = 3;
      expect(newPricing.matineeDiscount).to.equal(3);
    });
  });
});
