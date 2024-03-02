<script setup>
  import { defineProps } from 'vue';
  import { useRouter } from "vue-router";

  const props = defineProps({
    room: {
      type: Object,
    },
  });

  const router = useRouter();

  const handleCLickRoom = () => {
    router.push(`/room-detail/${props.room.id}`);
  };
</script>

<template>
  <!-- Listing Item -->
  <div class="col-lg-12 col-md-12">
    <div class="listing-item-container list-layout" data-marker-id="1">
      <a class="listing-item" @click="handleCLickRoom">

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