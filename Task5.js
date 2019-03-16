var calc = {
    sum: function(x, y) {
        return x + y;
    },
    sub: function (x, y) {
        return x - y;
    },
    mult: function(x, y) {
        return x * y;
    },
    div: function (x, y) {
        return x / y;
    }	
};
var x=4, y=10;
var Multiply = calc.mult(x,5);
var Divide = calc.div(y,2);
var Sum = calc.sum(x,Multiply);
var Substact = calc.sub(Sum,Divide);
document.write(Substact);