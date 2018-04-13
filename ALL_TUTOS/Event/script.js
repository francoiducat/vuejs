const app = new Vue({
  el: '#app',
  data: {
    message: '',
    counter : 0,
    checked:false,
    checkedNames: [],
    picked: '',
    selected: '',
    dynamicSelected:'',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0
      })
    },
    say: function(message) {
      alert(message)
    }
  }
})
