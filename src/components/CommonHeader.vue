<template>
  <!-- 顶部header区域 -->
  <div class="header-container">
    <div class="l-contetn">
      <!-- 
        size 控制大小
       -->
      <el-button icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <!-- 面包屑 -->
      <span class="text">首页</span>
    </div>
    <div class="r-contetn">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="https://xiaodongxier.com/favicon.ico" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  methods: {
    handleMenu () {
      this.$store.commit('collapseMenu')
      console.log(this.$store)
    }
  }
}
</script>

<style scoped lang="less">
.header-container {
  display: flex;
  height: 60px;
  background: #333;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .text {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }

  .r-contetn {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>