import { createWebHistory,createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/contacts/addContact",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
        // props:true,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;