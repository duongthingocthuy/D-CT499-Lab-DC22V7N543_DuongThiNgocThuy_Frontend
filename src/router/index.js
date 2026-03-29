import { createWebHistory,createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props:true,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;