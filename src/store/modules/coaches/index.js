import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state(){
        return{
            coaches: [
                {
                  id: 'c1',
                  firstName: 'Harry',
                  lastName: 'Kane',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Harry and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Christian',
                  lastName: 'Eriksen',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Eriksen and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 35
                },
                {
                  id: 'c3',
                  firstName: 'Lucas',
                  lastName: 'Mora',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Lucas and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                }
            ]
        }
    }, 
    mutations,
    actions,
    getters
}