<template>
  <main>
    <HomeComponent @change-tg-button-state="changeTgButtonState" @set-selected-item-id="setSelectedItemId" />
  </main>
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue'
import SendService from '../services/send.service'

export default {
  name: "HomeView",
  components: {
    HomeComponent
  },
  data() {
    return {
      selectedItemId: 0
    }
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
    setSelectedItemId(id) {
      this.selectedItemid = id
    },
    send() {
      SendService.sendCard(this.selectedItemid)
      const tg = window.Telegram.WebApp
      tg.close()
    },
  },
}

</script>