//user function
let User = function (name) {
    this.name = name;

    this.display = function () {
        console.log("User: " + this.name);
    };
}
//decorating the user function
let DecoratedUser = function (user,city,state) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.city = city;
    this.state = state;
    

    this.display = function () {
        console.log("User Details: " + this.name + ", " +
            this.city + ", " + this.state);
    };
}


let user = new User("Aryan");
user.display();

let decorated = new DecoratedUser(user, "Uttar Pradesh", "Kasganj");
decorated.display();
