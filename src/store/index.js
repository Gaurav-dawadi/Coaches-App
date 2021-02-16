import {createStore} from 'vuex'
import coachesModule from './modules/coaches'

const store = createStore({
    modules: {
        coaches: coachesModule
    },
    state(){

    }, 
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})

export default store;