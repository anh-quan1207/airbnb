<script setup>
  import Typed from 'typed.js';
  import { onMounted } from 'vue';
  import TheMainSearch from "@/components/TheMainSearch.vue";
  onMounted(() => {
    new Typed('.typed-words', {
      strings: ["Restaurants"," Attractions"," Hotels"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    });
  })
</script>

<template>
  <!-- Banner
  ================================================== -->
  <div
      class="main-search-container centered"
      data-background-image="images/main-search-background-01.jpg"
  >
    <div class="main-search-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              Find Nearby
              <!-- Typed words can be configured in script settings at the bottom of this HTML file -->
              <span class="typed-words"></span>
            </h2>
            <h4>Expolore top-rated attractions, activities and more</h4>
            <the-main-search></the-main-search>
          </div>
        </div>

        <!-- Features Categories -->
        <div class="row">
          <div class="col-md-12">
            <h5 class="highlighted-categories-headline">
              Or browse featured categories:
            </h5>

            <div class="highlighted-categories">
              <!-- Box -->
              <a
                  href="listings-list-with-sidebar.html"
                  class="highlighted-category"
              >
                <i class="im im-icon-Home"></i>
                <h4>Apartments</h4>
              </a>

              <!-- Box -->
              <a
                  href="listings-list-full-width.html"
                  class="highlighted-category"
              >
                <i class="im im-icon-Hamburger"></i>
                <h4>Eat &amp; Drink</h4>
              </a>

              <!-- Box -->
              <a
                  href="listings-half-screen-map-list.html"
                  class="highlighted-category"
              >
                <i class="im im-icon-Electric-Guitar"></i>
                <h4>Events</h4>
              </a>

              <!-- Box -->
              <a
                  href="listings-half-screen-map-list.html"
                  class="highlighted-category"
              >
                <i class="im im-icon-Dumbbell"></i>
                <h4>Fitness</h4>
              </a>
            </div>
          </div>
        </div>
        <!-- Featured Categories - End -->
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>