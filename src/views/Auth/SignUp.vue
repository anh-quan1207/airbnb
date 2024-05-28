<script setup>
  import {createArrayNumber} from "@/utils/createArrayNumber";
  import { reactive } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const store = useStore();

  const arrayMonth = createArrayNumber(1, 12);
  const arrayYear = createArrayNumber(1960, 2023);
  const arrayDay = createArrayNumber(1, 31);
  const userRegister = reactive({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
    year: "",
    month: "",
    day: "",
    gender: "female",
    address: "",
  });
  const handleSubmit = () => {
    if (userRegister.password === userRegister.repeatPassword) {
      const data = {
        user_name: userRegister.name,
        email: userRegister.email,
        password: userRegister.password,
        password_confirmation: userRegister.repeatPassword,
        phone: userRegister.phone,
        birthday: `${userRegister.year}/${userRegister.month}/${userRegister.day}`,
        gender: userRegister.gender,
        address: userRegister.address,
      };
      store.dispatch("auth/signUpAction", {data, router});
    } else {
      alert("Password not match!");
    }
  };
</script>

<template>
  <!-- Sign In Popup -->
  <div id="sign-in-dialog" class="zoom-anim-dialog">

    <div class="small-dialog-header">
      <h3>Sign Up</h3>
    </div>

    <!--Tabs -->
    <div class="sign-in-form style-1">


      <div class="tabs-container alt">
        <!-- Register -->
        <div class="tab-content" id="tab2">

          <form method="post" class="register" @submit.prevent="handleSubmit">

            <p class="form-row form-row-wide">
              <label for="username">Username:
                <i class="im im-icon-Male"></i>
                <input type="text" class="input-text" name="username" id="username" v-model="userRegister.name"/>
              </label>
            </p>

            <p class="form-row form-row-wide">
              <label for="email">Email Address:
                <i class="im im-icon-Mail"></i>
                <input type="text" class="input-text" name="email" id="email" v-model="userRegister.email"/>
              </label>
            </p>

            <p class="form-row form-row-wide">
              <label for="phone">Phone Number:
                <i class="im im-icon-Phone-2"></i>
                <input type="text" class="input-text" name="phone" id="phone" v-model="userRegister.phone"/>
              </label>
            </p>

            <p class="form-row form-row-wide">
              <label for="birthday"
              >Birthday:
                <div style="display: flex">
                  <select v-model="userRegister.day">
                    <option label="day">day</option>
                    <option v-for="(day, index) in arrayDay" :key="index">
                      {{ day }}
                    </option>
                  </select>
                  <select v-model="userRegister.month">
                    <option label="month">month</option>
                    <option
                        v-for="(month, index) in arrayMonth"
                        :key="index"
                    >
                      {{ month }}
                    </option>
                  </select>
                  <select v-model="userRegister.year">
                    <option label="year">year</option>
                    <option
                        v-for="(year, index) in arrayYear"
                        :key="index"
                    >
                      {{ year }}
                    </option>
                  </select>
                </div>
              </label>
            </p>

            <p class="form-row form-row-wide">
              <label for="gender"
              >Gender:
                <select v-model="userRegister.gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </p>

            <p class="form-row form-row-wide">
              <label for="address"
              >Address:
                <i class="im im-icon-Location-2"></i>
                <input
                    class="input-text"
                    type="text"
                    name="address"
                    id="address"
                    v-model="userRegister.address"
                />
              </label>
            </p>

            <p class="form-row form-row-wide">
              <label for="password">Password:
                <i class="im im-icon-Lock-2"></i>
                <input class="input-text" type="password" name="password" id="password" v-model="userRegister.password"/>
              </label>
            </p>

            <p class="form-row form-row-wide">
              <label for="repassword">Repeat Password:
                <i class="im im-icon-Lock-2"></i>
                <input class="input-text" type="password" name="repassword2" id="repassword"  v-model="userRegister.repeatPassword"/>
              </label>
            </p>

            <input type="submit" class="button border fw margin-top-10" name="register" value="Register"/>

          </form>
        </div>

      </div>
    </div>
  </div>
  <!-- Sign In Popup / End -->
</template>

<style scoped lang="scss">
.form-row-wide select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background-color: #f9f9f9;
  margin-right: 10px;
}

.form-row-wide select:focus {
  outline: none;
  border-color: #6dabe4;
  box-shadow: 0 0 5px rgba(109, 171, 228, 0.5);
}
</style>