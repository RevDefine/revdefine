<template>
  <div>
    <define-loading :showing="loading">
    </define-loading>
    <div class="column  items-center">
      <div class="col">
        <h5>Holders distribution</h5>
      </div>
      <div class="col">
        <apexchart
          :options="chartOptions"
          :series="series"
          width="450px"
        >
        </apexchart>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import defineLoading from './Loading.vue'

export default Vue.extend({
  name: 'apexPie',
  components: {
    apexchart: VueApexCharts,
    'define-loading': defineLoading
  },
  props: {
    loading: Boolean,
    title: String,
    series: Array,
    label: Array,
    total: Number
  },
  data () {
    return {
      chartOptions: {
        chart: {
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        labels: ['top 100 holders', 'top 50 holders', 'top 10 holders'],
        colors: ['#1ab7ea', '#0084ff', '#39539E'],
        legend: {
          show: true,
          floating: true,
          fontSize: '14px',
          position: 'left',
          offsetX: 0,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function (seriesName, opts) {
            return seriesName + ': ' + opts.w.globals.series[opts.seriesIndex] + '%'
          },
          itemMargin: {
            vertical: 3
          }
        }
      }
    }
  },
  beforeUpdate () {
  }
})
</script>