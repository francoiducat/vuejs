<template>
<div class="component">
  <h3>You may view the User Details here</h3>
  <p>Many Details</p>
  <p>User Name : {{ switchName() }} </p>
  <button type="button" name="button" @click="resetName">ResetName</button>
</div>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      default: "Max"
      //required: true,
    }
  },
  methods: {
    switchName() {
      return this.firstName.split("").reverse().join("")
    },
    resetName() {
      this.firstName = "Max";
      this.$emit('nameWasReset', this.firstName);
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
