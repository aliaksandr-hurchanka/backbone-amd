// Изолированный модуль, который загрузится только после Backbone

define(['backbone'], function (Backbone) {
	var App = Backbone.View.extend({
		initialize: function () {
			console.log('Hello!');
		}
	});

	return App;
})