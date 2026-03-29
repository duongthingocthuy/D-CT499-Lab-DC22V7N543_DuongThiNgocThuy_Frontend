<script>
export default {
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
   activeIndex: {
    type: Number,
    default: -1,
   },
   emits: ["update:activeIndex"],
   methods:{
    updateActionIndex(index){
        this.$emit("update:activeIndex", index);
   }
  },
},
};

</script>
<template>
    <ul class="list-group">
        <li v-for="(contact, index) in contacts" :key="index" class="list-group-item" :class="{active: index === activeIndex}" @click="methods.updateActionIndex(index)">
            {{ contact.name }}
        </li>
    </ul>
</template>