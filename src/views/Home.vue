<template>
  <div>
    <Search v-on:input-change="getData($event)"/>
    <div class="weather-post" v-for="item in getWeather.weather" :key="item.id">
      <p>Sity: {{ getWeather.name }}</p>
      <p>
        Weather:
        {{ item.main }}
      </p>
      <p>
        Description:
        {{ item.description }}
      </p>
      <img :src="getImgUrl(item.icon)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Search from "@/components/Search"

export default {
  name: "Home",
    components: {
    Search
  },
  data() {
    return {
      datas: ""
    }
  },
  computed: mapGetters(["getWeather", "getLenght"]),
  methods: {
    ...mapActions(["fetcWeather"]),
    getImgUrl(pic) {
      return `http://openweathermap.org/img/wn/${pic}@2x.png`;
    },
     getData(data){
      this.datas = data 
      this.fetcWeather(this.datas);
    }
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.weather-post {
  border: 1px solid #111;
  padding: 10px;
  margin-bottom: 10px;
}
</style>