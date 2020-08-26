 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <account-table></account-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DTable from '../components/DTable.vue';

export default Vue.extend({
  components: {
    'account-table': DTable
  },
  name: 'accounts',
  data() {
    return {};
  }
});
</script>

