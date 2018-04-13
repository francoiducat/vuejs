<template>
<p>
  Server status : {{status}}
</p>
<hr>
<button @click="changeStatus">Change Status</button>
</template>

<script>

export default {
  data() {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus() {
      this.status = 'Normal'
    }
  }
}</script>

<styles></styles>
