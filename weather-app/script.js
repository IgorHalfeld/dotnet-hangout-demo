const API_KEY = 'd4ba1a8fb0a181f0e59a6f3f60abf6a5'
const API_URI = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`

const mountLatLon = (navigator) => {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords
      resolve(`&lat=${latitude}&lon=${longitude}`)
    })
  })
}

export default {
  name: 'WeatherApp',
  data: () => ({
    isLoading: false,
    temp: {
      current: 0,
      max: 0,
      min: 0
    }
  }),
  methods: {
    loadWeather () {
      this.isLoading = true
      mountLatLon(window.navigator)
        .then(query => API_URI + query)
        .then(url => fetch(url))
        .then(res => res.json())
        .then(json => {
          this.temp.current = json.main.temp.toFixed(0)
          this.temp.max = json.main.temp_max
          this.temp.min = json.main.temp_min
          this.isLoading = false
        })
    }
  }
}