function Subject() {
    this.observers = [];// array of observer functions
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn); 
    },
    unsubscribe: function (fn_to_remove) {
        this.observers = this.observers.filter(fn => {
            if (fn != fn_to_remove) {
                return fn;
            }
        })
    },
    trigger: function () {//will notify every observer that is currently subscribed to the subject
        
        this.observers.forEach(fn => {
            fn.call();
        })
    }
}

const subject = new Subject();
function Observer1() {
    console.log("Observer 1 triggered!");
}
function Observer2() {
    console.log("Observer 2 triggered!");
}
subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer1);
subject.trigger();