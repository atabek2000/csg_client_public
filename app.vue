<script setup>
const { initAuth } = useAuth();
useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/ns.html?id=GTM-WZM6TM3S",
      async: true,
    },
    {
      src: "https://lp9.ru/page/vunyke41",
      async: true,
    },
    {
      src: "https://www.googletagmanager.com/ns.html?id=GTM-WZM6TM3S",
      async: true,
    },
  ],
});
onBeforeMount(async () => {
  await initAuth();
});

const { locales, locale, setLocale } = useI18n();
const lang = useCookie("lang");
if (lang.value) {
  setLocale(lang.value);
} else {
  setLocale("ru");
}
onMounted(() => {});

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: "en",
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//     },
//     "google_translate_element"
//   );
// }
</script>

<template>
  <noscript
    ><img
      height="1"
      width="1"
      style="display: none"
      src="https://www.facebook.com/tr?id=691898159669642&ev=PageView&noscript=1"
  /></noscript>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <NuxtLayout>
    <!-- <div id="google_translate_element"></div> -->

    <HeaderMain
      v-if="
        $route.path === '/' || $route.path === '/kz/' || $route.path === '/kz'
      "
    />
    <Header v-else />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>

<style>
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

html {
  max-width: 100%;
}

body {
  font-size: 28px !important;
  background-color: rgba(244, 244, 249, 1);
  color: #545d66;
  /* overflow-y: hidden; */
}

ul {
  font-family: sans-serif;
}
.blue {
  font-family: sans-serif;
}

.container {
  padding-top: 60px;
  width: 85%;
  margin: 0 auto;
}

.text-important {
  font-size: 72px;
}

.collapsekz .ant-collapse > .ant-collapse-item > .ant-collapse-header {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 0px 0px;
  transition: all 0.3s, visibility 0s;
}
.collapsekz .colla {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 20px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  background-color: #01011a;
  border: 1px solid #01011a;
  border-bottom: 0;
  border-radius: 2px;
}
.collapsekz .ant-collapse > .ant-collapse-item {
  border-bottom: 1px solid #01011a;
}
.collapsekz .ant-collapse-content {
  color: rgba(0, 0, 0, 0.85);
  background-color: #01011a;
  border-top: 1px solid #01011a;
  padding: 0;
}
.collapsekz .ant-collapse-content > .ant-collapse-content-box {
  padding: 0;
}
/* 
.text-uppercase {
  text-transform: uppercase;
} */

.page-title {
  margin-top: 15px;
  font-size: 60px;
  color: rgba(1, 1, 68, 1);
  font-weight: 500;
}

.cursor-pointer {
  cursor: pointer;
}

.catalog-page-title {
  margin-top: 15px;
  font-size: 60px;
  color: rgba(1, 1, 68, 1);
  font-weight: 500;
}

.page-subtitle {
  margin-top: 15px;
  font-size: 23px;
  color: rgba(84, 93, 102, 1);
  font-weight: 500;
}

.page-subtitle-blue {
  /* font-family: "Gilroy"; */
  margin-top: 15px;
  font-size: 28px;
  color: rgba(1, 1, 68, 1);
  font-weight: 500;
}

.page-text {
  margin-top: 15px;
  font-size: 16px;
  color: rgba(84, 93, 102, 1);
  font-weight: 500;
}

.button-important {
  cursor: pointer;
  margin-top: 12px;
  padding: 1px 5px;
  border-radius: 20px;
  border: 2px solid #013b82;
  color: #013b82;
  font-weight: 500;
  margin-right: 10px;
  font-size: 22px;
  padding-left: 10px !important;
}

.button-important-active {
  margin-top: 12px;
  padding: 1px 5px;
  border-radius: 20px;
  border: 2px solid #013b82;
  color: white !important;
  background-color: #013b82;
  font-weight: 500;
  margin-right: 10px;
  font-size: 22px;
  padding-left: 10px !important;
}

.w-100 {
  width: 100%;
}

.m-0 {
  margin: 0;
}

.mt-10 {
  margin-top: 10px;
}

