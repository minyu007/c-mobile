import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index'
import Btn from '@/views/btn'
import Flex from '@/views/flex'
import Header from '@/views/header'
import Switch from '@/views/switch'
import InputGroup from '@/views/input-group'
import Icon from '@/views/icon'
import Tab from '@/views/tab'
import Tabbar from '@/views/tabbar'
import Toast from '@/views/toast'
import Confirm from '@/views/confirm'
import Actionsheet from '@/views/actionsheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/btn',
      component: Btn
    },
    {
      path: '/flex',
      component: Flex
    },
    {
      path: '/header',
      component: Header
    },
    {
      path: '/switch',
      component: Switch
    },
    {
      path: '/input-group',
      component: InputGroup
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/tab',
      component: Tab
    },
    {
      path: '/tabbar',
      component: Tabbar
    },
    {
      path: '/toast',
      component: Toast
    },
    {
      path: '/confirm',
      component: Confirm
    },
    {
      path: '/actionsheet',
      component: Actionsheet
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
