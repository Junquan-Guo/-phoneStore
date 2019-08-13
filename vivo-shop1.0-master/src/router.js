import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/home'
import Choose from '@/views/choose'
import Parts from '@/views/parts'

import Classify from '@/views/Classify/classify'
import GoodDetail from '@/views/Detail/goodDetail'
import Change from '@/views/Detail/change'
import Pay from '@/views/Pay/pay'
import Success from '@/components/success'

import News from '@/views/News/news'
import NewsDetail from '@/views/News/newsDetail'

import My from '@/views/My/my'
import MyCollection from '@/views/My/myCollection'
import Cart from '@/views/Cart/cart'
import Address from '@/views/address'
import AddAddress from '@/views/add_address'
import Order from '@/views/order'
import OrderDetails from '@/views/orderDetails'
import Author from '@/views/author'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home }, // 首页
    { path: '/home', name: 'Home', component: Home, meta: { index: 1 } },
    { path: '/choose', name: 'Choose', component: Choose }, // 选购手机
    { path: '/parts', name: 'Parts', component: Parts }, // 选购配件

    { path: '/classify', name: 'Classify', component: Classify }, // 商品分类
    { path: '/goodDetail', name: 'GoodDetail', component: GoodDetail, meta: { index: 0 } }, // 商品详情
    { path: '/change', name: 'Change', component: Change }, // 手机以旧换新
    { path: '/pay', name: 'Pay', component: Pay }, // 结算
    { path: '/success', name: 'Success', component: Success }, // 购买成功

    { path: '/news', name: 'News', component: News }, // 咨询动态
    { path: '/newsdetail', name: 'NewsDetail', component: NewsDetail }, // 咨询详情

    { path: '/my', name: 'My', component: My }, // 个人中心
    { path: '/myCollection', name: 'MyCollection', component: MyCollection }, // 我的收藏
    { path: '/cart', name: 'cart', component: Cart }, // 购物车
    { path: '/address', name: 'Address', component: Address }, // 管理收货地址
    { path: '/add_address', name: 'Add_address', component: AddAddress }, // 新增地址
    { path: '/order', name: 'Order', component: Order, children: [{ path: '/order/orderDetails', name: '/order/orderDetails', component: OrderDetails }]
    }, // 我的订单
    { path: '/orderDetails', name: 'OrderDetails', component: OrderDetails }, // 订单详情
    { path: '/author', name: 'Author', component: Author } // 关于我

  ]
})
