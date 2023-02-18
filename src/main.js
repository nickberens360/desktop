import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './index.css'
// const pinia = createPinia()
// pinia.use(createPersistedState({
//   auto: true,
// }))


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')