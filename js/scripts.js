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
