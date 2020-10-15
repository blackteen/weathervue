export default {
    actions: {
        async fetcWeather(ctx) {
            const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=91e31a0cc639628b0e85baa5126f0d35');
            const weather = await res.json();
            console.log(weather)
            ctx.commit("updateWeather", weather)
        }
    },
    mutations: {
        updateWeather(state, weather) {
            state.weather = weather
        }
    },
    state: {
        weather: []
    },
    getters: {
        getWeather(state) {
            return state.weather
        }
    }
}