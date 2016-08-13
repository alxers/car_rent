'use strict';

	let CarSearchPageView = Backbone.View.extend({
		tagName:  'section',

		template: _.template($('.car-search-page').html()),

		initialize: function() {
      this.listenTo(this.model.get('searchModel'), 'change', this.renderSearchResults);
      this.render();
      return this;
		},

		render: function() {
      this.$el.html(this.template(this.model.attributes));
      this.renderSearchForm();
      this.renderSearchResults();
			return this;
		},

    renderSearchForm: function() {
      let carSearch = this.model.get('searchModel');
      let carSearchView = new CarSearchView({ model: carSearch });
      this.$el.find('.car-search').replaceWith(carSearchView.$el);
      return this;
    },

    renderSearchResults: function() {
      let car = new Car();
      let carView = new CarView({ model: car });
      let results = this.model.get('allCars').where({ location: this.model.get('searchModel').get('pickUpLocation'),
                                        carType: this.model.get('searchModel').get('carType')});
      this.$el.find('.car-search-results').empty();
      this.$el.find('.car-found-num').text(results.length);
      _.each(results, (result) => {
        let carView = new CarView({ model: result });
        this.$el.find('.car-search-results').append(carView.$el);
      });
      return this;
    }
	});
