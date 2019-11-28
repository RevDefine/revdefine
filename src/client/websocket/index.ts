import { ComponentOptions } from 'vue';
import RnodeWebsocket from './ws';
import eventBus, { REvent, EventCallback } from './eventBus';
import Vue, { PluginFunction } from 'vue';
// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
interface PluginOptions {}

export const RnodeWsPlugin: PluginFunction<PluginOptions> = function RnodeWsPlugin(Vue, PluginOptions): void {
  Vue.prototype.$connect = (url: string) => {
    Vue.prototype.$socket = new RnodeWebsocket(url);
  };

  Vue.prototype.$disconnect = () => {
    if (Vue.prototype.$socket) {
      Vue.prototype.$socket.close();
      delete Vue.prototype.$socket;
    }
  };
};
