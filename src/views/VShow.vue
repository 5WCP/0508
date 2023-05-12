<script>
    export default {
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            change() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<template>
    <div>
        <h2>v-show</h2>
        <div class="boxes">
            <div v-show="isShow" class="box box1"></div>
            <div v-if="isShow" class="box box2"></div>
        </div>
        <button @click="change">change</button>
    </div>
</template>

<style lang="scss" scoped>

    .boxes {
        position: relative;
    }

    .box{
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 3rem;
    }

    .box1 {
        background-color: blue;
        left: 0;
    }

    .box2 {
        background-color: green;
        left: 100px;
    }
</style>