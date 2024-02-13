<script>
import { useTelegram } from '@/useTelegram';
import HomeComponent from '../components/HomeComponent.vue'



export default {
  name: "HomeView",
  data() {
    return {
      
    }
  },
  mounted() {
    const tg = useTelegram()
    tg.expand()
  }
}

</script>

<template>
  <main>
    <HomeComponent />
  </main>
</template>
