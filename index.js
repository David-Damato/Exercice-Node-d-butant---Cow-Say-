const myInformation = require('./information.js');

let cowsay = require("cowsay")

console.log(cowsay.say({
	text : `I'm ${myInformation.names} and I work for the ${myInformation.campus} campus`,
	e : "oO",
	T : "U "
}));
