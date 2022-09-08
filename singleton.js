//"use strict"
const Singleton = (function () {
    let instance;
    function createInstance(){
        let obj = new Object("New Instance");
        return obj;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();

            }
            return instance;
           
        }
    };
})();

const inst1 = Singleton.getInstance();
console.log(inst1);
const inst2 = Singleton.getInstance();
console.log(inst2);
console.log("same isntance?"+ (inst1 === inst2));

