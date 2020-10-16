<template>
    <div>
        <input v-model="value" @input="sendData()">
    </div>
   
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            value : ""
        }
    },
    methods: {
        sendData() {
            this.$emit('input-change', this.value)
        }
    }
}

</script>