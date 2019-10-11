 <template>
  <q-page padding>
    <div>
      <div class="text-h3">Introduction</div>

      <div class="text-body1">
        <p>This is a block explorer of <a href="https://rchain.coop">RChain</a> project. This is <a href="https://github.com/rchain/rchain">the github repo of RChain</a>.</p>

        <p>In order to use the explorer, you have to get a
          <a href="https://rchain.atlassian.net/wiki/spaces/CORE/pages/428376065/User+guide+for+running+RNode">rnode</a>(or connect to an existing rnode).</p>

        <p>Because the rnode explosed all the external api by <a href="https://grpc.io/">grpc</a> and the browser can not send grpc request to rnode directly, we
          have to config a proxy server[<a href="https://www.envoyproxy.io/">Envoy</a>] which will transform a http request to a grpc request.</p>

        <p>It is actually quite easy to start an envoy proxy server if you have docker.</p>

        <p>Here is the <a href="https://github.com/RevDefine/envoy_example/tree/master">example</a> of the config of an envoy proxy.</p>

        <p>After starting the envoy proxy, you can go to <router-link to="settings">settings</router-link> config and apply, and then explore the world.</p>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Introduction'
});
</script>

<style lang="scss" scoped>
</style>
