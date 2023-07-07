import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
    state:{
        // user:{
        //     data:{},
        //     token: sessionStorage.getItem("TOKEN"),
        // },    
        
        frontproducts:{
            loading: false,
            // links: [],
            products: []
        },
        // notification: {
        //     show: false,
        //     type: null,
        //     message: null
        //   },      

        //   dashboard: {
        //     loading: false,
        //     data: {}
        //   },
  
        
    },
    getters:{},
    actions:{
        // register({commit}, user) {
        //     return axiosClient.post('/register', user)
        //       .then(({data}) => {
        //         commit('setUser', data.user);
        //         commit('setToken', data.token)
        //         return data;
        //       })
        //   },  
          
        //   login({commit}, user) {
        //     return axiosClient.post('/login', user)
        //       .then(({data}) => {
        //         commit('setUser', data.user);
        //         commit('setToken', data.token)
        //         return data;
        //       })
        //   },

        //   logout({commit}) {
        //     return axiosClient.post('/logout')
        //       .then(response => {
        //         commit('logout')
        //         return response;
        //       })
        //   },

        //   saveTask({ commit }, task) {
        //     commit("setTaskLoading", true);
        //     return axiosClient.post("/task", task).then((res) => {
        //         commit('setTask', res.data)
        //         commit("setTaskLoading", false);
        //         return res;
        //       });
        //   },

        //   editTask({ commit, dispatch }, task) {  
        //     commit("setTaskLoading", true);
        //     return axiosClient.put(`/task/${task.id}`, task).then((res) => {
        //       commit("setTaskLoading", false);
        //         commit('setTask', res.data)
        //         return res;
        //       });
        //   },

          getProducts({ commit }, {url = null} = {}) {
            // commit("setTaskLoading", true);
            // url = url || "/task";
            return axiosClient.get("/products").then((res) => {
            //   commit("setTaskLoading", false);
              commit("setProducts", res.data);
              return res;
            });
          },

        //   getTask({ commit }, id) {
        //     return axiosClient
        //       .get(`/task/${id}`)
        //       .then((res) => {
        //         commit("setTask", res.data);
        //         return res;
        //       })
        //       .catch((err) => {
        //         throw err;
        //       });
        //   },
                   
        //   deleteTask({ dispatch }, id) {
        //     return axiosClient.delete(`/task/${id}`)
        //     .then((res) => {
        //       dispatch('getTasks')
        //       return res;
        //     });
        //   },

        //   completeTask({ dispatch }, id) {
        //     return axiosClient.put(`/task/${id}/mark-completed`)
        //     .then((res) => {
        //       dispatch('getTasks')
        //       return res;
        //     });
        //   },

        //   incompleteTask({ dispatch }, id) {
        //     return axiosClient.put(`/task/${id}/mark-incompleted`)
        //     .then((res) => {
        //       dispatch('getTasks')
        //       return res;
        //     });
        //   },
          
        //   getDashboardData({commit}) {
        //     commit('dashboardLoading', true)
        //     return axiosClient.get(`/dashboard`)
        //     .then((res) => {
        //       commit('dashboardLoading', false)
        //       commit('setDashboardData', res.data)
        //       return res;
        //     })
        //     .catch(error => {
        //       commit('dashboardLoading', false)
        //       return error;
        //     })
      
        //   },


    },
    mutations:{
        // setUser: (state, user) => {
        //     state.user.data = user;
        //   },
        //   setToken: (state, token) => {
        //     state.user.token = token;
        //     sessionStorage.setItem('TOKEN', token);
        //   },
        //   logout: (state) => {
        //     state.user.token = null;
        //     state.user.data = {};
        //     sessionStorage.removeItem("TOKEN");
        //   },

        //   setTask: (state, task) => {
        //     state.currentTask.data = task.data;
        //   },

          setProducts: (state, frontproducts) => {
            // state.products.links = products.meta.links;
            state.frontproducts.products = frontproducts.products;
          },

        //    setTaskLoading: (state, loading) => {
        //     state.currentTask.loading = loading;
        //   },

        //   notify:(state, {message, type}) =>{
        //     state.notification.show = true;
        //     state.notification.type = type;
        //     state.notification.message = message;
        //     setTimeout(() => {
        //       state.notification.show = false;
        //     }, 3000)
        //   },

        //    setDashboardData: (state, data) => {
        //     state.dashboard.data = data
        //   },
        //   dashboardLoading: (state, loading) => {
        //     state.dashboard.loading = loading;
        //   },
    },
    modules:{}
});

export default store;