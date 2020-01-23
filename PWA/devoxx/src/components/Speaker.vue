<template>
  <div>
    <p>
      {{ speaker.firstName }}
      {{ speaker.lastName }}
      <img :src="speaker.avatarURL" style="width:10%;height:10%;">
    </p>
  </div>
</template>

<script>
  export default {
    name: "speaker",
    props: {
      speaker: Object
    }
  }
</script>

<style scoped>

</style>
