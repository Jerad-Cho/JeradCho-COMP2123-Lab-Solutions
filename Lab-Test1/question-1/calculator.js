var multiplyTwoNumbers = function(x, y){
    var result;
    if (isNaN(x) || isNaN(y)){
        console.log('Error one of the values is not an integer, please try again.');
        return;
    }
    else{
        result = x * y
        console.log('Multiply ' + x + ' * ' + y + ' = ' + result);
        return result;
    }
}

var evenDoubler = function(x){
    var result;
    if (isNaN(x)){
        return ('Error the value was not an integer.');
    }
    else if (x % 2 == 0){
        result = x * x;
        console.log('Even doubler ' + x + ' = ' + result);
        return result;
    }
    else{
        return 0;
    }
}

multiplyTwoNumbers(2,4);
evenDoubler(4);