import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'

// register global components (Navbar, Footer)
import Navbar from './components/navbar.vue'
import AppFooter from './components/footer.vue'

const app = createApp(App)
app.component('Navbar', Navbar)
app.component('AppFooter', AppFooter)
app.use(router).mount('#app')