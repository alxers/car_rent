'use strict';

let CarSearchPage = Backbone.Model.extend({
	defaults: {
    searchModel: new CarSearch(),
    allCars: new Cars()
	}
});
