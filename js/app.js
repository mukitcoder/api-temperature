document.getElementById('spinner').style.display = 'none';

const searchCity = () => {
    const city = document.getElementById('search-name');
    const cityName = city.value;
    city.value = '';
    // Spinner-Display
    document.getElementById('spinner').style.display = 'block';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=fee19ad4428d20136a665cbda76a0e1d&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    // spinner-hidden
    document.getElementById('spinner').style.display = 'none';
    // City Temperature Details
    setInnerText('city-name', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('temperature-condition', temperature.weather[0].main);
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}