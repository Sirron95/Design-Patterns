function Developer(name) {
    this.name = name;
    this.type = "Developer";
}
function Tester(name) {
    this.name = name;
    this.type = "Tester";
}
function Factory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
                break;
        }
    }
}
function display() {
    console.log("Hi, I am " + this.name + " and I am a " + this.type);

}

const employeeFactory = new Factory();
const employees = [];
employees.push(employeeFactory.create("Aryan", 1));
employees.push(employeeFactory.create("Ashish", 2));
employees.push(employeeFactory.create("Pradhuman", 2));
employees.push(employeeFactory.create("Devesh", 1));

employees.forEach(emp => {
    display.call(emp);
})