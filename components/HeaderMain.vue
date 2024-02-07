<template>
  <div class="head">
    <!-- <div class="test">Интернет магазин еще в разработке(Тестовый режим)</div> -->
    <div class="header" :style="'background-color: rgba(1, 59, 130, 0.6);'">
      <div class="header-first">
        <a-select
          v-model:value="cityChoose"
          style="width: 120px"
          :options="options"
          @change="onChooseCity"
        ></a-select>
        <div class="social_items" v-if="cityChoose === '1'">
          Call center: <a href="tel: +7(701)643-74-19"> +7 701 643 74 19 </a>
        </div>
        <div class="social_items" v-else>
          Call center: <a href="tel: +7 (771)727-07-05"> +7 771 727 07 05 </a>
        </div>
      </div>
      <NuxtLink class="header__logo" to="/">
        <img src="/assets/img/LOGOg.png" width="234" />
      </NuxtLink>

      <div class="catalog">
        <div class="grid-container">
          <!-- <div class="item1">
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              >{{ locale.name }}</NuxtLink
            >
          </div> -->
          <div class="item2">
            <div id="app-cover">
              <div class="row">
                <div class="toggle-button-cover">
                  <div class="button r" id="button-3">
                    <a-input
                      type="checkbox"
                      class="checkbox"
                      :checked="lang === 'kz'"
                      @change="switchLang"
                    />
                    <div class="knobs"></div>
                    <div class="layer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="child1">
            <div class="footer-col third1">
              <SocialLink link="https://wa.me/+77014857618">
                <img src="../assets/img/meta.png" alt="Facebook" />
              </SocialLink>
              <SocialLink link="https://vm.tiktok.com/ZMFQaHGpo/">
                <img src="../assets/img/tiktok.png" alt="Facebook" />
              </SocialLink>
              <SocialLink link="https://www.youtube.com/@ceramostonegroup129">
                <img src="../assets/img/youtube(2).png" alt="Facebook" />
              </SocialLink>
              <SocialLink link="https://www.instagram.com/ceramo_stone_group/">
                <img src="../assets/img/insta.png" alt="Facebook" />
              </SocialLink>
            </div>
          </div> -->
          <div class="item4" style="padding-top: 8px">
            <div class="sign">
              <img src="../assets/img/sign.svg" />
              <NuxtLink to="/account/cabinet" v-if="useAuthExist().value">{{
                userModel.last_name
              }}</NuxtLink>
              <NuxtLink to="/login" v-else>{{ $t("headerMain.h16") }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="catalog"
      style="position: fixed; top: 135px; z-index: 1000; width: 100%"
    >
      <div class="navbar">
        <li class="nav-item">
          <NuxtLink to="/catalog/" class="dropbtn">Каталог</NuxtLink>
        </li>

        <li class="nav-item">
          <div class="dropdown">
            <button class="dropbtn">{{ $t("headerMain.h0") }}</button>
            <div class="dropdown-content">
              <NuxtLink to="/our">{{ $t("headerMain.h1") }}</NuxtLink>
              <NuxtLink to="/production">{{ $t("headerMain.h2") }}</NuxtLink>
              <NuxtLink to="/partners">{{ $t("headerMain.h3") }}</NuxtLink>
              <NuxtLink to="/projects">{{ $t("headerMain.h4") }}</NuxtLink>
              <NuxtLink to="/montage">{{ $t("headerMain.h5") }}</NuxtLink>
            </div>
          </div>
        </li>

        <div class="nav-item">
          <div class="dropdown">
            <button class="dropbtn">{{ $t("headerMain.h7") }}</button>
            <div class="dropdown-content" style="left: -15px">
              <NuxtLink to="/delivery">{{ $t("headerMain.h8") }}</NuxtLink>
              <NuxtLink to="/payment">{{ $t("headerMain.h9") }}</NuxtLink>
              <NuxtLink to="/install">{{ $t("headerMain.h10") }}</NuxtLink>
              <NuxtLink to="/refund">{{ $t("headerMain.h11") }}</NuxtLink>
            </div>
          </div>
        </div>
        <li class="nav-item">
          <NuxtLink to="/contacts" class="dropbtn">{{
            $t("headerMain.h12")
          }}</NuxtLink>
        </li>
      </div>
    </div>

    <div class="mobile-header">
      <NuxtLink class="header__logo" to="/">
        <img src="../assets/img/LOGOg.png" width="234" class="mobile-logo" />
      </NuxtLink>
      <div class="mobile-header-right">
        <NuxtLink
          :to="useAuthExist().value ? '/account/basket' : '/login'"
          style="margin-right: 15px"
        >
          <a-badge :count="basket_count">
            <img
              src="/assets/img/catalog/basket-white.svg"
              alt=""
              style="height: 22px; margin-bottom: 5px"
            />
          </a-badge>
        </NuxtLink>

        <img
          src="/img/header/burger.svg"
          alt="burger"
          class="borger-icon"
          @click="showDrawer"
        />
      </div>

      <MobileMainDrawer
        :drawerVisible="drawerVisible"
        @showDrawer="showDrawer"
        @hideDrawer="hideDrawer"
      />
    </div>
    <div class="textnav container">
      {{ $t("headerMain.mainText") }}
      <hr />
    </div>
    <div class="backtop-button">
      <a-popconfirm placement="topRight" :visible="popconfirmVisible">
        <template #okButton> <div></div> </template>
        <template #cancelButton><div></div></template>
        <template #icon><div></div></template>
        <template #title>
          <div>
            <p class="backtop-title">
              {{ $t("headerMain.h13") }} <br />
              {{ $t("headerMain.h14") }}
            </p>
            <div class="backtop-content">
              <a-input
                :value="phone_value"
                @change="onChangePhone"
                placeholder="+7 (777) 000 00 00"
              ></a-input>
              <span class="call-me-button" @click="sendPhone">
                {{ $t("headerMain.h15") }}</span
              >
              <div class="numbers-block">
                <a href="tel:+77016437419">
                  <span>+7 701 643 74 19</span>
                </a>
                <a href="tel:+7 771 727 07 00">
                  <span>+7 771 727 07 00</span>
                </a>
              </div>
            </div>
          </div>
        </template>
        <div class="static-phone-button">
          <img
            src="\assets\img\main\main-phone.svg"
            alt=""
            class="phone-image"
            @click="showPopconfirm"
          />
          <img
            src="\assets\img\main\main-cancel.svg"
            alt=""
            class="cancel-image"
            @click="hidePopconfirm"
          />
        </div>
      </a-popconfirm>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { message } from "ant-design-vue";
import changePhoneMask from "~/utils/changePhoneMask";
export default {
  setup() {
    const { useAuthExist } = useAuth();
    const drawerVisible = ref(false);
    onBeforeMount(() => {
      if (localStorage.getItem("auth_user")) {
        const user = JSON.parse(localStorage.getItem("auth_user"));
        userModel.first_name = user["first_name"];
        userModel.last_name = user["last_name"];
      }
    });
    const i18n_redirected = useCookie("i18n_redirected");
    const lang = useCookie("lang");

    const runtimeConfig = useRuntimeConfig();
    const showDrawer = () => {
      drawerVisible.value = true;
    };
    const hideDrawer = () => {
      drawerVisible.value = false;
    };
    const userModel = reactive({
      first_name: undefined,
      last_name: undefined,
    });
    const popconfirmVisible = ref(false);

    const hidePopconfirm = () => {
      popconfirmVisible.value = false;
    };

    const showPopconfirm = () => {
      popconfirmVisible.value = true;
    };

    const phone_value = ref("");

    const sendPhone = async () => {
      if (phone_value.value.length !== 18) {
        message.error("Укажите номер телефона!");
      } else {
        $fetch(runtimeConfig.public.API_URL + "feedback", {
          method: "POST",
          body: {
            number: phone_value.value,
          },
        })
          // await useFetchApi("feedback", {
          //   method: "POST",
          //   body: {
          //     number: phone_value.value,
          //   },
          // })
          .then(() => {
            popconfirmVisible.value = false;
            message.success("Спасибо! Мы свяжемся с Вами в ближайшее время");
            phone_value.value = "";
          })
          .catch((error) => {
            message.error(error);
          });
      }
    };
    const switchLang = () => {
      if (lang.value == "kz") {
        lang.value = "ru";
        i18n_redirected.value = "ru";
      } else {
        lang.value = "kz";
        i18n_redirected.value = "kz";
      }
      location.reload();
    };

    const onChangePhone = (e) => {
      phone_value.value = changePhoneMask(e.target.value);
    };
    const city = useCookie("city");
    const basket_count = ref(0);
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

    const cityChoose = ref("");

    const onChooseCity = () => {
      const city = useCookie("city");
      city.value = cityChoose.value;
      location.reload();
    };

    onMounted(() => {
      const { useBasket } = useProduct();
      basket_count.value = JSON.parse(useBasket().value)?.length;

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
    return {
      drawerVisible,
      showDrawer,
      hideDrawer,
      phone_value,
      onChangePhone,
      useAuthExist,
      basket_count,
      sendPhone,
      popconfirmVisible,
      showPopconfirm,
      hidePopconfirm,
      userModel,
      lang,
      options,
      switchLang,
      cityChoose,
      onChooseCity,
      city,
    };
  },
};
</script>

<style scoped>
.head {
  background-image: url(../assets/img/DC6M65B.png);
  background-size: cover;
  height: 900px;
}
.social_items a {
  color: white;
}

.textnav {
  width: 1440px;
  text-align: left;
  color: #ffffff;
  font-style: normal;
  font-weight: 750;
  line-height: 55px;
  text-transform: uppercase;
  padding-top: 350px;
  font-size: 45px;
  width: 100%;
  height: 60%;
  width: 80%;
}

.textnav hr {
  width: 10%;
  background-color: white;
  height: 3px;
  margin-left: 0;
}

.test {
  font-size: 20px;
  color: red;
}
.grid-container {
  padding-bottom: 12px;
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  grid-template-rows: 1fr 1fr;
  gap: 10px; /* пробел между элементами */
}

.grid-container > div {
  text-align: right;
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 0;
}

#app-cover {
  display: table;
  width: 200px;
  margin: 0;
  counter-reset: button-counter;
}

.row {
  display: table-row;
}

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
  margin: 0 0 0 auto;
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

/* Button 3 */
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

.nav-item {
  display: flex;
}
.header .catalog {
  color: white !important;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 50%;
  flex-flow: calc(25% 0 25%);
}

.header {
  padding-left: 11%;
  padding-right: 8%;
  /* background-image: url(../assets/img/DC6M65B.png); */
  font-family: "Gilroy";
  /* position: absolute; */
  width: 100%;
  flex-basis: 0;
  /* left: 0px;
    top: 0px; */
  display: flex;
  flex-basis: 100%;
  flex-flow: column wrap;
  flex-direction: row;
  align-items: center;
  position: fixed;
  z-index: 1000;
  opacity: 1;
  align-content: center;
  flex-wrap: wrap;
  /* background-color: rgba(1, 59, 130, 0.55); */
}
.header .header-first {
  width: 32%;
}
.header .header__logo {
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 32%;
  text-align: center;
}
.header .catalog {
  cursor: pointer;
  width: 32%;
  display: flex;
}
.header .social_items {
  margin-top: 30px;
  text-align: left;
  font-size: 20px;
  color: white;
  margin-left: 0.5rem;
  padding-top: 0px;
}

.header__logo {
  text-align: center;
}

.navbar {
  padding-left: 10%;
  max-width: 100%;
  padding-right: 10%;
  /* font-family: "Gilroy"; */
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.55);
  border-bottom: 1px solid rgba(255, 255, 255, 0.55);
  color: black;
  margin-top: 0 !important;
  background-color: rgba(1, 59, 130, 0.6);
}
.catalog .navbar .nav-item > a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
}
.catalog .navbar .nav-item {
  /* width: 100%; */
  color: #ffffff !important;
  padding-top: 10px;
  font-weight: 200;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  flex-direction: row;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px 20px;
  width: 255px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: rgba(1, 59, 130, 1) !important;
  padding: 1px 5px;
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  display: block;
  text-align: center;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  /* background-color: rgba(1, 59, 130, 1); */
}

