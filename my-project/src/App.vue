<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{message}}</p>
    <SelectMag/>
  </div>
</template>

<script>
import SelectMag from './components/SelectMag/index'

export default {
  name: 'App',
  data () {
    return {
      message: 'Your are on BOSS'
    }
  },
  components: {
    SelectMag
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
