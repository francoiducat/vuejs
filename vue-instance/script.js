const app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to Vue.js ! ',
    html: '<span>some text<span>'
  },
  created: function() {
      // `this` points to the vm instance
      console.log('instance created. Message is: ' + this.message)
  },
  computed: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('')
    }
  }
})
