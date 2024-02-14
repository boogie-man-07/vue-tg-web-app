<script>
import HomeComponent from '../components/HomeComponent.vue'



export default {
  name: "HomeView",
  components: {
    HomeComponent
  },
  data() {
    return {
      tg: null
    }
  },
  mounted() {
    tg = window.Telegram.WebApp
    tg.expand()
  },
  methods: {
    changeTgButtonState(state) {
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
