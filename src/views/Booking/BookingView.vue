<script setup>
  import { useStore } from 'vuex';
  import {useRoute, useRouter} from 'vue-router';
  import { computed, reactive } from 'vue';

  const route = useRoute();
  const store = useStore();
  const router = useRouter()
  store.dispatch("room/getRoomDetailAction", route.params.roomId);

  const roomDetail = computed(() => store.state.room.roomDetail);
  const timeBooking = reactive({
    checkIn: "",
    checkOut: ""
  });

  const user = JSON.parse(localStorage.getItem("userLogin"));
  const handleBooking = () => {
    const data = {
      user_id: user.user.id,
      room_id: route.params.roomId,
      check_in: timeBooking.checkIn,
      check_out: timeBooking.checkOut
    };
    store.dispatch("room/bookingRoonAction", {data});
    router.push(`/user-profile/${user.user.id}`)
  };
</script>

<template>
  <!-- Titlebar -->
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <h2>Booking</h2>

          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>Booking</li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  </div>

  <!-- Content -->

  <!-- Container -->
  <div class="container">
    <div class="row">

      <!-- Content -->
      <div class="col-lg-8 col-md-8 padding-right-30">

        <h3 class="margin-top-0 margin-bottom-30">Time</h3>

        <div class="row">

          <div class="col-md-6">
            <label>Check In</label>
            <input type="date" v-model="timeBooking.checkIn"/>
          </div>

          <div class="col-md-6">
            <label>Check Out</label>
            <input type="date" v-model="timeBooking.checkOut"/>
          </div>
        </div>


        <h3 class="margin-top-55 margin-bottom-30">Payment Method</h3>

        <!-- Payment Methods Accordion -->
        <div class="payment">

          <div class="payment-tab payment-tab-active">
            <div class="payment-tab-trigger">
              <input checked id="paypal" name="cardType" type="radio" value="paypal">
              <label for="paypal">PayPal</label>
              <img class="payment-logo paypal" src="https://i.imgur.com/ApBxkXU.png" alt="">
            </div>

            <div class="payment-tab-content">
              <p>You will be redirected to PayPal to complete payment.</p>
            </div>
          </div>


          <div class="payment-tab">
            <div class="payment-tab-trigger">
              <input type="radio" name="cardType" id="creditCart" value="creditCard">
              <label for="creditCart">Credit / Debit Card</label>
              <img class="payment-logo" src="https://i.imgur.com/IHEKLgm.png" alt="">
            </div>

            <div class="payment-tab-content">
              <div class="row">

                <div class="col-md-6">
                  <div class="card-label">
                    <label for="nameOnCard">Name on Card</label>
                    <input id="nameOnCard" name="nameOnCard" required type="text">
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="card-label">
                    <label for="cardNumber">Card Number</label>
                    <input id="cardNumber" name="cardNumber" placeholder="1234  5678  9876  5432" required type="text">
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card-label">
                    <label for="expirynDate">Expiry Month</label>
                    <input id="expiryDate" placeholder="MM" required type="text">
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card-label">
                    <label for="expiryDate">Expiry Year</label>
                    <input id="expirynDate" placeholder="YY" required type="text">
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card-label">
                    <label for="cvv">CVV</label>
                    <input id="cvv" required type="text">
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <!-- Payment Methods Accordion / End -->

        <button class="button booking-confirmation-btn margin-top-40 margin-bottom-65" @click="handleBooking">Confirm and Pay</button>
      </div>


      <!-- Sidebar -->
      <div class="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">

        <!-- Booking Summary -->
        <div class="listing-item-container compact order-summary-widget">
          <div class="listing-item">
            <img :src="roomDetail.image" alt="">

            <div class="listing-item-content">
              <div class="numerical-rating" data-rating="5.0"></div>
              <h3>{{ roomDetail.room_name }}</h3>
              <span v-if="roomDetail.location_id">{{ roomDetail.location_name }}, {{ roomDetail.province_name }}</span>
            </div>
          </div>
        </div>
        <div class="boxed-widget opening-hours summary margin-top-0">
          <h3><i class="fa fa-calendar-check-o"></i> Booking Summary</h3>
          <ul>
            <li>Date <span>10/20/2019</span></li>
            <li>Hour <span>5:30 PM</span></li>
            <li>Guests <span>2 Adults</span></li>
            <li class="total-costs">Total Cost <span>{{ roomDetail.price }} VNĐ</span></li>
          </ul>

        </div>
        <!-- Booking Summary / End -->

      </div>

    </div>
  </div>
  <!-- Container / End -->


</template>

<style scoped lang="scss">

</style>