const apiKey = "d8aaa244ebd41251a1eccb18fb32c061";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBoxBtn = document.querySelector(".search button");
const weather = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");
const errorDiv = document.querySelector(".error");

async function checkWheather(setCity) {
    const response = await fetch(apiUrl+ `${setCity}` + `&appid=${apiKey}`);
    let data = await response.json();
    
    if (response.status === 404 || !data.name) {
        errorDiv.style.display = "block";
    } else {
        errorDiv.style.display = "none";
    }
    
    let city = document.querySelector(".city");
    let cityDate = data.name;
    city.innerHTML = cityDate;
    
    let temp = document.querySelector(".temp");
    let tempData = data.main.temp;
    temp.innerHTML = Math.round(tempData) + `°C`;
    
    let humidity = document.querySelector(".humidity");
    let humidityDate = data.main.humidity;
    humidity.innerHTML = humidityDate + `%`;
    
    let wind = document.querySelector(".wind");
    let windData = data.wind.speed;
    wind.innerHTML = windData + ` km/h`;
    
    let weatherCondition = data.weather[0].main;
    
    if (weatherCondition == 'Clouds') {
        weatherIcon.src = "./images/cloudes.png";
    } else if(weatherCondition == 'Clear') {
        weatherIcon.src = "./images/clear.png";
    } else if(weatherCondition == 'Rain') {
        weatherIcon.src = "./images/rain.png";
    } else if(weatherCondition == 'Drizzle') {
        weatherIcon.src = "./images/drizzle.png";
    } else if(weatherCondition == 'Mist') {
        weatherIcon.src = "./images/mist.png";
    } else {
        weatherIcon.src = "./images/clear.png";
    }
    
    weather.style.display = "block";
}

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const handleSearch = debounce(() => {
    weather.style.display = "none";
    checkWheather(searchBox.value);
}, 300); 

searchBoxBtn.addEventListener("click", handleSearch);
