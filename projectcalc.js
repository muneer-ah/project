let display = document.getElementById("display");
let number = document.getElementsByClassName("number");
let operator = document.getElementsByClassName("operator");
// let seven = document.getElementById("seven");

// seven.addEventListener('click', function(){
// display.textContent += this.textContent;

// })

// Number and operators
Array.from(number).forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent == '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});
Array.from(operator).forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

// Equal event
document.querySelector("#equal").addEventListener('click', () => {
    display.textContent = eval(display.textContent)
})

// All clear
document.querySelector("#allClear").addEventListener('click', () => {
    display.textContent = '0';
})

// Clear
document.querySelector('#clear').addEventListener('click', () => {
    if (display.textContent.length == 1) {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
})
