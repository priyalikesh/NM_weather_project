const ApiKey = "eb26233fc730169b8d2dc20d8ce721a6";
const weatherIcon = document.querySelector(".weather_icon");
const body = document.querySelector(".body");

function search(){
    let cityName = "New Delhi";
    let cityName_tag = document.getElementById('cityname');
    if(cityName_tag.value.length > 0){
        cityName = cityName_tag.value.trim();
    }
    callApi(cityName);
}

function callApi(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => response(data))
    .catch((error) => notFound(error));
}

function response(data){
    console.log(data);
    document.querySelector('.temp').textContent = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%<sup>💧</sup>";
    document.querySelector('.wind').textContent = data.wind.speed + " km/h";

    let weather = data.weather[0].main;

    changeIcon(weather);
}

function changeIcon(weather){
    if(weather == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(weather == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(weather == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(weather == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(weather == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(weather == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(weather == "Haze"){
        weatherIcon.src = "images/haze.png";
    }
}

function notFound(error){
    document.querySelector('.temp').textContent = "";
    document.querySelector('.city').textContent = "Not found";
    document.querySelector('.humidity').textContent = "";
    document.querySelector('.wind').textContent = "";
}

search();