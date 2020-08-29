<template>
  <div class="q-mx-md q-my-md">
    <q-card>
      <define-loading :showing="loading">
      </define-loading>
      <apexchart
        type="area"
        :options="options"
        :series="data"
      >
      </apexchart>
    </q-card>
  </div>
</template>


<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import defineLoading from './Loading.vue'

export default Vue.extend({
  name: 'apexChart',
  components: {
    apexchart: VueApexCharts,
    'define-loading': defineLoading
  },
  props: {
    loading: Boolean,
    title: String,
    data: Array,
    colors: String,
    total: Number
  },
  data () {
    return {
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: this.colors,
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: this.title
        },
        subtitle: {
          text: 'Total: ' + this.total
        },
        xaxis: {
          type: 'datetime'
        }
      }
    }
  },
  beforeUpdate () {
    this.options = {
      chart: {
        toolbar: {
          show: false
        }
      },
      colors: this.colors,
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: this.title
      },
      subtitle: {
        text: 'Total: ' + this.total
      },
      xaxis: {
        type: 'datetime'
      }
    }
  }
})
</script>