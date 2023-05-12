<script>
    export default {
        props: [
            "title",
            "imgData"
        ],
    }
</script>

<template>
    <div class="card">
        <img :src="imgData" :alt="title">
        <h2>{{ title }}</h2>
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati, voluptate enim, officia quibusdam tempora incidunt</p> -->
    </div>
</template>

<style>
    .card {
        width: 350px;
        height: 399px;
        border: 1px solid black;
        background-color: rgba(167, 128, 128, 0.1);
        box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        text-align: center;
    }
</style>