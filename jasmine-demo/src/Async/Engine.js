/* Engine.js */
var Engine = function(displayElement) {
	this.$el = $(displayElement);
};

Engine.prototype.start = function(cb) {
	this.$el.fadeOut(1000, cb);
};

Engine.prototype.pause10seconds = function(cb) {
	setTimeout(cb, 10000);
};