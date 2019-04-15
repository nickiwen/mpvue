# livable

> A Mpvue project

## 技术点
1. 底部导航(tabBar)
2. swiper
3. 位置获取
4. 腾讯地图lbs
5. 搜索功能
6. 页面跳转
7. mock处理数据
8. 上拉加载
9. tab切换
10. 个人信息获取
11. Vuex共享城市信息

## 存在问题
1. swiper无法显示导航点


## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev
cd mock
node index.js

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

