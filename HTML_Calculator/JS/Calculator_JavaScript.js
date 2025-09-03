// Creates an object to keep track of values.
const Calculator = {
    // This will display 0 on the calculator screen.
    Display_Value: '0',
    // This will hold the first operand for any expressions; set to null for now.
    First_Operand: null,
    // This checks whether or not the second operand has been input by the user.
    Wait_Second_Operand: false,
    // This will hold the operator; set it to null for now.
    operator: null,
};

// This modifies values each time a button is clicked on.
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    // If waiting on the second operand, replace the display with the new digit.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Otherwise append the digit to the current value (or overwrite if it's "0").
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// This section handles decimal points.
function Input_Decimal(dot) {
    // Prevent accidental extra decimals when waiting for the second operand.
    if (Calculator.Wait_Second_Operand === true) return;

    // Only add the decimal if one isn’t already present.
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// This section handles operators.
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;

    // Convert the current display string to a number.
    const Value_of_Input = parseFloat(Display_Value);

    // If an operator already exists and we’re waiting for the second operand,
    // update the operator and exit.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    // If there is no first operand yet, set it.
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    }
    // Otherwise, if an operator exists, perform the calculation.
    else if (operator) {
        const Value_Now = First_Operand || 0;

        // Lookup table for the math operations.
        const Perform_Calculation = {
            '/': (first, second) => first / second,
            '*': (first, second) => first * second,
            '+': (first, second) => first + second,
            '-': (first, second) => first - second,
            '=': (first, second) => second, // equals just returns the second value
        };

        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);

        // Normalize floating point results (limit trailing digits then strip trailing zeros).
        result = Number(result).toFixed(9);
        result = (result * 1).toString();

        // Update display and first operand with the result.
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    // We’re now waiting for the second operand; store the operator.
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

//This function resets the calculator
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This function updates the calculator screen with the contents of Display_Value
function Update_Display() {
    //Makes use of the calculator-screen class to target the input tag in the HTML document
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element that was clicked.
    const { target } = event;

    //If the element that was clicked on is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //Ensures that AC clears all inputs from the Calculator screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
});