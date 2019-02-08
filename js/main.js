/*----- app's state (variables) -----*/ 
let count = 0;
let inputVal = 0


/*----- cached element references -----*/ 



/*----- event listeners -----*/ 

document.getElementById("plus").addEventListener('click', addOne)
document.getElementById("minus").addEventListener('click', minusOne)
document.getElementById("input").addEventListener('change', inputNumber)


/*----- functions -----*/

function addOne() {
    count += 1
    render();
};

function minusOne() {
    count += -1;
    render();
};

function render() {
    document.getElementById("number-clicks").innerHTML = count;
    document.getElementById("input").value = count;
    count < 0 ? document.getElementById("number-clicks").style.color = 'red' : document.getElementById("number-clicks").style.color = 'black'
};

function inputNumber(str) {
    str = document.getElementById("input").value
    inputVal = parseInt(str);
    count = inputVal;
    render();
}