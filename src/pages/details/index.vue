
<template>
    <div>
        <MySwiper :imgUrls="goodsDetails.imgs" />
        <view class="swiper-tab">
            <view :class="['swiper-tab-item',currentTab==0?'active':'']" data-current="0" @click="clickTab">商品详情</view>
            <view :class="['swiper-tab-item',currentTab==1?'active':'']" data-current="1" @click="clickTab">商品评价</view>
        </view>
        <swiper :current="currentTab" duration="300"  @change="swiperTab">
            <swiper-item>
                <view>
                    <p v-html="goodsDetails.title"></p>
                    <p>房屋大小：{{ goodsDetails.houseType }}</p>
                    <p>房租：{{ goodsDetails.price }}</p>
                    <p>租售方式：{{ goodsDetails.rentType }}</p>
                </view>
            </swiper-item>
            <swiper-item>
                <view>
                    商品评价
                </view>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import MySwiper from '@/components/myswiper';
export default {
    name:"Details",
    data(){
        return{
            goodsId:"",
            currentTab: 0,
            goodsDetails:{}
        }
    },
    components:{
        MySwiper
    },
    onLoad(option) {
        // 获取id
        this.goodsId = option.id;
    },
    mounted(){
        var _this = this;
        wx.request({
            url: this.Config.G_URL + '/api/details', // 仅为示例，并非真实的接口地址
            data:{
                id:this.goodsId
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                console.log(res.data);
                _this.goodsDetails = res.data
            }
        })
    },
    methods:{
        swiperTab: function (e) {
            this.currentTab = e.mp.detail.current
        },
        //点击切换
        clickTab: function (e) {
            var that = this;
            if (this.currentTab === e.target.dataset.current) {
                return false;
            } else {
                this.currentTab = e.target.dataset.current
            }
        }
    }
}
</script>
<style scoped>

.swiper-tab{
    width: 100%;
    border-bottom: 2rpx solid #ccc;
    text-align: center;
    height: 88rpx;
    line-height: 88rpx;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}
.swiper-tab-item{
    width: 50%; 
    color:#434343;
}
.active{
    color:#F65959;
    border-bottom: 4rpx solid #F65959;
}
swiper{
  text-align: center;
}

</style>