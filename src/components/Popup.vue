<script>
export default {
    props: [
        "title",
        "content"
    ],
    methods: {
        changeShowOutside() {
            this.$emit("switch")
        }
    },
    
}
</script>

<template>
    <div class="modal">

        <div class="card">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <button @click="changeShowOutside">還不關掉</button>
        </div>

        <div class="bg"></div>
    </div>
</template>

<style lang="scss" scoped>
    .modal {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .card {
            background-color: #fff;
            width: 250px;
            border-radius: 5px;
            padding: 6px 8px;

            h2 {
                margin: 0;
            }
        }

        .bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0a0808;
            opacity: 0.5;
            z-index: -1;
        }
    }
</style>