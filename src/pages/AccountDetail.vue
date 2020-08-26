 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <account-overview :addr="addr"></account-overview>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AccountOverview from '../components/AccountOverview.vue';

export default Vue.extend({
  components: {
    'account-overview': AccountOverview
  },
  name: 'accountDetail',
  data() {
    return {
      addr: ''
    };
  }
});
</script>

