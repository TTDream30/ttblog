<template>
  <!-- Active Users Card -->
  <a-card :bordered="false" class="dashboard-bar-chart">
    <!-- <chart-bar :height="220" :data="barChartData"></chart-bar> -->
    <chart-money></chart-money>
    <div class="card-title">
      <h6>收入统计</h6>
      <!-- <p>than last week <span class="text-success">+23%</span></p> -->
    </div>
    <div class="card-content">
      <p>*统计打赏及下载资源所获取的收入情况</p>
    </div>
    <a-row class="card-footer" type="flex" justify="center" align="top">
      <a-col :span="8">
        <h4>￥3.6K</h4>
        <span>打赏项目</span>
      </a-col>
      <a-col :span="8">
        <h4>￥1.8K</h4>
        <span>下载资源</span>
      </a-col>
      <a-col :span="8">
        <h4>￥5.4K</h4>
        <span>总金额</span>
      </a-col>
    </a-row>
  </a-card>
  <!-- Active Users Card -->
</template>

<script>
// Bar chart for "Active Users" card.
import ChartBar from "../Charts/ChartBar";
import ChartMoney from "../Charts/ChartMoney";

export default {
  components: {
    ChartBar,
    ChartMoney,
  },
  data() {
    return {
      // Data for bar chart.
      barChartData: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#fff",
            borderWidth: 0,
            borderSkipped: false,
            borderRadius: 6,
            data: [850, 600, 500, 620, 900, 500, 900, 630, 900],
            maxBarThickness: 20,
          },
        ],
      },
    };
  },
};
</script>
