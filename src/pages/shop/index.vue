<template>
    <div>
        <HeadNav />
        <MySwiper :imgUrls="imgUrls" />
        <ShopList />
    </div>
</template>
<script>

import HeadNav from '@/components/headnav'
import MySwiper from "@/components/myswiper"
import ShopList from "./subpage/shoplist.vue"

export default {
    name:"Shop",
    data(){
        return{
            imgUrls:[
                require("../../../static/images/banner5.png"),
                require("../../../static/images/banner6.png")
            ]
        }
    },
    components: {
        HeadNav,
        MySwiper,
        ShopList
    },
}
</script>
<style scoped>
    
</style>