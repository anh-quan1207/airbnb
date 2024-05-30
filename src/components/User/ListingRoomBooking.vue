<script setup>

  import {useStore} from "vuex";
  import {computed} from "vue";

  const store = useStore();
  const ticketList = computed(() => store.state.ticket.ticketList);
  const roomList = computed(() => {
    return ticketList.value.map(ticket => ticket.room);
  });
</script>

<template>
  <div class="row">
    <!-- Listing Item -->
    <div>
      <div class="col-lg-12 col-md-12" v-for="(room, index) in roomList" :key="index">
        <div class="listing-item-container list-layout">
          <a href="listings-single-page.html" class="listing-item">
            <!-- Image -->
            <div class="listing-item-image">
              <img :src="room.image" alt="">
              <span class="tag">Eat & Drink</span>
            </div>

            <!-- Content -->
            <div class="listing-item-content">
              <div class="listing-badge now-open">Now Open</div>
              <div class="listing-item-inner">
                <h3>{{ room.room_name }}</h3>
                <span>{{ room.location_name }}</span>
                <div class="star-rating" data-rating="3.5">
                  <div class="rating-counter">(12 reviews)</div>
                </div>
              </div>
              <span class="like-icon"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- Listing Item / End -->

    <div class="col-md-12 browse-all-user-listings">
      <a href="#">Browse All Listings <i class="fa fa-angle-right"></i> </a>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>