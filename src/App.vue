<template>
  <div id="app">
    <about></about>
  </div>
</template>

<script>
import resume from './components/resume'
import about from './components/about'
export default {
  name: 'app',
  components: {
      resume, about
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
