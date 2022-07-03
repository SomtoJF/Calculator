let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let zeroZero = document.getElementById('zerozero');
let clear = document.getElementById('clear');
let plusMinus = document.getElementById('plus-minus');
let percent = document.getElementById('percent');
let divide = document.getElementById('divide');
let add = document.getElementById('add');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let equals = document.getElementById('equals');
let point = document.getElementById('point');
let display = document.getElementById('display');
let numbers = document.getElementsByClassName('numbers');
let showResult = document.getElementById('showresult');
let showExpression = document.getElementById('showexpression');
let firstNumber = null, secondNumber = null, operation;

one.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

two.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

three.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

four.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

five.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

six.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

seven.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

eight.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

nine.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

zero.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

zeroZero.addEventListener('click', function(){ 
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += this.value;});

clear.addEventListener('click',function (){ 
    showExpression.textContent = '';
    showResult.textContent = '0';
    firstNumber = secondNumber = null}
    );

plusMinus.addEventListener('click', function(){
    showResult.textContent *= -1;
});

point.addEventListener('click', function(){
    showResult.textContent += '.';
})

percent.addEventListener('click', function(){
    showResult.textContent /= 100;
});

function operate(firstNumber,secondNumber,operation){
    if(operation == '+'){
        showResult.textContent = Number(firstNumber) + Number(secondNumber);
    }
    else if(operation = '-'){
        showResult.textContent = Number(firstNumber) - Number(secondNumber);
    }
    else if(operation = '*'){
        showResult.textContent = Number(firstNumber) * Number(secondNumber);
    }
    else if(operation = '/'){
        if(secondNumber == '0'){
            showResult.textContent = 'Invalid';
        }
        showResult.textContent = Number(firstNumber) / Number(secondNumber);
    };
};
function equalsTo(){
    secondNumber = showResult.textContent;
    showExpression.textContent = '';
    operate(firstNumber,secondNumber,operation);
    firstNumber = secondNumber = null;
};
equals.addEventListener('click', equalsTo);

add.addEventListener('click', function(){
    operation = '+';
    equalsTo();
    firstNumber = showResult.textContent;
    showResult.textContent = '0';
    showExpression.textContent = `${firstNumber} + `;
})