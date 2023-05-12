<script>
import Child from "../components/Child.vue";
export default {
    components: {
        Child
    },
    data() {
        return {
            // title: "Props 標題",
            cardData: [
                {
                    "imgData": "../../public/img/Capoo1.gif",
                    "title": "咖波1"
                },
                {
                    "imgData": "../../public/img/Capoo2.gif",
                    "title": "咖波2"
                }
            ]
        }
    }
}
</script>

<template>
    <h2>Props</h2>
    <div class="cardArea">
        <!-- <Child v-bind:childTitle="title" /> -->
        <Child v-for="card in cardData" :imgData="card.imgData" :title="card.title" :key="card.title" />
    </div>
</template>

<style lang="scss" scoped>
.cardArea {
    display: flex;
    justify-content: space-between;
}
</style>