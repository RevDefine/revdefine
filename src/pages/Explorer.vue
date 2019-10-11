 <template>
  <q-page>
    <!-- This is where pages get injected -->
    <router-view />
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Explorer'
});
</script>
