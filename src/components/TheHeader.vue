<script setup>

</script>

<template>
  <!-- Header Container
  ================================================== -->
  <header id="header-container">
    <!-- Header -->
    <div id="header">
      <div class="container">
        <!-- Left Side Content -->
        <div class="left-side">
          <!-- Logo -->
          <div id="logo">
            <router-link to="/"
            ><img
                src="../../public/images/logo.png"
                alt=""
            /></router-link>
          </div>

          <!-- Mobile Navigation -->
          <div class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
            </button>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
              <li>
                <a href="#">Home</a>
                <ul>
                  <li><a href="index.html">Home 1 (Modern)</a></li>
                  <li><a href="index-2.html">Home 2 (Default)</a></li>
                  <li><a href="index-3.html">Home 3 (Airbnb)</a></li>
                  <li><a href="index-4.html">Home 4 (Creative)</a></li>
                  <li><a href="index-5.html">Home 5 (Slider)</a></li>
                  <li><a href="index-6.html">Home 6 (Map)</a></li>
                  <li><a href="index-7.html">Home 7 (Video)</a></li>
                  <li><a href="index-8.html">Home 8 (Classic)</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div class="clearfix"></div>
          <!-- Main Navigation / End -->
        </div>
        <!-- Left Side Content / End -->

        <!-- Right Side Content / End -->
        <div class="right-side">
          <div class="header-widget">
            <router-link to="/sign-in" class="sign-in"><i class="sl sl-icon-login"></i> Sign In </router-link>
            <!-- User Menu -->
            <div class="user-menu">
              <div class="user-name">
                  <span><img src="" alt="" /></span
                  >Hi, Tom!
              </div>
              <ul>
                <li>
                  <a href="dashboard.html"
                  ><i class="sl sl-icon-settings"></i> Dashboard</a
                  >
                </li>
                <li>
                  <a href="dashboard-messages.html"
                  ><i class="sl sl-icon-envelope-open"></i> Messages</a
                  >
                </li>
                <li>
                  <a href="dashboard-bookings.html"
                  ><i class="fa fa-calendar-check-o"></i> Bookings</a
                  >
                </li>
                <li>
                  <a href="index.html"
                  ><i class="sl sl-icon-power"></i> Logout</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Right Side Content / End -->
      </div>
    </div>
    <!-- Header / End -->
  </header>
  <div class="clearfix"></div>
  <!-- Header Container / End -->
</template>

<style scoped lang="scss">

</style>