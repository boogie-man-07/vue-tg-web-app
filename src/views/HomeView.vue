<template>
  <main>
    <el-text>{{ chatData }}</el-text>
    <HomeComponent @change-tg-button-state="changeTgButtonState" @set-selected-item-id="setSelectedItemId" />
  </main>
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue'
// import SendService from '../services/send.service'

export default {
  name: "HomeView",
  components: {
    HomeComponent
  },
  data() {
    return {
      chatData: {},
      selectedItemId: 0
    }
  },
  mounted() {
    const tg = window.Telegram.WebApp
    this.chatData = tg.initData

    tg.MainButton.setParams({
        text: 'Получить карточку',
        color: '#0D488C'
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
      this.selectedItemId = id
    },
    send() {
      const tg = window.Telegram.WebApp;
      this.chatData = tg.initDataUnsafe;
    },
    // send() {
    //   const data = {
    //       cardId: this.selectedItemId
    //   };
    //   const tg = window.Telegram.WebApp
    //   tg.sendData(JSON.stringify(data))
    //   // SendService.sendCard(tg.initDataUnsafe?.query_id, this.selectedItemId)
    //   tg.close()
    // },
  },
}

</script>