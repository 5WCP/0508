<script>
import Popup from "../components/Popup.vue";
export default {
    components:{
        Popup
    },
    data() {
        return {
            isShow:false,
            modalInfo: {
                "title": "開玩笑d",
                "content":"你還真的按 =_="
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
    <div class="modal-ex">
        <p>ㄎㄎ</p>
        <button @click="changeShow">可按</button>
    </div>

    <Popup 
    v-show="isShow" 
    @switch="changeShow"
    :title="modalInfo.title"
    :content="modalInfo.content" 
    />
</template>

<style lang="scss" scoped>
    .modal-ex {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>