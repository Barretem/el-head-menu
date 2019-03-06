import {configure} from '@storybook/vue'

import Vue from 'vue'
import axios from 'axios'

// Import your component
import Component from '../src/index'

// Register your component
Vue.component('el-head-menu', Component)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories')
}

// 发送请求的能力
Vue.prototype.$axios = axios

configure(loadStories, module)
