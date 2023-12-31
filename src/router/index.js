import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import ProductView from "../views/ProductView.vue";
import FrontLayout from "../components/FrontLayout.vue";
// import Login from "../views/Login.vue";
// import Register from "../views/Register.vue";


const routes = [
    {
        path: "/",
        component: FrontLayout,        
        children: [
            { path: "/", name: "Index", component: Index },           
            { path: "/products/:id", name: "ProductView", component: ProductView },
        ]
    },


    // {
    //     path: "/login",
    //     name: 'Login',
    //     meta: {isGuest: true},
    //     component: Login
    // },

    // {
    //     path: "/register",
    //     name: 'Register',
    //     component: Register
    // },

];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

//   router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth && !store.state.user.token) {
//       next({ name: "Login" });
//     } else if (store.state.user.token && to.meta.isGuest) {
//       next({ name: "Dashboard" });
//     } else {
//       next();
//     }
//   });

export default router;