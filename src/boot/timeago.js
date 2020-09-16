import VueTimeago from 'vue-timeago'
import Vue from 'vue';
import enUS from 'date-fns/locale/en'
import zhCN from 'date-fns/locale/zh_cn'

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en-us', // Default locale
  locales: {
    'es-us': enUS,
    'zh': zhCN
  }
})
