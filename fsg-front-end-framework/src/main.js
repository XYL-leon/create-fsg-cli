import { createApp } from 'vue'
import website from './config/website'
import axios from './axios';
import router from './router/';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@smallwei/avue/lib/index.css';
import { getScreen } from './utils/util'
import './permission';
import avueUeditor from 'avue-plugin-ueditor'
import App from './App.vue'
import 'animate.css'
import dayjs from 'dayjs'
import 'styles/common.scss';
import { createPinia } from 'pinia'
import SvgIcon from "./components/SvgIcon/index.vue";
import "virtual:svg-icons-register";

window.axios = axios;
const app = createApp(App)

app.component("svg-icon", SvgIcon);
app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.website = website
app.config.globalProperties.getScreen = getScreen
app.use(router)
app.use(ElementPlus)
app.use(avueUeditor, { axios })

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
