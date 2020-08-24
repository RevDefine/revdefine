 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <search-bar @search='searchAlert'></search-bar>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBlockBar, { SearchType } from '../components/SearchBar.vue';
export default Vue.extend({
  components: {
    'search-bar': SearchBlockBar
  },
  name: 'Home'
});
</script>

