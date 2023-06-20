import {API_KEY} from './env.js';
// 3
const getCurrentPosition = (latitude,longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

  fetch(URL)
  .then((response) => response.json())
  .then ((data) => {
    const city = document.querySelector('.city')
    const weather = document.querySelector('.weather')
    const temp = document.querySelector('.temp')
    const icon = document.querySelector('.icon')

    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    temp.innerText = `${data.main.temp}°C`;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  })
}

const getPosition = (position) =>{
  const {latitude, longitude} = position.coords; 
  getCurrentPosition(latitude,longitude)
}

const errorHandler = (error) =>{
  console.log(error.message);
  const noti = document.querySelector('.noti');
  noti.style.display='block';
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
}
