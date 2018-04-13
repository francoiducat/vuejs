const app = new Vue({
  el: '#app',
  data: {
    msg: 'Hi'
  }
})

Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})

const app2 = new Vue({
  el: '#example'
})

const Child = {
  template: '<div>A custom child component!</div>'
}

const app3 = new Vue({
  el:'#app3',
  components: {
    'my-component':Child
  }
})

const data = { counter : 0}

Vue.component ('counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function () {
    return {counter: 0}
  }
})

const app4 = new Vue({
  el:'#app4'
})

Vue.component('child', {
  // declare the props
  props: ['message'],
  // like data, the prop can be used inside templates and
  // is also made available in the vm as this.message
  template: '<p>{{ message }}</p>'
})

const app5 = new Vue({
  el:'#app5'
})
