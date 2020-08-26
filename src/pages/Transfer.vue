 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <latest-transfer-table></latest-transfer-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LatestTransfer from '../components/LatestTransfer.vue';

export default Vue.extend({
  components: {
    'latest-transfer-table': LatestTransfer
  },
  name: 'transfer',
  data() {
    return {};
  }
});
</script>

