<template>
  <a-drawer
    v-model:visible="$props.drawerVisible"
    style="color: red"
    placement="left"
    :closable="false"
    width="80%"
    class="mobile-menu-drawer"
    @close="hideDrawer"
  >
    <template #title>
      <div class="drawer-title">
        <div class="toggle-button-cover">
          <div class="button r" id="button-3">
            <input
              type="checkbox"
              class="checkbox"
              :checked="lang === 'kz'"
              @change="switchLang"
            />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
        </div>
        <a-select
          v-model:value="cityChoose"
          style="width: 120px"
          :options="options"
          @change="onChooseCity"
        ></a-select>
        <svg
          @click="hideDrawer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 2L2 22"
            stroke="#013B82"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 2L22 22"
            stroke="#013B82"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </template>
    <div class="drawer-body">
      <div class="mobile-main-menu">
        <div class="mobile-main-menu-item" v-if="!useAuthExist().value">
          <img src="/assets/img/sign.svg" />
          <NuxtLink to="/login" @click="hideDrawer">
            <p class="mobile-main-menu-text">Войти</p>
          </NuxtLink>
        </div>
        <template v-else>
          <div class="mobile-main-menu-item">
            <img src="/assets/img/sign.svg" />
            <NuxtLink to="/account/cabinet" @click="hideDrawer">
              <p class="mobile-main-menu-text">{{ user_auth }}</p>
            </NuxtLink>
          </div>
          <div class="mobile-pages-menu">
            <NuxtLink to="/account/cabinet">
              <h2
                class="mobile-menu-h2"
                :class="$route.path === '/account/cabinet' ? 'active' : ''"
                @click="hideDrawer"
              >
                {{ $t("cabinet.h1") }}
              </h2>
            </NuxtLink>
          </div>
          <div class="mobile-pages-menu">
            <NuxtLink to="/account/basket">
              <h2
                class="mobile-menu-h2"
                :class="$route.path === '/account/basket' ? 'active' : ''"
                @click="hideDrawer"
              >
                {{ $t("basket.h0") }}
              </h2>
            </NuxtLink>
          </div>
          <div class="mobile-pages-menu">
            <NuxtLink to="/account/orders">
              <h2
                class="mobile-menu-h2"
                :class="$route.path === '/account/orders' ? 'active' : ''"
                @click="hideDrawer"
              >
                {{ $t("orders.h0") }}
              </h2>
            </NuxtLink>
          </div>
          <div class="mobile-pages-menu">
            <NuxtLink to="/account/starred">
              <h2
                class="mobile-menu-h2"
                :class="$route.path === '/account/starred' ? 'active' : ''"
                @click="hideDrawer"
              >
                {{ $t("starred.h0") }}
              </h2>
            </NuxtLink>
          </div>
          <div class="mobile-pages-menu">
            <NuxtLink to="/account/address">
              <h2
                class="mobile-menu-h2"
                :class="$route.path === '/account/address' ? 'active' : ''"
                @click="hideDrawer"
              >
                {{ $t("address.h0") }}
              </h2>
            </NuxtLink>
          </div>
          <div class="mobile-pages-menu">
            <NuxtLink to="/account/review">
              <h2
                class="mobile-menu-h2"
                :class="$route.path === '/account/review' ? 'active' : ''"
                @click="hideDrawer"
              >
                {{ $t("review.h0") }}
              </h2>
            </NuxtLink>
          </div>
        </template>
        <hr class="mobile-menu-line" />
        <div class="mobile-main-menu-item">
          <img src="/assets/img/header/our-address.svg" />
          <NuxtLink to="/contacts" @click="hideDrawer">
            <p class="mobile-main-menu-text">{{ $t("starred.h3") }}</p>
          </NuxtLink>
        </div>
        <div class="mobile-main-menu-item mt-10">
          <img src="/assets/img/header/phone.svg" />

          <div class="mobile-main-menu-text" v-if="cityChoose === '1'">
            <a href="tel: +7(701)643-74-19"> +7 701 643 74 19 </a>
          </div>
          <div class="mobile-main-menu-text" v-else>
            <a href="tel: +7 (771)727-07-05"> +7 771 727 07 05 </a>
          </div>
        </div>
        <hr class="mobile-menu-line" />
      </div>
    </div>

    <div class="mobile-pages-menu">
      <a-collapse :expand-icon-position="'right'" :accordion="true">
        <NuxtLink to="/catalog"
          ><h2
            class="mobile-menu-h2"
            :class="$route.path === '/catalog' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("catalog") }}
          </h2></NuxtLink
        >
        <a-collapse-panel>
          <template #header>
            <h2>{{ $t("headerMain.h0") }}</h2>
          </template>
          <NuxtLink
            :to="`/our`"
            :class="$route.path === '/our' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h1") }} </NuxtLink
          ><br />
          <NuxtLink
            :to="`/production`"
            :class="$route.path === '/production' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h2") }} </NuxtLink
          ><br />
          <NuxtLink
            :to="`/partners`"
            :class="$route.path === '/partners' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h3") }} </NuxtLink
          ><br />
          <NuxtLink
            :to="`/projects`"
            :class="$route.path === '/projects' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h4") }} </NuxtLink
          ><br />
        </a-collapse-panel>

        <a-collapse-panel>
          <template #header>
            <h2>{{ $t("headerMain.h7") }}</h2>
          </template>
          <NuxtLink
            :to="`/delivery`"
            :class="$route.path === '/delivery' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h8") }} </NuxtLink
          ><br />
          <NuxtLink
            :to="`/payment`"
            :class="$route.path === '/payment' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h9") }} </NuxtLink
          ><br />
          <NuxtLink
            :to="`/install`"
            :class="$route.path === '/install' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h10") }} </NuxtLink
          ><br />
          <NuxtLink
            :to="`/refund`"
            :class="$route.path === '/refund' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h11") }} </NuxtLink
          ><br />
        </a-collapse-panel>

        <NuxtLink to="/contacts"
          ><h2
            class="mobile-menu-h2"
            :class="$route.path === '/contacts' ? 'active' : ''"
            @click="hideDrawer"
          >
            {{ $t("headerMain.h12") }}
          </h2></NuxtLink
        >
      </a-collapse>

      <hr class="mobile-menu-line" />
      <a-row style="width: 80%">
        <a-col :xs="5">
          <SocialLink link="https://wa.me/+77014857618">
            <img
              src="/assets/img/social-images/meta-filled.svg"
              class="mobile-social-image"
              alt="Facebook"
            />
          </SocialLink>
        </a-col>
        <a-col :xs="5">
          <SocialLink link="https://vm.tiktok.com/ZMFQaHGpo/">
            <img
              class="mobile-social-image"
              src="/assets/img/social-images/tiktok-filled.svg"
              alt="Facebook"
            />
          </SocialLink>
        </a-col>
        <a-col :xs="5">
          <SocialLink link="hhttps://www.youtube.com/@ceramostonegroup129">
            <img
              class="mobile-social-image"
              src="/assets/img/social-images/youtube-filled.svg"
              alt="Facebook"
            />
          </SocialLink>
        </a-col>
        <a-col :xs="4">
          <SocialLink link="https://www.instagram.com/ceramo_stone_group/">
            <img
              class="mobile-social-image"
              src="/assets/img/social-images/instagram-filled.svg"
              alt="Facebook"
            />
          </SocialLink>
        </a-col>
        <a-col :xs="5">
          <SocialLink link="https://www.facebook.com">
            <img
              class="mobile-social-image"
              src="/assets/img/social-images/vk-filled.svg"
              alt="Facebook"
            />
          </SocialLink>
        </a-col>
      </a-row>
    </div>
  </a-drawer>
