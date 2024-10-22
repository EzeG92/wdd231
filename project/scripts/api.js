//  Get the data from the API
const url = 'https://api.fxratesapi.com/latest?api_key=fxr_live_6304ed229a999613501abd46016d94c7b452';

//  Get JSON data from API
export async  function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults (data){
    document.getElementById('convert-button').addEventListener('click', function() {
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('from-currency').value;
        const toCurrency = document.getElementById('to-currency').value;

        const rate = data.rates[toCurrency];
        const result = amount * rate;

        const formattedResult = result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        document.getElementById('conversion-result').textContent = `${amount} ${fromCurrency} = ${formattedResult} ${toCurrency}`;
    });
}