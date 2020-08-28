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
        }
      },
      series: [{
        name: 'transfer',
        data: [0, 0, 0, 0, 0, 0, 0]
      }]
    }
  },
  async mounted () {
    const data = await client.statTransfer()
    data.datas.forEach(element => (element.start, element.data))
  }
})
</script>