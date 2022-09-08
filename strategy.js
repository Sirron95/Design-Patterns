function Flipkart() {
    this.calculate = package => {
        return 40;
    }
}
function Amazon() {
    this.calculate = package => {
        return 30;
    }
}

function Ebay() {
    this.calculate = package => {
        return 20;
    }
}
// encapsulating calculate function into shipping 
function Shipping() {
    this.company = " ";
    this.setStrategy = (company) => {
        this.company = company;
    }
    this.calculate = package => {
        return this.company.calculate(package)
    }
}
const flipkart = new Flipkart();
const amazon = new Amazon();
const ebay = new Ebay();

const package = { from: 'U.P', to: 'Karnataka', weight: 2 };
console.log(package);

const shipping = new Shipping();
shipping.setStrategy(flipkart);
console.log("Flipkart: " + shipping.calculate(package));

shipping.setStrategy(amazon);
console.log("Amazon: " + shipping.calculate(package));

shipping.setStrategy(ebay);
console.log("Ebay: " + shipping.calculate(package));