</template>

<script>
export default {
  props: {
    drawerVisible: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const { useAuthExist, checkJWT, useAuthUser } = useAuth();
    const showDrawer = () => {
      emit("showDrawer");
    };
    const hideDrawer = () => {
      emit("hideDrawer");
    };
    const i18n_redirected = useCookie("i18n_redirected");
    const lang = useCookie("lang");
    const user_auth = ref();
    const city = useCookie("city");
    const options = ref([
      {
        value: "1",
        label: "Алматы",
      },
      {
        value: "2",
        label: "Астана",
      },
    ]);
    onMounted(async () => {
      if (await checkJWT()) {
        user_auth.value = useAuthUser().value.username;
      }

      const city = useCookie("city");
      if (!city.value) {
        cityChoose.value = "1";
      }

      if (city.value === 2) {
        cityChoose.value = "2";
      } else {
        cityChoose.value = "1";
      }
    });
    const switchLang = () => {
      if (lang.value == "ru") {
        lang.value = "kz";
        i18n_redirected.value = "kz";
      } else {
        lang.value = "ru";
        i18n_redirected.value = "ru";
      }
      location.reload();
    };

    const cityChoose = ref("");

    const onChooseCity = () => {
      const city = useCookie("city");
      city.value = cityChoose.value;
      location.reload();
    };

    return {
      showDrawer,
      hideDrawer,
      user_auth,
      lang,
      switchLang,
      useAuthExist,
      cityChoose,
      city,
      options,
      onChooseCity,
    };
  },
};
</script>

