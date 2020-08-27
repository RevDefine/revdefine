 <template>
  <div class="full-width">
    <div class="row col-xs-12 justify-center">
      <account-overview :addr="addr"></account-overview>
    </div>

    <div class="row col-xs-12 justify-center">
      <transfer-list></transfer-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import accountOverview from '../components/AccountOverview.vue';
import transferList from '../components/TransferList.vue';

export default Vue.extend({
  components: {
    'account-overview': accountOverview,
    'transfer-list': transferList
  },
  name: 'accountDetail',
  data() {
    return {
      addr: ''
    };
  }
});
</script>

