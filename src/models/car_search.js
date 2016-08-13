'use strict';

let CarSearch = Backbone.Model.extend({
	defaults: {
    pickUpLocation: 'Las Vegas',
    pickUpDateTime: new Date(),
    returnDateTime: new Date(),
		carType: 'sedan'
	}
});
