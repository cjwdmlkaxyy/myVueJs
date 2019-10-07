<template>
    <div class="dashboard c-main">
      <el-row>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>欢迎来到管理中心</el-breadcrumb-item>
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row style="padding-top: 10px;">
        <el-breadcrumb>
          <el-breadcrumb-item>仪表盘</el-breadcrumb-item>
          <el-breadcrumb-item>信息聚合中心</el-breadcrumb-item>
          <el-breadcrumb-item>实时展示系统动态</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row style="padding: 40px 0;">
        <el-col :span="6" :lg="6" :xl="6" :md="12" :sm="12" style="padding: 15px;">
          <div class="box box-item1" @mouseenter="displayChart(1)">
            <div>今日访问量</div>
            <div><span class="font-style">140</span><span>(人次)</span></div>
            <div class="text-align-right">查看详细</div>
          </div>
        </el-col>
        <el-col :span="6" :lg="6" :xl="6" :md="12" :sm="12" style="padding: 15px;">
          <div class="box box-item2" @mouseenter="displayChart(2)">
            <div>本月访问量</div>
            <div><span class="font-style">1500</span><span>(人次)</span></div>
            <div class="text-align-right">查看详细</div>
          </div>
        </el-col>
        <el-col :span="6" :lg="6" :xl="6" :md="12" :sm="12" style="padding: 15px;">
          <div class="box box-item3" @mouseenter="displayChart(3)">
            <div>今日活跃用户</div>
            <div><span class="font-style">22</span><span>(人次)</span></div>
            <div class="text-align-right">查看详细</div>
          </div>
        </el-col>
        <el-col :span="6" :lg="6" :xl="6" :md="12" :sm="12" style="padding: 15px;">
          <div class="box box-item4" @mouseenter="displayChart(4)">
            <div>本月活跃用户</div>
            <div><span class="font-style">250</span><span>(人次)</span></div>
            <div class="text-align-right">查看详细</div>
          </div>
        </el-col>
      </el-row>
      <el-row class="chartArea">
        <el-col class="chart" :span="24">
          <div id="chart" style="height: 400px; width: 100%;"></div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: "dashboard.vue",
    data() {
      return {
        getSize: '',
        arrayData: [
          {timeRange: "00:00-00:59", value: 80},
          {timeRange: "01:00-01:59", value: 20},
          {timeRange: "02:00-02:59", value: 10},
          {timeRange: "03:00-03:59", value: 10},
          {timeRange: "04:00-04:59", value: 5},
          {timeRange: "05:00-05:59", value: 3},
          {timeRange: "06:00-06:59", value: 1},
          {timeRange: "07:00-07:59", value: 6},
          {timeRange: "08:00-08:59", value: 30},
          {timeRange: "09:00-09:59", value: 32},
          {timeRange: "10:00-10:59", value: 45},
          {timeRange: "11:00-11:59", value: 47},
          {timeRange: "12:00-12:59", value: 60},
          {timeRange: "13:00-13:59", value: 120},
          {timeRange: "14:00-14:59", value: 123},
          {timeRange: "15:00-15:59", value: 189},
          {timeRange: "16:00-16:59", value: 60},
          {timeRange: "17:00-17:59", value: 100},
          {timeRange: "18:00-18:59", value: 80},
          {timeRange: "19:00-19:59", value: 70},
          {timeRange: "20:00-20:59", value: 111},
          {timeRange: "21:00-21:59", value: 90},
          {timeRange: "22:00-22:59", value: 100},
          {timeRange: "23:00-23:59", value: 69}
        ],
        unit: '人次',
        chartColor: '#005da0',
        chartTitle: '今日实时访问量图标分析',
        chartType: 'line',
        activeName: 'tie',
        tableData: [
          {
            date: '2019-10-5',
            name: '燕燕',
            address: '内容........'
          },
          {
            date: '2019-8-16',
            name: '哈哈哈',
            address: '哈哈哈........'
          }
        ],
        t1: true,
        t2: false,
        t3: true,
        t4: ''
      }
    },
    methods: {
      displayChart(i) {
        switch(i) {
          case 1: 
          this.chartColor = '#005da0';
          this.unit = '人次';
          this.chartType = "line";
          this.arrayData=[
                {timeRange: "00:00-00:59", value: 80},
                {timeRange: "01:00-01:59", value: 20},
                {timeRange: "02:00-02:59", value: 10},
                {timeRange: "03:00-03:59", value: 10},
                {timeRange: "04:00-04:59", value: 5},
                {timeRange: "05:00-05:59", value: 3},
                {timeRange: "06:00-06:59", value: 1},
                {timeRange: "07:00-07:59", value: 6},
                {timeRange: "08:00-08:59", value: 30},
                {timeRange: "09:00-09:59", value: 32},
                {timeRange: "10:00-10:59", value: 45},
                {timeRange: "11:00-11:59", value: 47},
                {timeRange: "12:00-12:59", value: 60},
                {timeRange: "13:00-13:59", value: 120},
                {timeRange: "14:00-14:59", value: 123},
                {timeRange: "15:00-15:59", value: 189},
                {timeRange: "16:00-16:59", value: 60},
                {timeRange: "17:00-17:59", value: 100},
                {timeRange: "18:00-18:59", value: 80},
                {timeRange: "19:00-19:59", value: 70},
                {timeRange: "20:00-20:59", value: 111},
                {timeRange: "21:00-21:59", value: 90},
                {timeRange: "22:00-22:59", value: 100},
                {timeRange: "23:00-23:59", value: 69}
          ];
          this.chartTitle = '今日实时访问量图表分析';
          break;
        case 2: 
          this.chartColor="#4270ae";
            this.unit="人次";
            this.chartType="line"
            this.arrayData=[
              {timeRange: "2018-9-1", value: 453},
              {timeRange: "2018-9-2", value: 234},
              {timeRange: "2018-9-3", value: 335},
              {timeRange: "2018-9-4", value: 310},
              {timeRange: "2018-9-5", value: 80},
              {timeRange: "2018-9-6", value: 652},
              {timeRange: "2018-9-7", value: 333},
            ]
            this.chartTitle="本月访问量图表分析";
            break;
          case 3:
            this.chartColor="#21a3b0";
            this.unit="人";
            this.chartType="bar";
            this.arrayData=[
              {timeRange: "2018-9-1", value: 453},
              {timeRange: "2018-9-2", value: 234},
              {timeRange: "2018-9-3", value: 335},
              {timeRange: "2018-9-4", value: 310},
              {timeRange: "2018-9-5", value: 80},
              {timeRange: "2018-9-6", value: 652},
              {timeRange: "2018-9-7", value: 333},
              {timeRange: "2018-9-8", value: 23},
            ]
            this.chartTitle="过去七日活跃用户数据分析";
            break;
          case 4: 
            this.chartColor="#7bbdbc";
            this.unit="人";
            this.chartType="bar";
            this.arrayData=[
              {timeRange: "2018-1", value: 453},
              {timeRange: "2018-2", value: 234},
              {timeRange: "2018-3", value: 335},
              {timeRange: "2018-4", value: 310},
              {timeRange: "2018-5", value: 80},
              {timeRange: "2018-6", value: 652},
              {timeRange: "2018-7", value: 333},
              {timeRange: "2018-8", value: 23},
              {timeRange: "2018-9", value: 223},
              {timeRange: "2018-10", value: 456},
            ]
            this.chartTitle="本年度各月份活跃用户数据分析";
            break;    
        }
        this.drawChart();
      },
      drawChart(afresh) {
        let seriseArr = this.arrayData;
        let t=[];
        let v=[];
        seriseArr.forEach(item => {
          t.push(item.timeRange);
          v.push(item.value);
        })
        let chartPanel = this.$echarts.init(document.getElementById('chart'));
        if (afresh) {
          // 如果传入的afresh是true表示是重绘图表， 在这里请销毁掉原来的图表，重新初始化一个图表
          chartPanel.dispose();
          chartPanel = this.$echarts.init(document.getElementById('chart'));
        } else {
          chartPanel.dispose();
          chartPanel = this.$echarts.init(document.getElementById('chart'));
        }
        // 绘制图表
        chartPanel.setOption({
          animation: !afresh, //如果是重绘的地图 就关掉动画效果，这样就可以实现只在页面第一次加载的时候展示绘图动画
          title: {
            left: 'center',
            text: this.chartTitle
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: [''+this.unit+''],
            x: 'right', 
            y: 'top'
          },
          xAxis: {
            type: 'category',
            data: t,
            axisLabel: {
              interval: 0,
              rotate: 40
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}'+this.unit,
            }
          },
          grid: { // 控制图的大小，调整下面这些值就可以了
            x2: 100,
            y2: 150
          },
          series: [{
            data: v,
            name: this.unit,
            type: this.chartType,
            // barWidth: 60, // 固定柱子宽度
            barMaxWidth: 60, // 柱子最大宽度
            itemStyle: {
              normal: {
                color: this.chartColor
              }
            }
          }]
        })
      }
    },
    mounted() {
      this.drawChart();
      let width = '';
      width = document.getElementsByClassName('c-main')[0].clientWidth;
      this.getSIze = setInterval(() => {
        try {
          let w = document.getElementsByClassName('c-main')[0].clientWidth;
          if (w !== width) {
            this.draChart(true);
            width = w;
          }
        } catch(e) {
          console.log('Failed to get window size');
        }
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.getSize);
    },
    created() {
      // this.toTop();
      console.log(222);
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/base";

    .box {
      // background-color: $baseColor1;
      color: #fff;
      padding: 5px;
      height: 90px;
      border-radius: 4px;
      cursor: pointer;
      .font-style {
        font-size: 35px;
        font-weight: bold;
      }
    }
    .box-item1 {
      background-color: $baseColor1;
      transition: all 0.3s;
    }
    .box-item1:hover {
      background-color: #003f6b;
    }
    .box-item2 {
      background-color: #4270ae;
      transition: all 0.3s;
    }
    .box-item2:hover {
      background-color: #31507e;
    }
    .box-item3 {
      background-color: #21a3b0;
      transition: all 0.3s;
    }
    .box-item3:hover {
      background-color: #1e7c88;
    }
    .box-item4 {
      background-color: #7bbdbc;
      transition: all 0.3s;
    }
    .box-item4:hover {
      background-color: #5c908f;
    }
</style>
