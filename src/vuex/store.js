import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    navbt:false
}

const mutations={
    bt(state){
        state.navbt == false ? state.navbt = true : state.navbt = false
    }
}

export default new Vuex.Store({
	state,
	mutations
})

