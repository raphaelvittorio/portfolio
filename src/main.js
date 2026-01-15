import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
    faReact, 
    faLaravel, 
    faPhp, 
    faVuejs,
    faJs,
    faNodeJs,
    faCss3Alt,
    faAndroid,
    faGitAlt,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import { 
    faMobileScreen, 
    faCode, 
    faDatabase, 
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faReact, faLaravel, faPhp, faVuejs, faJs, faNodeJs, faCss3Alt, faAndroid, faGitAlt, 
    faGithub, faLinkedin, // <-- Jangan lupa didaftarkan di sini
    
    faMobileScreen, faCode, faDatabase, faEnvelope 
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')