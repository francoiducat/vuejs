
Vue.component('todo-item', {
  template: '<li>this is a todo item</li>'
})

Vue.component('todo-item-dynamic', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
