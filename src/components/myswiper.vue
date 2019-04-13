<template>
    <div>
        <swiper :indidatorDots="indicatorDots" :autoplay="autoplay" :circular="circular">
            <block :key="index" v-for="(item,index) in imgUrls">
                <swiper-item>
                    <image :src="item" class="slide-image"/>
                </swiper-item>
            </block>
        </swiper>
    </div>
</template>
<script>
export default {
    name:"MySwiper",
    data(){
        return{
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000,
            circular: true
        }
    },
    props:{
        imgUrls:{
            type:String,
            default:function(){
                return []
            }
        }
    }
}
</script>
<style scoped>

image{
    width:100%;
}
    
</style>