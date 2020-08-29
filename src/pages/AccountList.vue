 <template>
  <div>
    <account-table
      :loading="loading"
      :accounts="accounts"
      v-on:request="getAccounts"
    ></account-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import accountTable from '../components/AccountTable.vue';
import client from '../defineAPI';

export default Vue.extend({
  name: 'accountList',
  components: {
    'account-table': accountTable
  },
  methods: {
    async getAccounts(page: number) {
      this.loading = true;
      const resp = await client.revAccounts(page);
      this.accounts = resp.accounts;
      this.loading = false;
    }
  },
  data() {
    return {
      loading: false,
      accounts: [
        {
          address: '',
          balance: 0,
          isGenesisVault: true,
          lastOperationBlock: ''
        }
      ]
    };
  },
  async mounted() {
    await this.getAccounts(1);
  }
});
</script>