.mt-20 {
  margin-top: 30px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-90 {
  margin-top: 90px;
}

/* .mt-150 {
  margin-top: 150px;
} */

.mb-20 {
  margin-bottom: 20px;
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-100 {
  margin-bottom: 100px;
}

.address-modal-select .ant-select-selector {
  height: 40px !important;
  background-color: #f4f4f9 !important;
}

.bx-shadow {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

/* catalog */
.catalogs-block .ant-collapse {
  border: none;
  background: none;
  font-size: 28px;
}
.catalogs-block .ant-collapse-content {
  border: none;
}
.catalogs-block .ant-collapse-header {
  width: fit-content;
  border: none;
  padding-left: 0 !important;
  font-size: 23px;
  font-weight: 600;
  color: rgba(84, 93, 102, 1) !important;
}
.catalogs-block .ant-collapse-item {
  border: none !important;
}

.filter-sort-block {
  font-size: 15px;
  display: flex;
}

.filter-sort-block .filter-block {
  margin-right: 20px;
}

.filter-sort-block .filter-block span {
  margin-right: 5px;
}

.catalog-search-block {
  display: flex;
  justify-content: flex-end;
}

.catalog-search-input {
  max-width: 400px;
  border-radius: 90px;
  height: 44px;
  background-color: rgba(1, 59, 130, 0.1);
  font-size: 25px;
}
/* catalog */

/* fonts */

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-upper {
  text-transform: uppercase;
}

.small-text-17 {
  font-size: 17px;
  font-weight: 400;
}

.small-text-17-500 {
  font-size: 17px;
  font-weight: 500;
}

.small-text-17-300 {
  font-size: 17px;
  font-weight: 300;
}

.small-text-20 {
  font-size: 20px;
  font-weight: 500;
}

.medium-text-28 {
  font-size: 18px;
  font-weight: 400;
  color: #545d66;
}
.medium-text-20 {
  font-size: 20px;
  font-weight: bold;
}
.medium-text-25 {
  font-weight: 500;
  font-size: 25px;
  margin: 0;
}
.medium-text-23 {
  font-weight: 600;
  font-size: 23px;
  margin: 0;
}
.small-text-15 {
  font-weight: 400;
  font-size: 15px;
  margin: 0;
}

.big-text-50-500 {
  font-size: 50px;
  font-weight: 500;
}

.bread-crumb {
  margin-top: 70px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.bread-crumb a,
.bread-crumb svg {
  color: #545d66;
  font-size: 20px;
  margin-right: 10px;
}

.bread-crumb-current {
  font-weight: 500;
}

.button-text {
  cursor: pointer;
  user-select: none;
}

.fw-500 {
  font-weight: 500;
}

.fw-600 {
  font-weight: 600;
}

.fw-700 {
  font-weight: 600;
}

/* fonts */

/* flex */
.fx {
  display: flex;
}

.fx-jcc {
  display: flex;
  justify-content: center;
}

.fx-jcsb {
  display: flex;
  justify-content: space-between;
}
/* flex */

/* ant-tabs */

.product-options .ant-tabs-content-holder {
  background-color: white;
  padding: 30px;
}
.product-options .ant-tabs-nav {
  margin: 0;
}

.product-options .ant-tabs-tab {
  padding: 10px 30px !important;
  font-size: 28px;
  font-weight: 500;
  color: #545d66 !important;
}

.product-options .ant-tabs-tab-active {
  padding: 10px 30px !important;
  font-size: 28px;
  font-weight: 500;
  color: white !important;
  background-color: #013b82 !important;
}

.product-options .ant-tabs-tab-active .ant-tabs-tab-btn {
  color: white;
}
/* ant-tabs */

/* ant-spin */
.ant-spin {
  margin: 10px auto;
}
.spin-block {
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
/* ant-spin */

/* filter-modal */
.filter-modal .modal-title {
  color: #010144;
  font-size: 24px;
  text-align: center;
  font-weight: 500;
}

.filter-modal .section-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 20px;
  color: rgba(84, 93, 102, 1);
}

.filter-modal .size-block {
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  font-weight: 400;
}

.filter-modal .size-block span + span {
  margin-left: 20px;
}

.filter-modal .size-block > .active {
  font-weight: 600;
}

.filter-modal .country-button {
  display: inline-flex;
  padding: 5px 30px;
  color: rgba(1, 59, 130, 0.65);
  border: 1px solid rgba(1, 59, 130, 0.65);
  border-radius: 30px;
  /* font-size: 15px; */
}

.filter-modal .country-button.active {
  background-color: rgba(1, 59, 130, 0.65);
  color: white;
}

.filter-modal .country-button + .country-button {
  /* margin-left: 20px; */
}

.filter-modal input {
  height: 33px;
  font-size: 15px;
}

.filter-modal .ant-modal-body {
  background-color: rgba(244, 244, 249, 1);
}
.filter-modal .ant-slider-rail {
  background-color: rgba(1, 59, 130, 0.35);
}
.filter-modal .ant-slider-handle,
.filter-modal .ant-slider-track {
  border: none;
  background-color: rgba(1, 59, 130, 1);
}

.throw {
  border-radius: 30px;
  padding: 5px 30px;
  color: white;
  background-color: rgba(1, 59, 130, 0.65);
  font-size: 20px;
}
/* filter-modal */

/* swiper */
.swiper-wrapper {
  display: flex;
  align-items: center;
}
/* swiper */

/* drawer */
.mobile-menu-drawer .ant-drawer-body {
  background-color: #013b82;
}

.mobile-pages-menu .ant-collapse {
  background: none;
  border: none;
}

.mobile-pages-menu .ant-collapse-content {
  background: none;
  border: none;
}

.mobile-pages-menu .ant-collapse-content {
  border: none;
}

.mobile-pages-menu .ant-collapse > .ant-collapse-item {
  border: none;
}

.mobile-pages-menu .anticon svg {
  fill: white;
}
.mobile-pages-menu .ant-collapse-content-box {
  padding: 0 16px;
}

.mobile-pages-menu h2 {
  font-weight: 400;
}

.mobile-pages-menu a {
  font-size: 18px;
}

.mobile-pages-menu h2,
.mobile-pages-menu a,
.mobile-pages-menu .ant-collapse > .ant-collapse-item > .ant-collapse-header {
  color: white;
  margin: 0;
}

.mobile-pages-menu .ant-collapse > .ant-collapse-item > .ant-collapse-header {
  width: fit-content;
}
/* drawer */
/* modal */
.ant-modal-body {
  /* text-align: center; */
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
}

.ant-modal {
  width: 50%;
}
/* modal */
/* counter  */
.counter {
  /* font-family: "Gilroy-Regular"; */
  background-image: url(./assets/img/333.png);
  background-size: cover;
  max-width: 100%;
  max-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 70px;
  padding-bottom: 290px;
  text-align: center;
}

.counter .counter-cell {
  margin-bottom: 4rem;
}

.counter .purecounter {
  /* font-family: "Gilroy-Regular"; */
  color: #ffffff;
  font-weight: 700;
  font-size: 4rem;
  line-height: 3rem;
}

.counter .counter-cell {
  display: inline-block;
  margin-right: 0rem;
  margin-left: 1.5rem;
  vertical-align: top;
}

.counter .purecounter {
  /* padding-left: 100px; */
  font-size: 2.5rem;
  line-height: 3rem;
}

.counter .counter-info {
  /* padding-left: 100px; */
  padding-top: 0.7rem;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 43px;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.1rem;
}
/* counter  */

/* swiper-button */
.swiper-button-prev {
  background-image: url(/assets/img/swiper/swiper-prev.svg);
  background-size: 100%;
  background-repeat: no-repeat;
}

.swiper-button-next {
  background-image: url(/assets/img/swiper/swiper-next.svg);
  background-size: 100%;
  background-repeat: no-repeat;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  content: none !important;
  font-family: "Courier New", Courier, monospace;
}

.device-catalog-block .swiper-catalog-name.catalog-elem-active {
  text-decoration: underline;
  text-transform: uppercase;
}

.device-catalog-block .swiper-slide img {
  height: 100%;
  object-fit: contain;
}

.swiper-slide-element-block {
  /* height: 400px; */
  /* background-color: white; */
}

.swiper-pagination .swiper-pagination-bullet {
  background-color: rgba(1, 1, 68, 0.5);
  width: 12px;
  height: 12px;
}
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: rgba(1, 1, 68, 1);
}
/* swiper-button */

/* sort-dropdown */
.sort-dropdown {
  padding: 10px;
}

.sort-dropdown.ant-dropdown-menu {
  background-color: rgba(1, 59, 130, 1);
}

.sort-dropdown .ant-dropdown-menu-title-content span {
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.sort-dropdown .ant-dropdown-menu-item {
  margin-bottom: 10px;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  position: relative;
  font-size: 17px;
  font-weight: 800;
  color: #013b82;
  background-color: #fff;
  border: 0px solid #d9d9d9;
  border-radius: 20px !important;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-left: 10px;
  padding-right: 10px;
}
.sort-dropdown
  .ant-dropdown-menu-item.active
  .ant-dropdown-menu-title-content
  span {
  text-decoration: underline;
  font-weight: 500;
}
/* sort-dropdown */

/* counter block */
.counter-item-block {
  color: white;
  text-align: left;
  font-size: 23px;
  font-weight: 200;
}
.counter-item-block1 {
  color: white;
  text-align: left;
  font-size: 23px;
}

.counter-pure {
  /* font-size: 35px; */
  font-weight: 700;
  text-transform: uppercase;
}
/* counter block */

/* project-block */
.project-block .swiper,
.project-block .swiper-container {
  z-index: auto;
}

.project-block .swiper-wrapper {
  z-index: auto;
}
/* project-block */

/* ant popover */
.ant-popover-inner-content {
  background-color: rgba(1, 1, 68, 1);
  color: white;
}

.ant-popover-message {
  color: white;
}

.ant-popover .ant-popover-message-title {
  padding-left: 0;
}

.ant-popover .ant-popover-arrow span {
  background-color: rgba(1, 1, 68, 1);
}
.ant-popover .backtop-title {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
.ant-popover .backtop-content input {
  margin-top: 10px;
  border-radius: none;
}

.ant-popover .backtop-content .call-me-button {
  display: block;
  background-color: rgba(255, 185, 1, 1);
  text-align: center;
  text-transform: uppercase;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
}

.ant-popover .backtop-content .numbers-block {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.ant-popover .backtop-content .numbers-block span {
  font-size: 13px;
  font-weight: 600;
  color: white;
}
/* ant popover */

/* city select modal */
.ant-modal.city-select-modal .ant-modal-content {
  border-radius: 20px;
}
/* city select modal */

.no-content-text {
  padding: 20px;
  background-color: white;
  color: black;
}

/* media queries */

@media screen and (max-width: 768px) {
  .medium-text-28 {
    font-size: 10px;
  }

  .small-text-17 {
    font-size: 12px;
  }

  .page-title {
    font-size: 23px;
    color: rgba(1, 1, 68, 1);
    font-weight: 500;
  }

  .catalog-page-title {
    font-size: 30px;
    color: rgba(1, 1, 68, 1);
    font-weight: 500;
    margin: 10px 0;
  }

  .page-subtitle {
    font-size: 17px;
    color: rgba(84, 93, 102, 1);
    font-weight: 500;
  }

  .page-subtitle-blue {
    /* font-family: "Gilroy"; */
    font-size: 17px;
    color: rgba(1, 1, 68, 1);
    font-weight: 500;
  }

  .page-text {
    font-size: 15px;
    color: rgba(84, 93, 102, 1);
    font-weight: 500;
  }

  .product-options .ant-tabs-tab {
    padding: 5px 15px !important;
    font-size: 12px;
    font-weight: 500;
    color: #545d66 !important;
    margin: 0 !important;
  }

  .product-options .ant-tabs-tab-active {
    padding: 5px 15px !important;
    font-size: 12px;
    font-weight: 500;
    color: white !important;
    margin: 0 !important;
    background-color: #013b82 !important;
  }
  svg {
    max-width: 90%;
  }

  svg path {
    transition: opacity 400ms;
  }

  svg path:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .bread-crumb {
    display: block;
    white-space: wrap;
  }

  .cabinet-form-element {
    width: 100%;
  }

  .sort-dropdown .ant-dropdown-menu-title-content span {
    color: white;
    font-size: 17px;
    font-weight: 300;
  }

  .sort-dropdown .ant-dropdown-menu-item {
    margin-bottom: 0px;
  }

  .counter.bg-gray {
    display: none;
  }

  .no-content-text {
    font-size: 23px;
  }
}

@media screen and (max-width: 500px) {
  .container {
    width: 95%;
    margin: 0 auto;
  }
  html,
  body {
    overflow-x: hidden;
  }
}
/* media queries */
</style>
