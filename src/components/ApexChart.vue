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
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import client from '../defineAPI'
export default Vue.extend({
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
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime'
        }
      },
      series: [{
        name: 'transfer',
        data: [0, 0, 0, 0, 0, 0, 0]
      }]
    }
  },
  async mounted () {
    const stat = await client.statTransfer()
    const data = stat.datas.map(element => [element.start, element.data])
    console.log(data)
    this.series = [{
      name: 'transfer',
      data: data
    }]
  }
})
</script>