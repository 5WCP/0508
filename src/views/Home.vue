<script>
import {RouterLink} from "vue-router";
import Popup from "../components/Popup.vue";
export default {
    components: {
        Popup
    },
    data() {
        return {
            isShow:false,
            homeInfo: {
                "title": "....",
                "content":"=_="
            }
        }
    },
    methods: {
        changeShow() {
            this.isShow = !this.isShow;
        }
    }
}
</script>

<template>
    <div>
        <h2>首頁</h2>
        <RouterLink to="/routerView">router-view</RouterLink>
        <button @click="changeShow">請點</button>
    </div>

    <transition name="fade">
        <Popup 
        v-show="isShow" 
        @switch="changeShow"
        :title="homeInfo.title"
        :content="homeInfo.content" 
        />
    </transition>
</template>

<style scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
    }

    .fade-enter-to, .fade-leave-from {
    opacity: 1;
    }

    .fade-enter-from, .fade-leave-to {
    opacity: 0;
    }
</style>