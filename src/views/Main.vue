<template>
  <div class="main">
    <!-- el -->
    <el-container>
      <!-- <el-aside width="200px"> -->
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <!-- Header -->
          <common-header></common-header>
        </el-header>
        <el-main>
          Main
          <!-- home / user -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
  name: "home1",
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>