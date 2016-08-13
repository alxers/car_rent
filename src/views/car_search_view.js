'use strict';

	let CarSearchView = Backbone.View.extend({
		tagName:  'section',

		template: _.template($('.car-search').html()),

		events: {
			'click .submit': 'startSearch',
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
      this.render();
      return this;
		},

		render: function() {
      this.$el.html(this.template(this.model.attributes));
      this.$el.find('.pick-up-location').val(this.model.get('pickUpLocation'));
      this.$el.find('.pick-up-date-time').val(this.model.get('pickUpDateTime'));
      this.$el.find('.return-date-time').val(this.model.get('returnDateTime'));
      this.$el.find('.car-type').val(this.model.get('carType'));
			return this;
		},

    startSearch: function() {
      this.model.set({
        'pickUpLocation': this.$el.find('.pick-up-location').val(),
        'carType': this.$el.find('.car-type').val(),
        'pickUpDateTime': this.$el.find('.pick-up-date-time').val(),
        'returnDateTime': this.$el.find('.return-date-time').val()
      });
    }
	});
