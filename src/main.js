// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import about from './components/about'
import resume from './components/resume'
import studioC from './components/studioC'
import contact from './components/contact'
import todo from './components/todo'
import ads from './components/ads'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: about},
    {path: '/resume', component: resume},
    {path: '/studioC', component: studioC},
    {path: '/contact', component: contact},
    {path: '/todo', component: todo},
    {path: '/ads', component: ads}
  ]
});
/* eslint-disable no-new */
new Vue({
router, 
template: `
  <div id="app">
    <h1>Jonny Vance</h1>
      <router-link to="/">about</router-link>
      <router-link to="/ads">ads</router-link>
      <router-link to="/studioC">studio c</router-link>    
      <router-link to="/resume">resume</router-link>  
      <router-link to="/contact">contact</router-link>
      <router-link to="/todo">to do</router-link>             
      <hr />
    <router-view class="view"></router-view>
  </div>
`,
}) .$mount('#app')
