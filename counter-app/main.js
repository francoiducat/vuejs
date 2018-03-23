new Vue({
  el: "#app",
  data: {
    firstname: 'francois',
    activity: '',
    activities: ['boss-back', 'boss-front']
  },
  methods: {
    changeName: function() {
      // do something
    },
    createNewActivity: function(event){
      this.activity = event.target.value
      console.log(activities)
      activities.push(activity);
    }
  }
})
