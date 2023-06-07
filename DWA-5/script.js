const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Created new variable which calculates dividend by divider which will later be used
  const wholenumber = dividend / divider;

  //if user's input is not a number
  if(isNaN(dividend) || isNaN(divider)) {
    document.body.innerText = " Something critical went wrong. Please reload the page.";
    console.error("Invalid input provided. Program crashed");
  }
  //if user did not enter any value in dividend or divider
  else if( dividend === "" || divider === "") {
    result.innerText = " Division not performed. Both values are required in inputs. Try again "; 
  }
  //if user's input is a negative number or an integer
  else if (dividend < 0 || divider < 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again"
  }
  // If the output is a decimal it will set it to a whole number
  else result.innerText = Math.floor(wholenumber)
  
});


