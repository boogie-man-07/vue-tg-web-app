<script>
import HomeComponent from '../components/HomeComponent.vue'



export default {
  name: "HomeView",
  components: {
    HomeComponent
  },
  data() {
    return {}
  },
  mounted() {
    const tg = window.Telegram.WebApp
    tg.expand()
  },
  methods: {
    changeTgButtonState(state) {
      const tg = window.Telegram.WebApp
      if (state) {
        tg.MainButton.show()
      } else {
        tg.MainButton.hide()
      }
    }
  },
}

</script>

<template>
  <main>
    <HomeComponent @change-tg-button-state="changeTgButtonState" />
  </main>
</template>
