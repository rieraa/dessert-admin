import HomeView from "@/views/home/HomeView.vue";
import ProductsView from "@/views/products/ProductsView.vue";
import CartView from "@/views/cart/CartView.vue";
import PersonalView from "@/views/more/PersonalView.vue";
import LayoutView from "@/components/layout.vue";

const routes = [
    {
        path: '/',
        name: 'layout',
        component: LayoutView,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: 'goods/:page',
                name: 'goods',
                component: ProductsView
            },
            {
                path: 'cart',
                name: 'cart',
                component: CartView
            },
            {
                path: 'personal',
                name: 'personal',
                component: PersonalView
            },
        ]
    },

]

export default routes;