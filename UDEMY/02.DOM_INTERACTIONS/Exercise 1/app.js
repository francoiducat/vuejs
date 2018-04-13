new Vue({
  el: "#exercise",
  data: {
    name: 'François',
    age: '34',
    src: 'http://cdn3-www.cattime.com/assets/uploads/gallery/32-impossibly-cute-kittens/cute-kitten-23.jpg'
  },
  methods: {
    random: function() {
      const rand = Math.floor(Math.random()*10);
      console.log(rand);
    }
  }
});