.catalog .navbar .nav-item1 a {
  text-decoration: none;
  color: #ffffff;
}
.button {
  color: #000;
}
.catalog .navbar .nav-item1 {
  padding-left: 225px;
  width: 100%;
  /* color: #ffffff !important;
  border: 1px solid rgba(5, 2, 2, 0.55); */
  box-sizing: border-box;
  padding-top: 25px;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
}

.navbar {
  max-width: 100%;
}

/* Style The Dropdown Button */
.dropbtn {
  /* font-family: "Gilroy"; */
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  background-color: rgba(1, 59, 130, 0);
  color: white;
  padding: 16px;
  font-size: 30px;
  border: none;
  cursor: pointer;
}

.line {
  margin-left: 25px;
}
/* .textnav {
  display: flex;
  justify-content: center;
} */
.swiper {
  display: flex;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.social-link img {
  height: 80%;
  margin: 0 auto;
  object-fit: contain;
  display: block;
}

.third1 {
  display: flex;
  justify-content: space-between;
}

.mobile-header {
  top: 0;
  z-index: 1000;
  width: 100%;
  position: fixed;
  display: none;
  padding: 10px;
  background-color: rgba(1, 59, 130, 0.55);
}
.mobile-header .mobile-logo {
  width: 100px;
}
.mobile-header .basket-icon {
  margin-right: 15px;
  width: 25px;
  height: 25px;
}

.mobile-header-right {
  display: flex;
  align-items: center;
}

.sign a {
  color: white;
  margin-left: 10px;
  font-size: 20px;
}

.social_items .phone-number {
  margin-top: -5px;
}

/* ant backtop */

.backtop-button .ant-back-top {
  bottom: 100px;
  right: 200px;
}

.static-phone-button {
  position: fixed;
  right: 200px;
  bottom: 100px;
  z-index: 10;
  cursor: pointer;
}

.static-phone-button .phone-image {
  width: 80px;
  height: 80px;
}
.static-phone-button .cancel-image {
  width: 80px;
  height: 80px;
  display: none;
}
.static-phone-button.ant-popover-open .phone-image {
  display: none;
}
.static-phone-button.ant-popover-open .cancel-image {
  display: block;
}

@media screen and (max-width: 1560px) {
  /* .header-first {
    display: none;
  } */

  /* .header {
    justify-content: space-between;
  }
  .header .catalog {
    width: 60%;
    justify-content: flex-end;
  } */
}

@media screen and (max-width: 768px) {
  .header {
    display: none;
  }
  .navbar {
    display: none;
  }

  .map-container {
    display: none;
    align-items: center;
    justify-content: space-between;
  }

  .mobile-header {
    display: flex;
    justify-content: space-between;

    align-items: center;
    background-image: none;
  }

  .toggle-button-cover {
    width: auto;
  }

  .button {
    margin: 0;
    position: inherit;
    top: 0;
  }

  .head {
    height: 70%;
    padding-bottom: 50px;
  }

  .textnav {
    padding-top: 165px;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    width: 90%;
  }

  .textnav hr {
    width: 40%;
  }

  .static-phone-button {
    right: 15px;
    bottom: 50px;
  }
  .static-phone-button img {
    width: 60px;
    height: 60px;
  }
}
</style>
