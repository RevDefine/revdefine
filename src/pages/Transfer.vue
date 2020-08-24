 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <transfer-table></transfer-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TransferTable from '../components/TransferTable.vue';

export default Vue.extend({
  components: {
    'transfer-table': TransferTable
  },
  name: 'transfer',
  data() {
    return {};
  }
});
</script>

