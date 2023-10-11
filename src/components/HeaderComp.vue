<template>
  <div id="app">
    <el-header id="header" height="60px">
      <el-col :span="3" :offset="2"><a href="/" id="logo">CTF???</a></el-col>
      <el-col :span="15" id="nav">
        <ul>
          <li><router-link to="/">比赛</router-link></li>
          <li><router-link to="/course">课程</router-link></li>
        </ul></el-col>
      <el-col :span="4">
        <div class="block">
          <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
              <el-avatar  slot="reference" :size="40" :src="circleUrl"></el-avatar>
          </el-popover>
<!--          <el-avatar :size="40" :src="circleUrl"></el-avatar>-->
        </div>
      </el-col>
    </el-header>
  </div>
</template>

<script>

export default {
  name: 'HeaderComp',
  data() {
    return {
      circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: cornflowerblue;
}

#logo{
  color: white;
  height: 60px;
  display: block;
  line-height: 60px;
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;
}
#nav{
  height: 60px;
}
#nav ul{
  float: left;
  list-style: none;
  padding: 0;
}
#nav li{
  display: inline;
}
#nav a{
  text-decoration: none;
  padding: 20px 20px;
  font-size: 18px;
  color: white;
}
#nav a:hover{
  color: white;
}
.block{
  padding: 10px 10px;
}
</style>
