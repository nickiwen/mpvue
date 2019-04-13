import card from '@/components/card';
<template>
    <div>
        <!-- <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">获取权限</button> -->
        <!-- <button open-type="getUserInfo">获取权限</button> -->
        <div class="mine-head">
            <img :src="userInfo.avatarUrl" alt="">
            <p>{{ userInfo.nickName }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"Mine",
    data(){
        return{
            userInfo:{}
        }
    },
    mounted(){
        // 一进来看看用户是否授权过
        this.getSetting()
    },
    methods:{
        getSetting(){
            var _this = this;
            wx.getSetting({
                success: function(res){
                    if (res.authSetting['scope.userInfo']) {
                        wx.getUserInfo({
                            success: function(res) {
                                console.log(res.userInfo);
                                _this.userInfo = res.userInfo
                                //用户已经授权过
                                console.log('用户已经授权过')
                            }
                        })
                    }else{
                        console.log('用户还未授权过')
                    }
                }
            })
        },
        // getUserInfo1(){
        //     console.log('click事件首先触发')
        //     // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
        //     // console.log(wx.canIUse('button.open-type.getUserInfo'))
        //     if(wx.canIUse('button.open-type.getUserInfo')){
        //         // 用户版本可用
        //     }else{
        //         console.log('请升级微信版本')
        //     }
        // },
        // bindGetUserInfo(e) {
        //     // console.log(e.mp.detail.rawData)
        //     if (e.mp.detail.rawData){
        //         //用户按了允许授权按钮
        //         console.log('用户按了允许授权按钮')
        //     } else {
        //         //用户按了拒绝按钮
        //         console.log('用户按了拒绝按钮')
        //     }
        // }
    }
}
</script>
<style scoped>
    
.mine-head{
    width: 100%;
    height: 200px;
    text-align: center;
    background: #ff5555;
}

.mine-head img{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    margin-top: 50px;
}

.mine-head p{
    font-size: 15px;
    color: #fff;
}

</style>