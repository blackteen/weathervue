<template>
  <div>
    <input v-model="value"/>
    <button @click="sendData()">Search</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    sendData() {
      this.$emit("input-change", this.value);
    },
  },
};
</script>