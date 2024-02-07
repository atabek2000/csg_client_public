<template>
  <div class="login-block">
    <div class="login-logo-block">
      <div>
        <NuxtLink style="width: 40%" to="/">
          <img style="width: 100%" src="../assets/img/LOGOb.png" />
        </NuxtLink>
      </div>
      <h2>{{ $t("login.h0") }}</h2>
    </div>
    <div class="login-login-block">
      <p>{{ $t("login.h1") }}</p>
      <a-input v-model:value="loginForm.login" @pressEnter="login"></a-input>
    </div>
    <div class="login-pass-block">
      <p>{{ $t("login.h2") }}</p>
      <a-input
        v-model:value="loginForm.password"
        type="password"
        @pressEnter="login"
      ></a-input>
    </div>
    <div class="login-forgot-block">
      <NuxtLink to="/register">
        <span class="small-text-20">{{ $t("login.h3") }}</span>
      </NuxtLink>
    </div>
    <div class="login-button-block">
      <span @click="login" class="button-text login-button">{{
        $t("login.h4")
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";
const { session, refresh, update: sessionUpdate, reset } = await useSession();
const loader = useLoader();
const route = useRoute();

const loginForm = reactive({
  login: undefined,
  password: undefined,
});

const login = async () => {
  const { login: loginUser } = useAuth();
  if (loginForm.login && loginForm.password) {
    try {
      loader.startLoading();
      const data = await loginUser({
        username: loginForm.login,
        password: loginForm.password,
        redirectTo: route.query.r ? route.query.r : "/account/cabinet",
      });
      // console.log(data);
      // await sessionUpdate({userId})
    } catch (e) {
      console.log(e);
    } finally {
    }
  } else {
    message.error("Заполните поля!");
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
