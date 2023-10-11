<template>
  <div>
    <HeaderComp></HeaderComp>
    <router-view></router-view>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import HeaderComp from "@/components/HeaderComp.vue";
export default {
  name: 'App',
  components: {HeaderComp},
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