<style scoped>
.drawer-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-main-menu-text {
  color: white;
  font-size: 23px;
  font-weight: 600;
}
.mobile-main-menu-text a {
  color: white;
}

.mobile-main-menu-item {
  display: flex;
  align-items: center;
}

.mobile-main-menu-item img {
  width: 32px;
}

.mobile-main-menu-item .mobile-main-menu-text {
  margin: 0;
  margin-left: 20px;
}

.mobile-menu-line {
  background-color: rgba(255, 255, 255, 0.3);
  height: 1px;
  border: none;
  margin: 20px 0;
}

.mobile-menu-h2 {
  padding: 12px 16px;
  font-size: 21px;
}

.mobile-social-block {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.mobile-social-image {
  height: 80%;
  display: block;
  margin: 0 auto;
}

.mobile-menu-h2.active {
  font-weight: 600;
}

.mobile-pages-menu a.active {
  font-weight: bold;
}

/* language button */
.toggle-button-cover {
  display: table-cell;
  position: relative;
  width: 200px;

  box-sizing: border-box;
}

.button-cover {
  /* height: 100px;
  margin: 20px; */
  background-color: #fff;
  box-shadow: 0 10px 20px -8px #c5d6d6;
  border-radius: 4px;
}

.button-cover:before {
  counter-increment: button-counter;
  content: counter(button-counter);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #ffffff;
  font-size: 12px;
  line-height: 1;
  padding: 5px;
}

.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
}

#button-3 .knobs:before {
  content: "RU";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 29px;
  height: 30px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #013b82;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .knobs:after {
  content: "KZ";
  position: absolute;
  top: 4px;
  right: 4px;
  width: 29px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  color: #013b82;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .checkbox:active + .knobs:before {
  width: 46px;
  border-radius: 100px;
}

#button-3 .checkbox:checked:active + .knobs:before {
  margin-left: -26px;
}

#button-3 .checkbox:checked + .knobs:before {
  content: "KZ";
  left: 42px;
  background-color: #013b82;
}

#button-3 .checkbox:checked + .knobs:after {
  content: "RU";
  right: 42px;
}

#button-3 .checkbox:checked ~ .layer {
  background-color: #ebf7fc;
}

.button {
  color: #000;
}
/* language button */

@media (max-width: 320px) {
  .mobile-social-image {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .toggle-button-cover {
    width: auto;
  }

  .button {
    margin: 0;
    position: inherit;
    top: 0;
  }
}
</style>
