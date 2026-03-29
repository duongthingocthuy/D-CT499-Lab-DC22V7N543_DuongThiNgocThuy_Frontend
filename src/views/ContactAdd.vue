<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ContactForm from "@/components/ContactForm.vue";
import contactServices from "@/services/contact.services";

const router = useRouter();

const contact = ref({});
const message = ref("");

const createContact = async (data) => {
    try {
        await contactServices.create(data);

        message.value = "Liên hệ mới đã được thêm thành công.";
        alert("Đã thêm liên hệ thành công");
    } catch (error) {
        console.error("Lỗi khi thêm liên hệ:", error);
        message.value = "Có lỗi xảy ra, vui lòng thử lại.";
    }
};
</script>

<template>
    <div class="page">
        <h4>Thêm liên hệ mới</h4>

        <ContactForm :contact="contact" @submit:contact="createContact" />

        <p>{{ message }}</p>
    </div>
</template>