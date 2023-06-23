const MAX_NUMBER = 10
const MIN_NUMBER = -10
const STEP_AMOUNT = 1

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset"]')

const subtractHandler = () => {
    const newvalue = parseInt(number.value) - STEP_AMOUNT
    number.value = newvalue 

    if (add.disabled === true) {
        add.disabled = false
    }

    if (newvalue <= MIN_NUMBER) {
        subtract.disabled = true
    } else {
        subtract.disabled = false
    }
}

const addHandler = () => {
    const newvalue = parseInt(number.value)  + STEP_AMOUNT
    number.value = newvalue

    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    if (newvalue >= MAX_NUMBER) {
        add.disabled = true
    }
        
}

const resetHandler = () => {
    number.value = 0;
    add.disabled = false;
    subtract.disabled = false;
    showMessage("The counter has been reset");
  }
  const message = (message) =>{
    alert(showMessage)
  };

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)
reset.addEventListener('click' , resetHandler);
