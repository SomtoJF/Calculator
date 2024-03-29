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
let value;

function displayNumber(value){
    if(showResult.textContent == '0'){
        showResult.textContent = '';
    };
    showResult.textContent += value;
};

one.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

two.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

three.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

four.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

five.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

six.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

seven.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

eight.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

nine.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

zero.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

zeroZero.addEventListener('click', function(){ 
    value = this.value;
    displayNumber(value);
});

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
    switch (operation){
        case '+':
            showResult.textContent = ((Number(firstNumber) * 100 )+ (Number(secondNumber) * 100)) / 100;
            break;

        case '-':
            if(firstNumber == null){

            }
            else{
                showResult.textContent = Number(firstNumber) - Number(secondNumber);
            };
            break;

        case 'x':
            if((Number(firstNumber) * Number(secondNumber)) % 1 == 0){
                showResult.textContent = Number(firstNumber) * Number(secondNumber);
            }
            else{
                let answer = Number(firstNumber) * Number(secondNumber);
                showResult.textContent = answer.toFixed(3);
            };
            break;

        case '/':
            if(secondNumber == '0'){
                showResult.textContent = 'Invalid';
            }
            else{
                if((Number(firstNumber) / Number(secondNumber)) % 1 == 0){
                    showResult.textContent = Number(firstNumber) / Number(secondNumber);
                }
                else{
                    let answer = Number(firstNumber) / Number(secondNumber);
                    showResult.textContent = answer.toFixed(3);
                }
            };
            break;
        
    };

};

function equalsTo(){
    secondNumber = showResult.textContent;
    showExpression.textContent = '';
    operate(firstNumber,secondNumber,operation);
    firstNumber = secondNumber = operation = null;
};
equals.addEventListener('click', equalsTo);

function formatDisplay(operation){
    firstNumber = showResult.textContent;
    showResult.textContent = '0';
    showExpression.textContent = `${firstNumber} ${operation} `;
}

add.addEventListener('click', function(){
    equalsTo();
    operation = '+';
    formatDisplay(operation);
})

minus.addEventListener('click', function(){
    equalsTo();
    operation = '-';
    formatDisplay(operation);
})

multiply.addEventListener('click', function(){
    equalsTo();
    operation = 'x';
    formatDisplay(operation);
})

divide.addEventListener('click', function(){
    equalsTo();
    operation = '/';
    formatDisplay(operation);
})

document.addEventListener('keydown', function (e){
    if(Number(e.key)){
        if(showResult.textContent == '0'){
            showResult.textContent = '';
        };
        showResult.textContent += e.key;
    }
    else if(e.key == '0' || e.key == '.'){
        if(showResult.textContent == '0' && e.key == '0'){
            showResult.textContent = '';
        };
        showResult.textContent += e.key;
    }
    else if(e.key == '+'){
        equalsTo();
        operation = '+';
        formatDisplay(operation);
    }
    else if(e.key == '-'){
        equalsTo();
        operation = '-';
        formatDisplay(operation);
    }
    else if(e.key == '*'){
        equalsTo();
        operation = 'x';
        formatDisplay(operation);
    }
    else if(e.key == '/'){
        equalsTo();
        operation = '/';
        formatDisplay(operation);
    }
    else if(e.key == '='){
        equalsTo();
    }
    else if(e.key == 'c' || e.key == 'C'){
        showExpression.textContent = '';
        showResult.textContent = '0';
        firstNumber = secondNumber = null;
    }
    else{

    }
})