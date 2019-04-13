<template>
    <div>
        <HomeHotView v-if="listData.length>0" title="热销商品" :listData="listData" />
        <HomeHotView v-if="listData.length>0" title="热门推荐" :listData="listData2" />
    </div>
</template>
<script>

import HomeHotView from "@/components/HomeHotView"

export default {
    name:"HomeHot",
    data(){
        return{
            listData:[],
            listData2:[]
        }
    },
    components:{
        HomeHotView
    },
    mounted() {
        let _this = this;
        // 网络请求
        wx.request({
            url: this.Config.G_URL + '/api/homehot', // 仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                _this.listData = res.data;
            }
        })

        wx.request({
            url: this.Config.G_URL + '/api/homehot2', // 仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                _this.listData2 = res.data;
            }
        })
    },
}
</script>
<style scoped>
    
</style>