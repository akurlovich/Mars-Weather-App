
const API_KEY = 'Ar5hQLuopeKjrtp5xYZlmw7btBxDYgrSV9c3sCsN';
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

// Where the cool stuff happens


// Change this if you need to
const previousWeatherToggle = document.querySelector('.show-previous-weather');

const previousWeather = document.querySelector('.previous-weather')

previousWeatherToggle.addEventListener('click', () => {
    previousWeather.classList.toggle('show-weather')
} )

function getWeather () {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const {
        sol_keys,
        validity_checks,
        ...solData

      } = data
      // console.log(data)
      const temp = Object.entries(solData).map(([sol, data]) => {
        sol: sol;
        maxTemp: data.AT.mx;
        minTemp: data.AT.mn;
        windSpeed: data.HWS.av;
        windDirectionDegrees: data.WD.most_common.compass_degrees;
        windDirectionCardinal: data.WD.most_common.compass_point;
        data: new Data(data.First_UTC);
      })
      console.log(temp);
    })
}
getWeather();