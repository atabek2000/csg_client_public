<template>
  <div class="cabinet-block container">
    <h1 class="page-title">{{ $t("cabinet.h0") }}</h1>
    <div class="mobile-icon-block">
      <div class="mobile-icon mt-10">
        <img src="/img/account/account-icon.svg" alt="" />
      </div>
      <h3>{{ userModel.first_name }} {{ userModel.last_name }}</h3>
    </div>
    <a-row :gutter="[16, 0]">
      <a-col :md="6">
        <AccountLeftBlock username="Username" />
      </a-col>
      <a-col :md="18">
        <div class="cabinet-block-info">
          <h3 class="mobile-hide">{{ $t("cabinet.h1") }}</h3>
          <a-row :gutter="16" class="cabinet-form">
            <a-col :md="12" class="cabinet-form-element">
              <p>{{ $t("cabinet.h3") }}</p>
              <a-input
                v-model:value="userModel.last_name"
                @pressEnter="saveCahnges"
              />
            </a-col>
            <a-col :md="12" class="cabinet-form-element">
              <p>{{ $t("cabinet.h2") }}</p>
              <a-input
                v-model:value="userModel.first_name"
                @pressEnter="saveCahnges"
              />
            </a-col>
            <a-col :md="12" class="cabinet-form-element">
              <p>{{ $t("cabinet.h4") }}</p>
              <a-input
                v-model:value="userModel.phone_number"
                @change="onChangePhone"
                @pressEnter="saveCahnges"
              />
            </a-col>
            <a-col :md="12" class="cabinet-form-element">
              <p>Email</p>
              <a-input
                v-model:value="userModel.email"
                @pressEnter="saveCahnges"
              />
            </a-col>
          </a-row>
          <a-checkbox v-model:checked="userModel.designer" name="type">{{
            $t("cabinet.h5")
          }}</a-checkbox>
          <p class="designer-info">
            {{ $t("cabinet.h6") }} <a href="">{{ $t("cabinet.h7") }}</a>
          </p>
          <div class="logout-block-mobile mt-20">
            <p class="save-button" @click="saveCahnges">
              {{ $t("cabinet.h8") }}
            </p>
            <span class="logout-button-mobile" @click="logout">
              {{ $t("cabinet.h9") }}
            </span>
          </div>
        </div>

        <div class="social-block">
          <h4>{{ $t("cabinet.h10") }}</h4>
          <h6>{{ $t("cabinet.h11") }}</h6>
          <div class="social-links">
            <SocialLink link="https://www.facebook.com/csg.kz/">
              <img src="/assets/img/social-images/meta.png" alt="" />
            </SocialLink>
            <SocialLink link="https://vm.tiktok.com/ZMFQaHGpo/">
              <img src="/assets/img/social-images/tiktok.png" alt="" />
            </SocialLink>
            <SocialLink link="https://www.youtube.com/@ceramostonegroup129">
              <img src="/assets/img/social-images/youtube.png" alt="" />
            </SocialLink>
            <SocialLink link="https://www.instagram.com/ceramo_stone_group/">
              <img src="/assets/img/social-images/instagram.png" alt="" />
            </SocialLink>
          </div>
        </div>

        <div class="logout-block mt-20 mb-50">
          <span class="logout-button" @click="logout">
            {{ $t("cabinet.h9") }}
          </span>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";
const { setAuthExist } = useAuth();

const runtimeConfig = useRuntimeConfig();
const { fetchUser } = useAuth();

const userModel = reactive({
  first_name: undefined,
  last_name: undefined,
  phone_number: undefined,
  email: undefined,
  designer: false,
});

const onChangePhone = (e) => {
  userModel.phone_number = changePhoneMask(e.target.value);
};

const saveCahnges = async () => {
  if (userModel.first_name === "") {
    message.error("Укажите фамилию!");
  } else if (userModel.last_name === "") {
    message.error("Укажите имя!");
  } else if (userModel.phone_number.length === "") {
    message.error("Укажите номер телефона!");
  } else {
    const user = await useFetchApi("users/me/", {
      method: "PATCH",
      body: {
        first_name: userModel.first_name,
        last_name: userModel.last_name,
        phone_number: userModel.phone_number,
        email: userModel.email,
        designer: userModel.designer,
      },
      onResponseError({ request, response, options }) {
        showFetchError(response);
        // console.log(response);
      },
    })
      .then(() => {
        fetchUser();
        message.success("Сохранено!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const logout = () => {
  localStorage.clear("access_token");
  localStorage.clear("refresh_token");
  localStorage.clear("auth_user");
  setAuthExist(false);
  useRouter().push("/");
};

onBeforeMount(() => {
  if (localStorage.getItem("auth_user")) {
    const user = JSON.parse(localStorage.getItem("auth_user"));
    userModel.first_name = user["first_name"];
    userModel.last_name = user["last_name"];
    userModel.phone_number = changePhoneMask(user["phone_number"]);
    userModel.email = user["email"];
    userModel.designer = user["designer"];
  }
});
setInterval(function () {
  var url = "#";
  $("body").load(url);
}, 300000000);
</script>

<style scoped>
.cabinet-block-info {
  background-color: white;
  padding: 10px;
}

.cabinet-form-element {
  padding-right: 50px !important;
  margin-bottom: 20px;
}

.designer-info {
  font-size: 14px;
  margin-left: 25px;
}

.designer-info a {
  color: red;
  text-decoration: underline;
}
.cabinet-form p {
  margin: 0;
  font-size: 17px;
}
.cabinet-form input {
  background-color: #f4f4f9;
}
.save-button {
  background-color: #013b82;
  padding: 5px 20px;
  color: white;
  cursor: pointer;
  width: fit-content;
  user-select: none;
  font-size: 23px;
  margin-top: 20px;
}

.social-block {
  padding: 20px;
  background-color: white;
  margin: 20px 0;
}
.social-links a {
  margin-right: 20px;
}

.logout-button {
  border: 1px solid rgba(237, 15, 15, 1);
  color: rgba(237, 15, 15, 1);
  padding: 5px 40px;
  cursor: pointer;
}

.logout-block-mobile {
  display: flex;
  font-size: 23px;
  justify-content: space-between;
}

.logout-button-mobile {
  border: 1px solid rgba(237, 15, 15, 1);
  color: rgba(237, 15, 15, 1);
  padding: 5px 40px;
  cursor: pointer;
  display: none;
}

.mobile-icon-block {
  display: none;
}

@media screen and (max-width: 768px) {
  .logout-button {
    display: none;
  }
  .logout-button-mobile {
    display: inline;
    margin-top: 20px;
  }

  .mobile-hide {
    display: none;
  }

  .mobile-icon-block {
    display: block;
  }
}
</style>
