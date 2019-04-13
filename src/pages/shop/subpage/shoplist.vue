<template>
    <div>
        <ShopListView :listData="listData" />
    </div>

</template>
<script>

import ShopListView from "@/components/ShopListView"

export default {
    name:"Shoplist",
    data(){
        return{
            listData:[],
            hasMore:false
        }
    },
    components:{
        ShopListView
    },
    mounted() {
        this.http();
    },
    methods:{
        http(){
            let _this = this;
            // 网络请求
            wx.request({
                url: this.Config.G_URL + '/api/search', // 仅为示例，并非真实的接口地址
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