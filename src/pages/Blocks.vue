 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <block-table></block-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BlockTable from '../components/BlockTable.vue';

export default Vue.extend({
  components: {
    'block-table': BlockTable
  },
  name: 'blocks',
  data() {
    return {};
  }
});
</script>

