const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title')


resetButtonEl.addEventListener('click', function() {
    // set counter value to 0
    counterValueEl.textContent = 0;

    // reset background color
    counterEl.classList.remove('counter--limit');

    // reset counter title
    counterTitleEl.textContent = 'Fancy Counter';

    // enable increase and decrease buttons
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

    // unfocus (blur) reset button
    resetButtonEl.blur();
});

decreaseButtonEl.addEventListener('click', function() {
    // get current value of counter
    const currentValue = counterValueEl.textContent;

    // convert the value to number type
    const currentValueAsNumber = +currentValue;

    // decrement by 1
    let newValue = currentValueAsNumber - 1;

    // check if new value is less than 0
    if (newValue < 0) {
        // if it is, force it to be 0 
        newValue = 0;
    }

    // update counter value with new value
    counterValueEl.textContent = newValue;

    // unfocus (blur) reset button
    resetButtonEl.blur();
});

function incrementCounter () {
    // get current value of counter
    const currentValue = counterValueEl.textContent; 
    console.log(currentValue);

    // convert value to number type
    const currentValueAsNumber = +currentValue;

    // increment by 1
    let newValue = currentValueAsNumber + 1;

    // check if new value is greater than 10
    if (newValue > 10) {
        // if it is, keep it 10
        newValue = 10;

        // give visual indicator that limit has been reached
        counterEl.classList.add('counter--limit');

        //update counter title to say limit has been reached
        counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >10';

        // disable both increase and decrease when limit has been reached
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }

    // set counter element with new value
    counterValueEl.textContent = newValue;

    // unfocus (blur) reset button
    resetButtonEl.blur();
}

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);