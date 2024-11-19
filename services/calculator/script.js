let result = document.getElementById('result');
let historyBox = document.getElementById('history-box');

// Function to update the history section
function addToHistory(expression, resultValue) {
    const historyItem = document.createElement('div');
    historyItem.textContent = `${expression} = ${resultValue}`; // Store expression and result in history
    historyBox.appendChild(historyItem);
    historyBox.scrollTop = historyBox.scrollHeight; // Auto scroll to the bottom
}

// Function to clear the history
function clearHistory() {
    historyBox.innerHTML = ''; // Clear all history items
}

// Handle Button Clicks
document.querySelectorAll('.grid button').forEach(button => {
    button.addEventListener('click', function() {
        let value = button.textContent;

        // If "Error" or "Infinity" is displayed, reset the input and start fresh
        if (result.value === "Error" || result.value === "Infinity") {
            result.value = ''; // Clear the input field after error or infinity
        }

        // Handle number input
        if (!isNaN(value) || value === '.') {
            result.value += value;
        }

        // Handle operator input (+, -, *, /)
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            // Prevent adding multiple operators consecutively
            if (result.value !== '' && !['+', '-', '*', '/'].includes(result.value.slice(-1))) {
                result.value += value;
            } else if (result.value === '' && value === '-') {
                result.value += value; // Allow minus at the beginning
            }
        }

        // Handle clear (C) button
        else if (value === 'C') {
            result.value = '';
        }

        // Handle backspace button (←)
        else if (value === '←') {
            result.value = result.value.slice(0, -1); // Remove the last character (one character at a time)
        }

        // Handle equal button (=)
        else if (value === '=') {
            try {
                let expression = result.value; // Capture the expression
                let answer = eval(result.value); // Use eval to evaluate the expression
                
                // Check for Infinity or Invalid results
                if (answer === Infinity || answer === -Infinity) {
                    result.value = "Infinity";
                } else if (isNaN(answer)) {
                    result.value = "Error";
                } else {
                    result.value = answer;
                    addToHistory(expression, answer); // Save the operation and result to history
                }
            } catch (e) {
                result.value = "Error";
            }
        }

        // Handle square root (√) button
        else if (value === '√') {
            let num = parseFloat(result.value);
            if (num < 0) {
                result.value = "Invalid Input";
            } else {
                let expression = `√${num}`;
                let resultValue = Math.sqrt(num);
                result.value = resultValue;
                addToHistory(expression, resultValue);
            }
        }

        // Handle power (x²) button
        else if (value === 'x²') {
            let num = parseFloat(result.value);
            let expression = `${num}²`;
            let resultValue = Math.pow(num, 2);
            result.value = resultValue;
            addToHistory(expression, resultValue);
        }

        // Handle percentage (%) button
        else if (value === '%') {
            let num = parseFloat(result.value);
            let expression = `${num}%`;
            let resultValue = num / 100;
            result.value = resultValue;
            addToHistory(expression, resultValue);
        }

        // Handle factorial (!) button
        else if (value === '!') {
            let num = parseInt(result.value);
            if (num < 0 || num !== Math.floor(num)) {
                result.value = "Invalid Input";
            } else {
                let fact = 1;
                let expression = `${num}!`;
                for (let i = 1; i <= num; i++) {
                    fact *= i;
                }
                result.value = fact;
                addToHistory(expression, fact);
            }
        }
    });
});

// Handle clear history button
document.getElementById('clear-history').addEventListener('click', clearHistory);

// Add keyboard event listener
document.addEventListener('keydown', function(event) {
    // Get the pressed key
    let key = event.key;

    // If "Error" or "Infinity" is displayed, reset the input and start fresh
    if (result.value === "Error" || result.value === "Infinity") {
        result.value = ''; // Clear the input field after error or infinity
    }

    // Handle number input (0-9) and decimal point
    if ((key >= '0' && key <= '9') || key === '.') {
        result.value += key;
    }

    // Handle arithmetic operators
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // Prevent adding multiple operators consecutively
        if (result.value !== '' && !['+', '-', '*', '/'].includes(result.value.slice(-1))) {
            result.value += key;
        } else if (result.value === '' && key === '-') {
            result.value += key; // Allow minus at the beginning
        }
    }

    // Handle clear (C) with "Delete" key
    else if (key === 'Delete') {
        result.value = '';
    }

    // Handle backspace key to remove one character at a time
    else if (key === 'Backspace') {
        result.value = result.value.slice(0, -1); // Remove last character
    }

    // Handle equal (=) with "Enter" key
    else if (key === 'Enter') {
        try {
            let expression = result.value; // Capture the expression
            let answer = eval(result.value);
            
            // Check for Infinity or Invalid results
            if (answer === Infinity || answer === -Infinity) {
                result.value = "Infinity";
            } else if (isNaN(answer)) {
                result.value = "Error";
            } else {
                result.value = answer;
                addToHistory(expression, answer); // Save the operation and result to history
            }
        } catch (e) {
            result.value = "Error";
        }
    }

    // Handle percentage (%)
    else if (key === '%') {
        let num = parseFloat(result.value);
        let expression = `${num}%`;
        let resultValue = num / 100;
        result.value = resultValue;
        addToHistory(expression, resultValue);
    }

    // Handle square root (√) with "S" key
    else if (key.toLowerCase() === 's') {
        let num = parseFloat(result.value);
        if (num < 0) {
            result.value = "Invalid Input";
        } else {
            let expression = `√${num}`;
            let resultValue = Math.sqrt(num);
            result.value = resultValue;
            addToHistory(expression, resultValue);
        }
    }

    // Handle power (x²) with "P" key
    else if (key.toLowerCase() === 'p') {
        let num = parseFloat(result.value);
        let expression = `${num}²`;
        let resultValue = Math.pow(num, 2);
        result.value = resultValue;
        addToHistory(expression, resultValue);
    }

    // Handle factorial (!) with "F" key
    else if (key.toLowerCase() === 'f') {
        let num = parseInt(result.value);
        if (num < 0 || num !== Math.floor(num)) {
            result.value = "Invalid Input";
        } else {
            let fact = 1;
            let expression = `${num}!`;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            result.value = fact;
            addToHistory(expression, fact);
        }
    }
});
