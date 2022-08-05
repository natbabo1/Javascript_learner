function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = function() {
        this.currentValue += +prompt("Enter num");
    }
    this.show = function() {
        alert(this.currentValue);
    }
}

let acc = new Accumulator(0);

acc.read();
acc.show();
// acc.read();
// acc.show();
// acc.read();
// acc.show();