const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');

resetButtonEl.addEventListener('click', function() {
    // set counter value to 0
    counterValueEl.textContent = 0;
});

decreaseButtonEl.addEventListener('click', function() {
    // get current value of counter
    const currentValue = counterValueEl.textContent;

    // convert the value to number type
    const currentValueAsNumber = +currentValue;

    // decrement by 1
    const newValue = currentValueAsNumber - 1;

    // update counter value with new value
    counterValueEl.textContent = newValue;
});


increaseButtonEl.addEventListener('click', function() {
    // get current value of counter
    const currentValue = counterValueEl.textContent; 
    console.log(currentValue);

    // convert value to number type
    const currentValueAsNumber = +currentValue;

    // increment by 1
    const newValue = currentValueAsNumber + 1;

    // set counter element with new value
    counterValueEl.textContent = newValue;
});
