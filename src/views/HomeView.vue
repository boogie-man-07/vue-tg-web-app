<script>
import HomeComponent from '../components/HomeComponent.vue'
import { ElNotification } from 'element-plus'
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
    tg.ready()
    tg.onEvent('mainButtonClicked', closeTgWindow)
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
      } else {
        tg.MainButton.hide()
      }
    },
    closeTgWindow() {
      ElNotification.warning({
        title: 'Внимание',
        message: 'Кнопка не закрыла окно',
        showClose: true
      })
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
