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
  margin-top: 0;
  font-family: 'Raleway', sans-serif;
  color: #565656;
  text-align: center;
}

a:-webkit-any-link {
  color: white;
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D7CEC7;
  padding: 1.1em 3em;
  font-size: 1.2em;
}
#name {
  display: flex;
  flex-direction: column;
  line-height: 3.1em;
  font-size: 2.2rem;
  color: #76323F;
  font-family: 'Baloo', cursive;
  padding: 1.3rem 0;

}
h1 {
  margin: 0;
}
</style>
