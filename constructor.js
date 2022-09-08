let People = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;

    this.print = function () {
        console.log(this.name + ", " + this.age + ", " + this.state);
    };
};
let person1 = new People('Aryan', 23, 'UP');
let person2 = new People('Ashish', 24, 'TN');

person1.print();
person2.print();

