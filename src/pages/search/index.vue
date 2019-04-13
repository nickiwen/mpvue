<template>
    <div>
        <ShopListView :listData="listData" />
    </div>
</template>
<script>

import store from '../../store'
import ShopListView from "@/components/ShopListView"

export default {
    name:"search",
    data(){
        return{
            cityName:"",
            searchContent:"",
            listData:[],
            hasMore:false
        }
    },
    onLoad(option) {
        // 搜索内容
        this.searchContent = option.content
        // 城市信息
        this.cityName = store.state.cityName
    },
    components:{
        ShopListView
    },
    mounted(){
        this.http();
    },
    methods:{
        http(){
            let _this = this;
            wx.request({
                url: this.Config.G_URL + '/api/search', // 仅为示例，并非真实的接口地址
                data:{
                    content:this.searchContent,
                    city:this.cityName
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success(res) {
                    _this.hasMore = res.data.hasMore,
                    _this.listData = _this.listData.concat(res.data.data);
                }
            })
        }
    },
    onReachBottom(){
        if(this.hasMore){
            this.http();
        }else{
            wx.showToast({
                title: '暂无数据',
                icon: 'success',
                duration: 2000
            })
        }
       
    }
}
</script>
<style scoped>
    
</style>