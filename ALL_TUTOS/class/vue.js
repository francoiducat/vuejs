const app = new Vue({
  el: '#app',
  data: {
    question: '',
    isActive: this.active()
  },
  computed: {
    active: function() {
      return true
    }
  }
})
