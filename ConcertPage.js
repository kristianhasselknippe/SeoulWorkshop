var Observable = require("FuseJS/Observable");
var Backend = require("Backend");

var concert = Observable();

this.onParameterChanged(function(x){
	Backend.fetchConcerts(function(result){
		result.forEach(function(item){
			if (x.id === item.id){
				concert.value = item;
			}
		});
	});
});

module.exports = {
	concert : concert
};
