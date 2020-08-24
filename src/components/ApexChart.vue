<template>
  <div>
    <apexchart
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>


<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'ApexChart',
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        stroke: {
          curve: 'smooth'
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>