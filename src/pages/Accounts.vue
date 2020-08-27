 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'accounts',
  data() {
    return {};
  }
});
</script>

