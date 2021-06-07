import { createApp } from 'vue'
import App from './app.vue'
import './main.css'
import { router } from './pages';
import { i18n } from './translations';
import store from './store';

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(store)
app.mount('#app')
