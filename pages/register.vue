<template>
  <div class="login-block">
    <div class="login-logo-block">
      <div>
        <NuxtLink style="width: 40%" to="/">
          <img style="width: 100%" src="../assets/img/LOGOb.png" />
        </NuxtLink>
      </div>
      <h2>{{ $t("register.h0") }}</h2>
    </div>
    <div class="login-login-block">
      <p>{{ $t("register.h1") }}</p>
      <a-input
        v-model:value="registerForm.last_name"
        @pressEnter="auth"
      ></a-input>
    </div>
    <div class="login-login-block">
      <p>{{ $t("register.h2") }}</p>
      <a-input
        v-model:value="registerForm.first_name"
        @pressEnter="auth"
      ></a-input>
    </div>
    <div class="login-login-block">
      <p>{{ $t("register.h3") }}</p>
      <a-input
        v-model:value="registerForm.phone_number"
        @change="onChangePhone"
        @pressEnter="auth"
      ></a-input>
    </div>
    <div class="login-pass-block">
      <p>{{ $t("register.h4") }}</p>
      <a-input
        v-model:value="registerForm.password"
        type="password"
        @pressEnter="auth"
      ></a-input>
    </div>
    <div class="login-pass-block">
      <p>{{ $t("register.h5") }}</p>
      <a-input
        v-model:value="registerForm.password_2"
        type="password"
        @pressEnter="auth"
      ></a-input>
    </div>
    <div class="login-forgot-block">
      <NuxtLink to="/login">
        <span class="small-text-20">{{ $t("register.h6") }}</span>
      </NuxtLink>
    </div>
    <div class="login-button-block">
      <span @click="auth" @pressEnter="auth" class="button-text login-button">{{
        $t("register.h7")
      }}</span>
      <!-- <span class="button-text login-button" style="opacity: 0.5">{{
        $t("register.h7")
      }}</span> -->
    </div>
    <!-- <p style="color: red">{{ $t("register.h8") }}</p> -->
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";
const { session, refresh, update: sessionUpdate, reset } = await useSession();
const loader = useLoader();

const registerForm = reactive({
  first_name: undefined,
  last_name: undefined,
  phone_number: undefined,
  password: undefined,
  password_2: undefined,
  designer: undefined,
});

const onChangePhone = (e) => {
  console.log(e);
  registerForm.phone_number = changePhoneMask(e.target.value);
};

const auth = async () => {
  const { auth } = useAuth();
  if (!registerForm.last_name) {
    message.error("Укажите имя!");
  } else if (!registerForm.phone_number) {
    message.error("Укажите номер телефона!");
  } else if (!registerForm.password) {
    message.error("Укажите пароль!");
  } else if (!registerForm.password_2) {
    message.error("Повторите пароль!");
  } else if (registerForm.password_2 !== registerForm.password) {
    message.error("Пароли не совпадают!");
  } else {
    loader.startLoading();
    const data = await auth(registerForm).finally(() => {
      window.location.href = "/account/cabinet";
      loader.stopLoading();
    });
  }
};
</script>

<style scoped>
.login-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  max-width: 550px;
  padding: 20px;
  margin: 30px auto;
  color: #013b82;
  border: 1px solid #013b82;
}

.login-block div {
  width: 100%;
  margin-top: 20px;
}

.login-block p {
  margin: 0;
}

.login-logo-block h2 {
  color: #013b82;
  text-align: center;
}

.login-logo-block div {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.login-button-block {
  display: flex;
  justify-content: center;
}

.login-button-block .login-button {
  background-color: #0fcb22;
  border-radius: 10px;
  color: white;
  padding: 5px 50px;
}

.login-forgot-block {
  margin-top: 5px !important;
  display: flex;
  justify-content: flex-end;
}

.login-forgot-block span {
  text-decoration: underline;
}

.login-login-block input,
.login-pass-block input {
  height: 50px !important;
  background-color: rgba(1, 59, 130, 0.15);
  font-size: 20px;
  color: #013b82;
}
</style>
