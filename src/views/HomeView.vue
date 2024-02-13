<script>
import HomeComponent from '../components/HomeComponent.vue'



export default {
  name: "HomeView",
  components: {
    HomeComponent
  },
  data() {
    return {
    }
  },
  mounted() {
    const tg = window.Telegram.WebApp
    tg.expand()
  }
}

</script>

<template>
  <main>
    <HomeComponent />
  </main>
</template>
