<script setup>
  import { useStore } from 'vuex';
  import {computed, ref, watch} from "vue";
  import {useRouter} from "vue-router";
  import {debounce} from "@/composables/debounce";
  import {createSlugFromName} from "@/utils/createSlugFromName";

  const keyword = ref("");
  const store = useStore();
  const router = useRouter();

  const debouncedGetLocationList = debounce((newKeyword) => {
    store.dispatch("location/getLocationListAction", newKeyword);
  }, 500);

  watch(keyword, (newKeyword) => {
    if (newKeyword !== '') {
      debouncedGetLocationList(newKeyword);
    }
  })
  const locationList = computed(() => store.state.location.locationList);
  const handleClickLocation = (location) => {
    const slug = createSlugFromName(location.location_name);
    router.push(`/room/${location.id}`);
  };

</script>

<template>
  <div class="main-search-input">
    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input
            id="autocomplete-input"
            type="text"
            placeholder="Location"
            v-model="keyword"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <ul v-if="locationList.length > 0 && keyword" class="list-location">
        <li v-for="(location, index) in locationList" :key="index" @click="handleClickLocation(location)">
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-tile">{{ location.location_name }}</span>
        </li>
      </ul>
    </div>
    <button
        class="button"
        onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<style scoped lang="scss">
.main-search-input-item.location {
    position: relative;
    .list-location {
      position: absolute;
      top: 150%;
      list-style: none;
      background: #ffffff;
      color: #222;
      width: 100%;
      border-radius: 20px;
      padding: 7px;
      z-index: 1;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      li {
        padding: 10px;
        font-size: 20px;
        &:hover {
          cursor: pointer;
          background: #f7f7f7;
        }
        .location-item-tile {
          margin-left: 20px;
        }
      }
    }
  }
</style>