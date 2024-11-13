// @ts-nocheck
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/index.scss'
import './css/custom.css'
import Foo from './components/foo.vue'
import Character from './components/character.vue'
import About from './components/about.vue'
import Api from './components/api.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(Foo),
    })
  },
  enhanceApp({ app }) {
    app.component('Character', Character)
    app.component('About', About)
    app.component('Api', Api)
  }
}
