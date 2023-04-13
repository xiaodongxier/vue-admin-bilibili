<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <h3>{{isTitle}}</h3>
      <el-menu-item :index="item.name" v-for="item of noChildren" :key="item.name" @click="clickMenu(item)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <!-- 二级菜单 -->
      <el-submenu :index="item.label"  v-for="item of hasChildren" :key="item.label">
        <template slot="title">
          <i :class="`el-icon-${item.icon}` "></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="subItem of item.children" :key="subItem.lable">
          <el-menu-item :index="subItem.name"  @click="clickMenu(subItem)">{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: false,
      menuDate: [{
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      },
      {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon: 'video-play',
        url: 'MallManage/MallManage'
      },
      {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'user',
        url: 'UserManage/UserManage'
      },
      {
        label: '其他',
        icon: 'location',
        children: [
          {
            path: '/page1',
            name: 'page1',
            label: '页面1',
            icon: 'setting',
            url: 'Other/PageOne'
          },
          {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon: 'setting',
            url: 'Other/PageTwo'
          }
        ]
      }]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      console.log(item.path,this.$route.path)
      if(item.path !== this.$route.path && !(item.path == '/' && this.$route.path=='/home')) {
        console.log("ddd")
        this.$router.push(item.path)
      }
    }
  },
  computed: {
     noChildren() {
      return this.menuDate.filter(item => !item.children)
     },
     hasChildren() {
      return this.menuDate.filter(item => item.children)
     },
     isCollapse() {
      return this.$store.state.tab.isCollapse
     },
     isTitle() {
      return this.isCollapse ? '后台' : '后台管理系统'
     }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
