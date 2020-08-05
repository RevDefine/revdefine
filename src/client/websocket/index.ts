import RnodeWebsocket from './ws';
import { PluginFunction } from 'vue';
// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
interface PluginOptions {}

export const RnodeWsPlugin: PluginFunction<PluginOptions> = function RnodeWsPlugin(Vue, PluginOptions): void {
  Vue.prototype.$connect = (url: string) => {
    const ws = new RnodeWebsocket(url);
    ws.connect();
    Vue.prototype.$socket = ws;
  };

  Vue.prototype.$disconnect = () => {
    if (Vue.prototype.$socket) {
      Vue.prototype.$socket.close();
      delete Vue.prototype.$socket;
    }
  };
};
