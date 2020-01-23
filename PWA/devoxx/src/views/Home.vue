<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world :msg="'hello boss'"></hello-world>
    <speaker v-for="speaker in speakers" :key="speaker.uuid" :speaker="speaker"></speaker>
  </div>
</template>

<script>
// @ is an alias to /src
import Speaker from '@/components/Speaker.vue'
import axios from 'axios'
import HelloWorld from '../components/HelloWorld';

export default {
  name: 'home',
  data() {
    return {
      speakers: null
    }
  },
  components: {
    HelloWorld,
    Speaker
  },
  mounted() {
    axios
    .get('https://cfp.devoxx.fr/api/conferences/DevoxxFR2019/speakers')
    .then(res => {
      this.speakers = res.data
    })
  }

}
</script>
