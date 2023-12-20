const cityDisplay = document.querySelector(".form-input weather-search");
const searchButton = document.querySelector(".search-button");

const ApiKey = "2738ef92b7cc865a6984240bb4cb921c";
const weatherApiKey = "http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}"


const getCityLocation = () => {
    const cityName = cityDisplay.ariaValueMax.trim();
    if(!cityName) return;
    const geolocationApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=$(cityName)&limit=5&appid={ApiKey}";
    console.log(cityName);

    fetch(geolocationApiUrl).then(response => response.json()).then(data => {
        if(!data.length) return alert("No information found about ${cityName}");
        const { name, lat, lon} = data [0];
        getWeatherInformation(name, lat, lon);
        console.log(data)
    }).catch(() => {})
}

    fetch(weatherApiKey).then(response => response.json()).then(data => {
        data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if(!newForecastDays.push(forecastDate)) {
                return newForecastDays.push(forecastDate);
            }
        });
        console.log(data);
        fiveDaysForecast.forEach(weatheItem => {
            weatherCardsDiv.insertAdjacentHTML("beforeend", createWeatherCard(weatherItem));
        });

    });

weatherCardsDiv.innerHTML = "";
cityDisplay.value = "";

searchButton.addEventListener("click", getCityLocation);