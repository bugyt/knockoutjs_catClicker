var intialCats = [{
  clickCount: 0,
  name: 'Tabby',
  imgSrc: 'img/1.jpg',
  imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
  nickNames: ['Fouiny', 'Chaton', 'baby']
}, {
  clickCount: 0,
  name: 'Tiger',
  imgSrc: 'img/2.jpg',
  imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
  nickNames: ['Fouiny', 'Chaton', 'baby']
}, {
  clickCount: 0,
  name: 'Scaredy',
  imgSrc: 'img/3.jpg',
  imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
  nickNames: ['Fouiny', 'Chaton', 'baby']
}, {
  clickCount: 0,
  name: 'Shadow',
  imgSrc: 'img/4.jpg',
  imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
  nickNames: ['Fouiny', 'Chaton', 'baby']
}, {
  clickCount: 0,
  name: 'Sleepy',
  imgSrc: 'img/5.jpg',
  imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
  nickNames: ['Fouiny', 'Chaton', 'baby']
}];


var Cat = function(data) {
  var self = this;

  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.imgSrc);
  this.name = ko.observable(data.name);
  this.nickNames = ko.observableArray(data.nickNames);

  this.level = ko.computed(function() {
    var level;
    var clicks = self.clickCount();
    if (clicks < 10) {
      level = 'newBorn';
    } else if (clicks < 50) {
      level = 'infant';
    } else if (clicks < 100) {
      level = 'teen';
    } else {
      level = 'adult';
    }

    return level;
  });
}

var viewModel = function() {

  var self = this;

  this.catList = ko.observableArray([]);

  intialCats.forEach(function(catItem) {
    self.catList().push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.countClicker = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }

  this.setCat = function(data) {
    self.currentCat(data);
  };
}

ko.applyBindings(new viewModel());