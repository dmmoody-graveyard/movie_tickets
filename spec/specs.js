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
