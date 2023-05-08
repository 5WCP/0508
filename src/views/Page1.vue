<script>
export default {
    data() {
        return {
            isRounded: false,
            imgArr:[
                "https://th.bing.com/th/id/R.5646c2ad3904049fab8b7e3760240dcc?rik=MKons4nY4hBZYw&pid=ImgRaw&r=0",

                "https://www.bing.com/th/id/OGC.af54579534b179ae5b6e708e68864069?pid=1.7&rurl=https%3a%2f%2fstatic.wixstatic.com%2fmedia%2f609d8c_597b5193756745adaee81eef54a24e29%7emv2.gif&ehk=448Q9W3xlodyQJQJtxz1CyzPdOy83ahKn%2bp%2bbxdssQQ%3d",

                "https://th.bing.com/th/id/R.648c2cd959df3d145c285006357df099?rik=v3SNQ7qsKQMmBg&pid=ImgRaw&r=0",

                "https://www.bing.com/th/id/OGC.8e05222b86a1308bae4afc9722a0a115?pid=1.7&rurl=https%3a%2f%2fstatic.wixstatic.com%2fmedia%2f609d8c_0e42fc66d5dc409bb54d14066c3313bb%7emv2.gif&ehk=JspAVg4KT2uynuzylC271i6zWsU4ycbdn%2fQiXk83Jyk%3d",

                "https://th.bing.com/th/id/R.cd4642a519149b13c8496ebdd54c4deb?rik=xF1vZiqW57hoIg&pid=ImgRaw&r=0",

                "../../public/img/Capoo1.gif",

                "../../public/img/Capoo2.gif"
            ],
            imgNum: 0
        }
    },

    methods: {
        changeRounded() {
            this.isRounded = !this.isRounded;
        },

        changeImg() {
            if(this.imgNum < (this.imgArr.length) - 1) {
                ++this.imgNum;
            }
            else {
                this.imgNum = 0;
            }
        }
    }
}
</script>

<template>
    <div class="area">
        <p>我是分頁1</p>
        <button @click="changeRounded">別案</button>
        <div class="box" v-bind:class="{rounded: isRounded}"></div>
    </div>
    <img v-bind:src="imgArr[imgNum]">
    <button @click="changeImg">changeImg</button>
</template>

<style lang="scss" scoped>
    
    .area {
        position: relative;
        width: 500px;
        height: 500px;
    }
    .box {
        height: 200px;
        width: 200px;
        background-color: #0c0909;
        transition: 0.6s;
        position: absolute;
        bottom: 0;
    }

    .rounded {
        border-radius: 2rem;
        bottom: 50px;
    }
</style>