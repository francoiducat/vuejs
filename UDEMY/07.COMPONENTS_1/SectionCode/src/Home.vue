<template>
  <div class="container">
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>

import ServerStatus from './ServerStatus.vue';

// Local component
export default {
  components: {
    'app-server-status': ServerStatus
  }
}
</script>

<styles></styles>
