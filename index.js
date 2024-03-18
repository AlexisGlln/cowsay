
const userInformation = require('./information');
const cowsay = require("cowsay");

const sentence =`Hi, my name is ${userInformation.name} and I'm in ${userInformation.campus} campus`;

console.log(cowsay.say({
    text : sentence ,
    e : "oO",
    T : "U "
}));



