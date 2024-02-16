<script>
import HomeComponent from '../components/HomeComponent.vue'
const tg = window.Telegram.WebApp


export default {
  name: "HomeView",
  components: {
    HomeComponent
  },
  data() {
    return {}
  },
  mounted() {
    tg.expand()

    tg.MainButton.setParams({
        text: 'Получить карточку'
    })
  },
  beforeUnmount() {
    tg.offEvent('mainButtonClicked', closeTgWindow)
  },
  methods: {
    changeTgButtonState(state) {
      if (state) {
        tg.MainButton.show()
        tg.onEvent('mainButtonClicked', closeTgWindow)
      } else {
        tg.MainButton.hide()
        tg.offEvent('mainButtonClicked', closeTgWindow)
      }
    },
    closeTgWindow() {
      tg.close()
    },
  },
}

</script>

<template>
  <main>
    <HomeComponent @change-tg-button-state="changeTgButtonState" />
  </main>
</template>
