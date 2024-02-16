<script>
import HomeComponent from '../components/HomeComponent.vue'
import { ElNotification } from 'element-plus'
import { tg } from '../useTelegram'


export default {
  name: "HomeView",
  components: {
    HomeComponent
  },
  data() {
    return {}
  },
  mounted() {
    tg.ready()
    tg.expand()

    tg.MainButton.setParams({
        text: 'Получить карточку'
    })

    tg.onEvent('mainButtonClicked', closeWindow)
  },
  beforeUnmount() {
    tg.offEvent('mainButtonClicked', closeWindow)
  },
  methods: {
    changeTgButtonState(state) {
      if (state) {
        tg.MainButton.show()
      } else {
        tg.MainButton.hide()
      }
    },
    closeTgWindow() {
      console.log('clicked')
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
