const app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to Vue.js ! ',
    ok:true,
    show:false,
    items: [
      { message: 'foo'},
      { message: 'bar'}
    ],
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 34
    },
    numbers: [1,2,3,4,5]
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  }
})
