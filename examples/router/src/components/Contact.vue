<template>
  <div class="contact">
    <div class="sub-sidebar contact-sub-sidebar">
      <router-link to="/contact/me">contact me</router-link>
      <router-link to="/contact/him">contact him</router-link>
      <router-link to="/contact/her">contact her</router-link>
    </div>
    <router-view class="sub-main"></router-view>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>