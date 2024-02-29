<script setup>
  import { defineProps } from 'vue';

  defineProps({
    room: {
      type: Object,
    },
  });
</script>

<template>
  <!-- Listing Item -->
  <div class="col-lg-12 col-md-12">
    <div class="listing-item-container list-layout" data-marker-id="1">
      <a href="listings-single-page.html" class="listing-item">

        <!-- Image -->
        <div class="listing-item-image">
          <img :src="room.image">
          <span class="tag">Eat & Drink</span>
        </div>

        <!-- Content -->
        <div class="listing-item-content">
          <div class="listing-badge now-open">Now Open</div>

          <div class="listing-item-inner">
            <h3>{{ room.room_name }}<i class="verified-icon"></i></h3>
            <span v-if="room.locationId">{{ room.locationId.province }}</span>
            <div class="star-rating" data-rating="3.5">
              <div class="rating-counter">(12 reviews)</div>
            </div>
          </div>

          <span class="like-icon"></span>
        </div>
      </a>
    </div>
  </div>
  <!-- Listing Item / End -->
</template>

<style scoped lang="scss">

</style>