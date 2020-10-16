import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        async fetcWeather({ commit }, country) {
            const settings = {
                country,
                key: "91e31a0cc639628b0e85baa5126f0d35"
            };
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${settings.country}&appid=${settings.key}`);
            const weather = await res.json();
            commit("updateWeather", weather)
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
        },
        getCelcius(state) {
            let temp = state.weather.main.temp;
            const fToCel = temp-273.15;
            return fToCel.toFixed(0);
        }
    }
})
