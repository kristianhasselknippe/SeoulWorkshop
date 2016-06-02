var Observable = require("FuseJS/Observable");
var Backend = require("Backend");

var username = Observable("");
var password = Observable("");

function login(){
	Backend.fetchUsers(function(x){
		x.forEach(function(user){
			if (user.username == username.value &&
				user.password == password.value)
				router.push("main", { username : username.value });
		});
	});
}

module.exports = {
	username: username,
	password: password,
	login: login
};
