<template>
  <div class="content">
    <h1>竞赛中心</h1>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="公开赛" name="first">
        <el-col :span="24" v-for="o in 5" :key="o" :offset="0" style="margin-bottom: 5px">
          <el-card :body-style="{ padding: '5px'}">
            <el-row>
              <el-col :span="3">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              </el-col>
              <el-col :span="21">
                <div style="padding: 5px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="内部赛" name="second">
        <h1>这里是全部的内部赛</h1>
      </el-tab-pane>
      <el-tab-pane label="已报名" name="third">
        <h1>这里是全部的已报名赛事</h1>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'CompetitionView',
  data() {
    return {
      activeName: 'first',
      currentDate: new Date()
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.content{
  border: 0.5px solid #565656;
  width: 98%;
  margin: 10px auto;
}
.content h1{
  text-align: center;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100px;
  height: 100px;
  display: block;
  padding: 15px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>