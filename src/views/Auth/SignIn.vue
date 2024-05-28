<script setup>
  import { reactive } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  const router = useRouter();

  const store = useStore();
  const userLogin = reactive({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    store.dispatch("auth/signInAction", {data: userLogin, router});
  };

</script>

<template>
  <!-- Sign In Popup -->
  <div id="sign-in-dialog" class="zoom-anim-dialog">

    <div class="small-dialog-header">
      <h3>Sign In</h3>
    </div>

    <!--Tabs -->
    <div class="sign-in-form style-1">

      <div class="tabs-container alt">
        <!-- Login -->
        <div class="tab-content" id="tab1">
          <form @submit.prevent="handleSubmit" class="login">

            <p class="form-row form-row-wide">
              <label for="email">Email:
                <i class="im im-icon-Mail"></i>
                <input type="text" class="input-text" name="email" id="email" value="" v-model="userLogin.email" />
              </label>
            </p>

            <p class="form-row form-row-wide">
              <label for="password">Password:
                <i class="im im-icon-Lock-2"></i>
                <input class="input-text" type="password" name="password" id="password" v-model="userLogin.password"/>
              </label>
              <span class="lost_password">
										<a href="#">Lost Your Password?</a>
									</span>
            </p>

            <div class="form-row">
              <input type="submit" class="button border margin-top-5" name="login" value="Login" />
              <div class="margin-top-10">
                <label>Don't have an account yet? <router-link to="/sign-up" class="go-to-signup">Sign Up </router-link></label>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
  <!-- Sign In Popup / End -->
</template>

<style scoped lang="scss">
  .go-to-signup {
    color: red;
  }
</style>