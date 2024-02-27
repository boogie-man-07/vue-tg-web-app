<script>
import HomeComponent from '../components/HomeComponent.vue'
import SendService from '../services/send.service'

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
    

    tg.MainButton.setParams({
        text: 'Получить карточку'
    })
    tg.MainButton.onClick(this.send)

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
    },
    send() {
      SendService.sendCard()
      const tg = window.Telegram.WebApp
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
