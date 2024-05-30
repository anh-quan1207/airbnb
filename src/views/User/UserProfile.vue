<script setup>
  import UserDetailSideBar from "@/components/User/UserDetailSideBar.vue";
  import ListingRoomBooking from "@/components/User/ListingRoomBooking.vue";
  import {useStore} from "vuex";
  import {computed} from "vue";
  import {useRoute} from "vue-router";

  const store = useStore();
  const route = useRoute();
  store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  const userLogin = computed(() => store.state.auth.userLogin);
  store.dispatch("ticket/getTicketsByUserIdAction", route.params.userId);
</script>

<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Titlebar
    ================================================== -->
    <div class="container">
      <div class="row sticky-wrapper">
        <!-- Profile  -->
          <user-detail-side-bar></user-detail-side-bar>
        <!-- Profile End  -->

        <div class="col-lg-8 col-md-8 padding-left-30">
          <h3 class="margin-top-0 margin-bottom-40">List Booking</h3>

          <!-- Listings Container -->
            <listing-room-booking></listing-room-booking>
          <!-- Listings Container / End -->


          <!-- Reviews -->
          <div id="listing-reviews" class="listing-section">
            <h3 class="margin-top-60 margin-bottom-20">Reviews</h3>

            <div class="clearfix"></div>

            <!-- Reviews -->
            <section class="comments listing-reviews">

              <ul>
                <li>
                  <div class="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
                  <div class="comment-content"><div class="arrow-comment"></div>
                    <div class="comment-by">Kathy Brown <div class="comment-by-listing">on <a href="#">Burger House</a></div> <span class="date">June 2019</span>
                      <div class="star-rating" data-rating="5"></div>
                    </div>
                    <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>

                    <div class="review-images mfp-gallery-container">
                      <a href="images/review-image-01.jpg" class="mfp-gallery"><img src="images/review-image-01.jpg" alt=""></a>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /> </div>
                  <div class="comment-content"><div class="arrow-comment"></div>
                    <div class="comment-by">John Doe <div class="comment-by-listing">on <a href="#">Tom's Restaurant</a></div> <span class="date">May 2019</span>
                      <div class="star-rating" data-rating="4"></div>
                    </div>
                    <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                  </div>
                </li>

                <li>
                  <div class="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
                  <div class="comment-content"><div class="arrow-comment"></div>
                    <div class="comment-by">Kathy Brown <div class="comment-by-listing">on <a href="#">Burger House</a></div> <span class="date">June 2019</span>
                      <div class="star-rating" data-rating="5"></div>
                    </div>
                    <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>

                    <div class="review-images mfp-gallery-container">
                      <a href="images/review-image-02.jpg" class="mfp-gallery"><img src="images/review-image-02.jpg" alt=""></a>
                      <a href="images/review-image-03.jpg" class="mfp-gallery"><img src="images/review-image-03.jpg" alt=""></a>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /> </div>
                  <div class="comment-content"><div class="arrow-comment"></div>
                    <div class="comment-by">John Doe <div class="comment-by-listing">on <a href="#">Hotel Govendor</a></div> <span class="date">May 2019</span>
                      <div class="star-rating" data-rating="5"></div>
                    </div>
                    <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                  </div>

                </li>
              </ul>
            </section>

            <!-- Pagination -->
            <div class="clearfix"></div>
            <div class="row">
              <div class="col-md-12">
                <!-- Pagination -->
                <div class="pagination-container margin-top-30">
                  <nav class="pagination">
                    <ul>
                      <li><a href="#" class="current-page">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <!-- Pagination / End -->
          </div>


        </div>

      </div>
    </div>

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>


  </div>
  <!-- Wrapper / End -->
</template>

<style scoped lang="scss">

</style>