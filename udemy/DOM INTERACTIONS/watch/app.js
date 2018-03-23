new Vue({
el: "#app",
data: {
  counter: 0
},
watch: {
  counter: function(value) {
    const vm = this;
    setTimeout(function(){
      vm.counter = 0
    },2000)
  }
}

})
