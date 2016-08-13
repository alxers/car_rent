'use strict';

	let CarView = Backbone.View.extend({
		tagName:  'section',

		template: _.template($('.car').html()),

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
      this.render();
      return this;
		},

		render: function () {
      this.$el.html(this.template(this.model.attributes));
      this.$el.find('.car-model').text(this.model.get('carModel'));
      this.$el.find('.car-image').attr('src', this.model.get('carImage'));
      this.$el.find('.car-description').text(this.model.get('description'));
      this.$el.find('.car-price').text(this.model.get('price'));
			return this;
		}
	});
