<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeView from "@/views/HomeView.vue"

export default {
  name: "App",
  components: {
    HomeView
  },
  data() {
    return {}
  },
};
</script>
