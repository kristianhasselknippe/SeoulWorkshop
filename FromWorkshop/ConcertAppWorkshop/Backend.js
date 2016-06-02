var placeholderDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nibh eleifend diam aliquet venenatis. Pellentesque rhoncus ante vitae lectus ultrices iaculis nec in nunc. Nulla a pharetra nunc. Etiam turpis mi, aliquam et tristique vitae, consectetur nec lacus. Phasellus id ultrices risus, vitae porttitor erat. Nullam in felis urna. Nullam sagittis quam vitae luctus vehicula. Nullam malesuada, dolor et commodo elementum, ipsum odio ullamcorper dui, quis posuere metus justo ut ligula.";

function Concert(id, artist, date, city, isGoing, description) {
	this.id = id;
	this.artist = artist;
	this.date = date;
	this.city = city;
	this.isGoing = isGoing;
	this.description = description;
}

function User(id, username, password) {
	this.id = id;
	this.username = username;
	this.password = password;
}

function fetchUsers(callback) {
	setTimeout(function() {
		callback([
			new User(0, "anders", "pass"),
			new User(1, "jake", "pass"),
			new User(2, "duckers", "pass"),
			new User(3, "veggis", "pass"),
			new User(4, "emil", "pass"),
			new User(5, "hassel", "pass"),
			new User(6, "foo", "bar"),
			new User(7, "foo1", "bar1"),
			new User(8, "fooo", "bar")
		]);
	}, 0);
}

function fetchConcerts(callback) {
	setTimeout(function() {
		callback([
			new Concert(1, "Bandy Band", "May 1th", "Oakland", false,
						"Description about Bandy Band. " + placeholderDescription),
			new Concert(2, "The Best of Bands", "May 5th", "Oakland", true,
					   "Description about The Best of Bands. " + placeholderDescription),
			new Concert(3, "Battle of the Band", "May 14th", "San Jose", true,
					   "Description of Battle of the Bands. " + placeholderDescription),
			new Concert(4, "That One Band", "May 31st", "San Francisco", false,
					   "Description of That One Band. " + placeholderDescription),
			new Concert(5, "Awesomusic", "June 12th", "San Francisco", false,
					   "Description about Awesomusic. " + placeholderDescription),
			new Concert(6, "Those Musical People", "June 28th", "Santa Cruz", true,
					   "Description about Those Musical People. " + placeholderDescription),
			new Concert(7, "Band of Bandists", "July 18th", "Palo Alto", false,
					   "Description of Band of Bandists. " + placeholderDescription)]);
	}, 0);
}

module.exports = {
	Concert: Concert,

	fetchConcerts: fetchConcerts,
	fetchUsers: fetchUsers
};
