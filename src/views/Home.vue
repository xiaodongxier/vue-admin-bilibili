<template>
  <div class="home">
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.grid-content {
  border: 1px solid red;
}
</style>