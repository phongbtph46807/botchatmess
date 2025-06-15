import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import LayoutClient from '../layout/LayoutClient.vue';
import Ai from '../views/Ai.vue';


const router = createRouter({
    routes: [
        {
            path: '/', component: LayoutClient, children: [

                {path : '/', name:"home-client", component:Home},
                {path : '/products', name:"home-product", component:Product},
                {path : '/ai', name:"home-ai", component:Ai}
            ]
        }
    ],
    history: createWebHistory()
})

export default router;
