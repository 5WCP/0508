<script>
export default {
    data() {
        return {
            sourseData:""
        }
    },
    methods: {
        push() {
            this.$emit("emitPush", this.sourseData);
        }
    }
}
</script>

<template>
    <div class="form">
        <p>{{ sourseData }}</p>
        <form>
            <input type="text" v-model="sourseData">
            <button type="button" @click="push">Click</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .form {
        border: 2px solid black;
        padding: 4rem;
    }
</style>