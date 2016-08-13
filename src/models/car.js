'use strict';

let Car = Backbone.Model.extend({
	defaults: {
    carModel: 'Ford',
    carImage: '',
    description: 'Description',
		price: '1000',
    location: 'Las Vegas',
    carType: 'sedan'
	}
});
