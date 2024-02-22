<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <the-banner></the-banner>
    <!-- Content -->
    <the-categories></the-categories>
    <the-places></the-places>
    <the-reviews></the-reviews>
    <the-plan></the-plan>
    <the-blog></the-blog>
    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script setup>
  import TheBanner from '../components/TheBanner.vue';
  import TheCategories from "@/components/TheCategories.vue";
  import ThePlaces from "@/components/ThePlaces.vue";
  import TheReviews from "@/components/TheReviews.vue";
  import ThePlan from "@/components/ThePlan.vue";
  import TheBlog from "@/components/TheBlog.vue";
</script>
