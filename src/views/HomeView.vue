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
    this.tg.ready()
    this.tg.expand()

    this.tg.MainButton.setParams({
        text: 'Получить карточку'
    })

    this.tg.onEvent('mainButtonClicked', closeTgWindow)
  },
  beforeUnmount() {
    this.tg.offEvent('mainButtonClicked', closeTgWindow)
  },
  methods: {
    changeTgButtonState(state) {
      if (state) {
        this.tg.MainButton.show()
      } else {
        this.tg.MainButton.hide()
      }
    },
    closeTgWindow() {
      ElNotification.warning({
        title: 'Внимание',
        message: 'Кнопка не закрыла окно',
        showClose: true
      })
      this.tg.close()
    },
  },
}

</script>

<template>
  <main>
    <HomeComponent @change-tg-button-state="changeTgButtonState" />
  </main>
</template>
