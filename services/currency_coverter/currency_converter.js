// currency_converter.js

const apiKey = '78bede65a6e930d56b34f85e'; // Your API key
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

document.addEventListener('DOMContentLoaded', function () {
    loadCurrencies();
});

function loadCurrencies() {
    fetch(apiUrl + 'USD')  // Fetch data for USD as a base
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.conversion_rates);
            const fromCurrency = document.getElementById('from-currency');
            const toCurrency = document.getElementById('to-currency');
            
            // Populate both the 'from' and 'to' currency select dropdowns
            currencies.forEach(currency => {
                let option = document.createElement('option');
                option.value = currency;
                option.textContent = currency;
                fromCurrency.appendChild(option);

                option = document.createElement('option');
                option.value = currency;
                option.textContent = currency;
                toCurrency.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error loading currencies:", error);
            alert("Error fetching currency data.");
        });
}

function convertCurrency() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('amount').value;
    
    if (!amount) {
        document.getElementById('result').textContent = 'Please enter an amount.';
        return;
    }

    fetch(apiUrl + fromCurrency)
        .then(response => response.json())
        .then(data => {
            if (!data.conversion_rates[toCurrency]) {
                document.getElementById('result').textContent = 'Invalid currency pair.';
                return;
            }

            const rate = data.conversion_rates[toCurrency];
            const result = (amount * rate).toFixed(2);
            document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(error => {
            console.error("Error fetching conversion data:", error);
            document.getElementById('result').textContent = 'Error fetching data. Please try again later.';
        });
}
