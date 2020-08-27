 <template>
  <latest-block></latest-block>
</template>

<script lang="ts">
import Vue from 'vue';
import latestBlocks from '../components/LatestBlocks.vue';

export default Vue.extend({
  components: {
    'latest-block': latestBlocks
  },
  name: 'blocks',
  data() {
    return {};
  }
});
</script>

