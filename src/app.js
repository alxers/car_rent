'use strict';

$(document).ready(function(){
  let cars = [
    new Car({ carModel: 'Toyota', price: '2000', location: 'New York', carType: 'off-road'}),
    new Car({ carModel: 'Nissan', price: '2300', location: 'San Francisco', carType: 'off-road'}),
    new Car({ carModel: 'Mazda', price: '1040', location: 'Washington'}),
    new Car({ carModel: 'Mersedes', price: '1300', location: 'Los Angeles'}),
    new Car({ carModel: 'Lexus', price: '1490', location: 'New York', carType: 'off-road'}),
    new Car({ carModel: 'Alfa Romeo', price: '4000'}),
    new Car(),
    new Car()
  ];
  let carSearchPage = new CarSearchPage({ allCars: new Cars(cars) });
  let carSearchPageView = new CarSearchPageView({ model: carSearchPage });
  $('.app').replaceWith(carSearchPageView.$el);
});
