<script>
import FormView from "../components/Form.vue";
export default {
    components: {
        FormView
    },
    data() {
        return {
            inputText: null
        }
    },
    methods: {
        getPush(sourseData) {
            this.inputText = sourseData;
        }
    }
}
</script>

<template>
    <div class="emit">
        <h2>Emit</h2>
        <p>{{ inputText }}</p>
        <FormView  @emitPush="getPush" />
    </div>
</template>

<style scoped>
    .emit {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: 500px;
    }
</style>