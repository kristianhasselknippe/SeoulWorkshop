var Observable = require("FuseJS/Observable");
var Backend = require("Backend");

var concerts = Observable();
var username = Observable();


this.onParameterChanged(function(x){
	username.value = x.username;

	console.log("User changed  : " + username.value);

	Backend.fetchConcerts(function(upcomingConcerts) {
		upcomingConcerts.forEach(function(concert) {
			concert.isGoing = Observable(concert.isGoing);

			concert.clicked = function() {
				concert.isGoing.value = !concert.isGoing.value;
			};

			concerts.add(concert);
		});
	});
});

function pushConcertInfoPage(arg){
	router.push("concertInfo", { id : arg.data.id });
}

module.exports = {
	username: username,
	concerts: concerts,
	pushConcertInfoPage: pushConcertInfoPage
};
