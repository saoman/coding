
const moduleA = {
    namespaced: true,
    state: { 
        count: 3
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
      doubleCount (state) {
          return state.count * 2
      }  
    },
    actions: {
        incrementIfOdd({state, commit}) {
            if (state.count % 2 === 1) {
                commit('increment');
            }
        }
    }
}

const moduleB = {
    namespaced: true,
    modules: {
        subModule: {
            namespaced: true,
            state: {
                
            },
            mutations: {
                login () {
					console.log("b mutations");
				}
            },
            getters: {
              login () {
				   console.log("b getters");
			  }  
            },
            actions: {
              login () {
				  console.log("b actions");
			  }  
            }
        }
    },
    state: {
        count: 8
    },
    mutations: {
        
    },
    getters: {
        someGetter (state, getters, rootState, rootGetters) {
            rootState.count;
            state.count;
            
            getters.someOtherGetter;
            rootGetters.someOtherGetter;
        }
    },
    actions: {
        someAction({ dispatch, commit, getters, rootGetters }) {
            getters.someGetter;
            rootGetters.someGetter;
            
            dispatch('someOtherAction');
            dispatch('someOtherAction', null, { root: true });
            
            commit('someMutation');
            commit('someMutation', null, { root: true });
        }
    }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    },
    state: {
        count: 2
    },
    mutations: {
        
    },
    getters: {
        
    },
    actions: {
        
    }
})


new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: Vuex.mapState({
        a: state => state.a.count,
        b: state => state.b.subModule.count,
    }),
    methods: Vuex.mapActions('some/nested/module', [
        'foo' // thisfoo()
    ])
});

// console.log(store.state.a.count);
// console.log(store.state.b.count);
// store.commit('a/increment');
// console.log(store.state.a.count);

store.commit('b/subModule/login');
store.dispatch('b/subModule/login');
store.getters['b/subModule/login'];
