//add content to footer
const year = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightText = `&copy; ${year} Ezequiel Gimenez - Rosario, Argentina.<br><span class ="last-modified">Last Modification: ${lastModified}</span>`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;

//add event listener to menu button and nav links
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// Weather cards
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#weather-desc');
const weatherDetails = document.querySelector('#weather-details');

//  Get the current weather data from the API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-32.95&lon=-60.69&units=metric&appid=5f9c58c75d5c2060c966f87b914145e4';

//  Get JSON data from OpenWeatherMap API
async  function apiFetch() {
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

apiFetch();

//  Current weather display results
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = description.innerHTML = data.weather[0].description;
    weatherDetails.innerHTML =  `High: ${Math.round(data.main.temp_max)}&deg;C<br>Low: ${Math.round(data.main.temp_min)}&deg;C<br>Humidity: ${data.main.humidity}%`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}


// Get the forecast weather data from the API
const forecastUrl =  'https://api.openweathermap.org/data/2.5/forecast?lat=-32.95&lon=-60.69&units=metric&appid=5f9c58c75d5c2060c966f87b914145e4';

async function forecastFetch() {
    try {
        const response = await fetch(forecastUrl)
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

forecastFetch();

// Forecast weather display results
function displayResultsForecast(data) {
    const forecastCards = document.querySelectorAll('.forecast-card');
    for (let i = 1; i < 4; i ++) { // Start from tomorrow (i = 1)
        const startIndex = i * 8; // Start index for each day (readings every 3 hours)
        const forecastDate = forecastCards[i - 1].querySelector('#forecastDate');
        const forecastIcon = forecastCards[i - 1].querySelector('#forecast-icon');
        const forecastTemp = forecastCards[i - 1].querySelector('#forecastTemp');
        const forecastDesc = forecastCards[i - 1].querySelector('#forecast-desc');

        forecastDate.innerHTML = `${new Date(data.list[startIndex].dt * 1000).toLocaleDateString()}`;
        const iconUrl = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
        forecastIcon.setAttribute('src', iconUrl);
        forecastIcon.setAttribute('alt', data.list[startIndex].weather[0].description);
        forecastTemp.innerHTML = `${Math.round(data.list[i].main.temp)}°C`;
        forecastDesc.innerHTML = data.list[startIndex].weather[0].description;
    }
}

