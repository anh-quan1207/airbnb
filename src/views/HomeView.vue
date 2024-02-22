<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <the-banner></the-banner>
    <!-- Content -->
    <the-category></the-category>
    <the-place></the-place>
    <the-review></the-review>
    <the-plan></the-plan>
    <the-blog></the-blog>
    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script setup>
  import TheBanner from '../components/TheBanner.vue';
  import TheCategory from "@/components/TheCategory.vue";
  import ThePlace from "@/components/ThePlace.vue";
  import TheReview from "@/components/TheReview.vue";
  import ThePlan from "@/components/ThePlan.vue";
  import TheBlog from "@/components/TheBlog.vue";
</script>
