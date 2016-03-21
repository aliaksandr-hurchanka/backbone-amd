// main.js - entry point

require.config({
	paths: {
		"jquery" : "bower_components/jquery/dist/jquery",
		"underscore" : "bower_components/underscore-amd/underscore",
		"backbone" : "bower_components/backbone-amd/backbone",
		"AppView" : "views/app"
	}
})

require(['AppView'], function (AppView) {
	new AppView;
})