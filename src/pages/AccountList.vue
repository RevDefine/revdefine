 <template>
  <div>
    <div class="row items-center bg-white">
      <div class="col-md-6">
        <account-pie
          :loading="pieLoading"
          :series="pieData"
        ></account-pie>
      </div>
      <div class="col-md-6">
        <accounts-stat
          :totalAccount="totalAccount"
          :last1mActiveAccountAmount="last1mActiveAccountAmount"
          :last24hActiveAccountAmount="last24hActiveAccountAmount"
          :last7dActiveAccountAmount="last7dActiveAccountAmount"
        >
        </accounts-stat>
      </div>
    </div>
    <div class="row">
      <account-table
        :loading="loading"
        :accounts="accounts"
        v-on:request="getAccounts"
      ></account-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import accountTable from '../components/AccountTable.vue';
import pieChart from '../components/ApexPie.vue';
import accountsStat from '../components/AccountsStat.vue';
import client from '../defineAPI';

export default Vue.extend({
  name: 'accountList',
  components: {
    'account-table': accountTable,
    'account-pie': pieChart,
    'accounts-stat': accountsStat
  },
  methods: {
    async getAccounts(page: number) {
      this.loading = true;
      const resp = await client.revAccounts(page);
      this.accounts = resp.accounts;
      this.loading = false;
    },
    async getAccountsStat() {
      this.pieLoading = true;
      const resp = await client.statAccounts();
      this.pieData = [
        Math.round((resp.data.top100 / resp.data.total) * 10000) / 100,
        Math.round((resp.data.top50 / resp.data.total) * 10000) / 100,
        Math.round((resp.data.top10 / resp.data.total) * 10000) / 100
      ];

      this.totalAccount = resp.data.totalAccount;
      this.last24hActiveAccountAmount = resp.data.last24hActiveAccountAmount;
      this.last7dActiveAccountAmount = resp.data.last7dActiveAccountAmount;
      this.last1mActiveAccountAmount = resp.data.last1mActiveAccountAmount;

      this.pieLoading = false;
    }
  },
  data() {
    return {
      loading: false,
      pieLoading: false,
      pieData: [0, 0, 0, 0],

      totalAccount: 0,
      last24hActiveAccountAmount: 0,
      last7dActiveAccountAmount: 0,
      last1mActiveAccountAmount: 0,

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
    const tasks = [this.getAccounts(1), this.getAccountsStat()];
    await Promise.all(tasks);
  }
});
</script>

