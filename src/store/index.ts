import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';


Vue.use(Vuex);
interface Empty { }

const store: StoreOptions<Empty> = {};

export default new Vuex.Store<Empty>(store);
