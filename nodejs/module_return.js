const person = require('./module_data')
const sayName = require('./module_function')

sayName(person.person1);
sayName(person.person2);
//sayName(person.person[0]);
//sayName(person.person[1]);
sayName("Shyam");

