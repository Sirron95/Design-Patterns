var people = function () {
    
};

people.prototype.age = 0;
people.prototype.name = "no name";
people.prototype.city = "no city";

people.prototype.print = function () {
    console.log(this.name + ", " + this.age + ", " + this.city);
};

let person1 = new people();
person1.name = "Aryan";
person1.age = 23;
person1.city = 'Up';
person1.print();