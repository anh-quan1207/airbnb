<template>
  <the-header></the-header>
  <router-view />
  <the-footer></the-footer>
</template>

<style lang="scss"></style>
<script setup>
  import TheHeader from "@/components/TheHeader.vue";
  import TheFooter from "@/components/TheFooter.vue";
</script>