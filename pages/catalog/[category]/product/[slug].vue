<template>
  <div>
    <div v-if="!pending" class="product-block container">
      <div class="bread-crumb">
        <NuxtLink to="/catalog/">Каталог</NuxtLink>
        <BreadCrumbDelimiter />
        <NuxtLink :to="'/catalog/' + product.subcategory.category.slug">{{
          product.subcategory.category?.name_ru
        }}</NuxtLink>
        <BreadCrumbDelimiter />
        <NuxtLink class="bread-crumb-current">{{ product.name }}</NuxtLink>
      </div>
      <div class="product-info">
        <div class="main-image">
          <img
            :src="
              product.main_image
                ? runtimeConfig.public.API_HOST + product.main_image
                : '/public/img/main/loader.png'
            "
            :alt="product.name"
            :style="
              'object-fit: ' + product.subcategory.category.product_image_show
            "
          />
        </div>
        <div class="info-block">
          <div class="info-block-title">
            <div>
              <span class="small-text-17">
                {{ product.subcategory.category?.name_ru }}
              </span>
              <p class="medium-text-28" style="margin: 0; color: white">
                {{ product.name }}
              </p>
              <span class="small-text-20"
                >{{ product.width }}x{{ product.height }}</span
              >
            </div>
            <div style="display: flex">
              <span class="small-text-17">{{ product.country?.name_ru }}</span
              >&nbsp;&nbsp;
              <img
                v-if="product.country"
                width="60"
                height="35"
                :src="runtimeConfig.public.API_HOST + product.country?.flag"
                alt=""
              />
            </div>
          </div>
          <div class="info-block-interier">
            <p class="small-text-15">{{ $t("slug.h0") }}</p>
            <a-row :gutter="[9, 9]">
              <a-col
                :xs="8"
                :md="8"
                style="padding: 10px"
                v-for="image in product.images"
                :key="image"
              >
                <div class="interier-image">
                  <a-image
                    style="cursor: pointer"
                    :previewMask="false"
                    :src="runtimeConfig.public.API_HOST + image.image"
                    :alt="product.name"
                  />
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
      <div class="product-options">
        <a-tabs type="card">
          <a-tab-pane key="1" :tab="t('slug.h18')">
            <a-row class="a-row">
              <a-col :xs="4" v-if="product.size"
                ><span class="small-text-17">{{ $t("slug.h1") }}</span></a-col
              >
              <a-col :xs="4"
                ><span class="small-text-17">{{ $t("slug.h2") }}</span></a-col
              >
              <a-col :xs="4"
                ><span class="small-text-17">{{ $t("slug.h3") }}</span></a-col
              >
              <a-col :xs="5"
                ><span class="small-text-17">{{ $t("slug.h4") }}</span>
                <span
                  v-if="
                    product.width &&
                    product.height &&
                    product.subcategory.category.multiple_unit == 1
                  "
                  class="unit-select-button button-text"
                  :class="selectedUnit === 0 ? 'active' : ''"
                  @click="setSelectedUnit(0)"
                  >м²</span
                >
                <span
                  v-if="
                    product.width &&
                    product.height &&
                    product.subcategory.category.multiple_unit == 1
                  "
                  class="unit-select-button button-text"
                  :class="selectedUnit === 1 ? 'active' : ''"
                  @click="setSelectedUnit(1)"
                  >шт.</span
                ></a-col
              >
              <a-col :xs="4">
                <span class="small-text-17">{{ $t("slug.h5") }}</span>
              </a-col>
              <a-col :xs="3">
                <span class="small-text-17">{{ $t("slug.h6") }}</span>
              </a-col>
            </a-row>
            <hr class="hr" style="background-color: #013b82; height: 2px" />
            <a-row class="a-row2">
              <a-col :xs="4"
                ><span class="medium-text-28">
                  {{
                    product.prices.filter((price) => price.city.id == city)
                      .length > 0 &&
                    product.prices.filter((price) => price.city.id == city)[0]
                      .remain
                      ? product.prices.filter(
                          (price) => price.city.id == city
                        )[0]?.remain +
                        (product.unit ? product.unit.name : "м2/шт")
                      : ""
                  }}</span
                ></a-col
              >
              <a-col :xs="4">
                <span class="medium-text-28"
                  >{{
                    product.prices.filter((price) => price.city.id == city)
                      .length > 0 &&
                    product.prices.filter((price) => price.city.id == city)[0]
                      .price
                      ? product.prices.filter(
                          (price) => price.city.id == city
                        )[0]?.price
                      : ""
                  }}
                  тг</span
                ></a-col
              >

              <a-col :xs="5" style="padding-right: 20px">
                <div style="display: flex">
                  <a-input
                    class="medium-text-28"
                    style="padding: 0"
                    v-model:value="productCount"
                    @change="onChangeProductCount"
                    type="number"
                  />
                  <span
                    v-if="
                      product.width &&
                      product.height &&
                      product.subcategory.category.multiple_unit == 1
                    "
                    class="medium-text-28"
                    >&nbsp;{{ selectedUnit ? "шт." : "м²" }}</span
                  >
                  <span v-else class="medium-text-28"
                    >&nbsp;{{ product.unit?.name }}</span
                  >
                </div>
              </a-col>
              <a-col :xs="4">
                <div style="display: flex">
                  <span class="medium-text-28"
                    >{{ roundedSize }} {{ product.unit?.name }}</span
                  >
                </div>
              </a-col>
              <a-col :xs="3">
                <span class="medium-text-28"
                  >{{ numberFormat(productAmout) }} тг.</span
                >
              </a-col>
            </a-row>
            <hr class="hr2" style="background-color: #013b82; height: 1px" />
            <!-- <a-row>
              <a-col :xs="6"
                ><span class="medium-text-28">Слэб 20 мм полиров.</span></a-col
              >
              <a-col :xs="6"
                ><span class="medium-text-28">44 635 м2</span></a-col
              >
              <a-col :xs="6"
                ><span class="medium-text-28">4 500 / м2</span></a-col
              >
              <a-col :xs="6"
                ><input type="text" /><span class="medium-text-28"
                  >м2</span
                ></a-col
              >
            </a-row>
            <hr style="background-color: #013b82; height: 1px" /> -->

            <a-card hoverable class="cardprice1">
              <div class="calc-caption">Цена</div>
              <a-col class="price1">
                {{
                  city === 2
                    ? numberFormat(product.price_2)
                    : numberFormat(product.price)
                }}
                / {{ product.unit?.name }}</a-col
              >
            </a-card>
            <a-card hoverable class="cardprice" style="margin-top: 30px">
              <div class="calc-caption">
                КАЛЬКУЛЯТОР
                <span
                  v-if="
                    product.width &&
                    product.height &&
                    product.subcategory.category.multiple_unit == 1
                  "
                  class="unit-select-button button-text"
                  :class="selectedUnit === 0 ? 'active' : ''"
                  @click="setSelectedUnit(0)"
                  >м²</span
                >
                <span
                  v-if="
                    product.width &&
                    product.height &&
                    product.subcategory.category.multiple_unit == 1
                  "
                  class="unit-select-button button-text"
                  :class="selectedUnit === 1 ? 'active' : ''"
                  @click="setSelectedUnit(1)"
                  >шт.</span
                >
                <div
                  style="
                    display: flex;
                    max-width: 240px;
                    font-size: 15px;
                    padding-top: 20px;
                  "
                >
                  <div
                    class="decrement-button"
                    :disabled="decrementDisabled"
                    @click="decrement"
                    @change="onChangeProductCount"
                  >
                    −
                  </div>

                  <a-input
                    class="medium-text-28"
                    oninput="this.value = this.value.replace(/[^\d]/g, '')"
                    style="padding: 0; text-align: center; font-size: 15px"
                    v-model:value="productCount"
                    @change="onChangeProductCount"
                  />
                  <div
                    class="increment-button"
                    :disabled="incrementDisabled"
                    @click="increment"
                    @change="onChangeProductCount"
                  >
                    +
                  </div>
                </div>
              </div>
              <div
                class="footcard"
                style="
                  display: flex;
                  justify-content: space-between;
                  max-width: 240px;
                  padding-top: 20px;
                  font-size: 15px;
                "
              >
                <span style="font-size: 15px"
                  >{{ roundedSize }} {{ product.unit?.name }}</span
                >
                <span>{{ numberFormat(productAmout) }} тг.</span>
              </div>
              <div
                class="card-order-wrap"
                style="padding-top: 20px; max-width: 240px; font-size: 15px"
              >
                <a
                  @click="showModal"
                  class="text-link add_to_order popup_open"
                  data-id="popup_leave_request_oneclickbuy"
                  >Заказать в один клик</a
                >
              </div>
              <div>
                <a-modal
                  class="modalvip"
                  v-model:visible="open"
                  title=""
                  @ok="handleOk"
                  :footer="null"
                >
                  <p style="text-align: center; padding-bottom: 5px">
                    Заказать в один клик
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
                </a-modal>
              </div>
            </a-card>
            <a-card hoverable class="cardprice1">
              <div class="calc-caption">Способы доставки</div>
              <a-col class="price2">Самовызов </a-col>
              <a-col class="price2">Курьером </a-col>
              <a-col class="price2">Доставка по Казахстану </a-col>
            </a-card>
            <button
              style="
                margin: 0 auto;
                margin-top: 30px;
                border: none;
                border-radius: 5px;
                background-color: #ffb901;
                color: white;
                display: block;
                padding: 10px 30px;
                cursor: pointer;
              "
              class="small-text-20"
              v-if="
                city === 2 ? product.remain_2 > 0 || 0 : product.remain > 0 || 0
              "
              @click="buyProduct(product)"
            >
              {{ $t("slug.h7") }}
            </button>
            <button
              style="
                margin: 0 auto;
                margin-top: 30px;
                border: none;
                border-radius: 5px;
                background-color: #ecdbb1;
                color: white;
                display: block;
                padding: 10px 30px;
                cursor: pointer;
              "
              class="small-text-20"
              v-else
            >
              {{ $t("slug.h7") }}
            </button>
          </a-tab-pane>
          <a-tab-pane key="2" :tab="t('slug.h19')">
            <div v-for="spec in product.specification" :key="spec.name_ru">
              <a-row>
                <a-col :md="12"
                  ><p class="small-text-17">
                    &nbsp;&nbsp;{{ spec.name_ru }}
                  </p></a-col
                >
                <a-col :md="12"
                  ><p class="small-text-17">
                    &nbsp;&nbsp;{{ spec.value_ru }}
                  </p></a-col
                >
              </a-row>
              <hr style="background-color: #013b82; height: 1px" />
            </div>
          </a-tab-pane>
          <a-tab-pane key="3" :tab="t('slug.h20')">
            <a-comment>
              <template #content>
                <div class="no-review-text" v-if="!reviews.length">
                  <p>{{ $t("slug.h8") }}</p>
                </div>
                <div v-if="useAuthExist().value" class="review-add-block">
                  <a-form-item>
                    <p class="review-title">{{ $t("slug.h9") }}</p>
                    <a-textarea v-model:value="productReview" :rows="4" />
                    <small
                      v-if="productReviewError"
                      class="review-error-text"
                      >{{ $t("slug.h10") }}</small
                    >
                  </a-form-item>
                  <a-form-item>
                    <p class="review-title">{{ $t("slug.h11") }}</p>
                    <a-rate v-model:value="rateValue">
                      <template #character>
                        <svg
                          focusable="true"
                          class=""
                          data-icon="star"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                          viewBox="64 64 896 896"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                          ></path>
                        </svg>
                      </template>
                    </a-rate>
                    <small
                      v-if="rateValueError"
                      class="review-error-text rate"
                      >{{ $t("slug.h12") }}</small
                    >
                  </a-form-item>
                  <a-form-item>
                    <span
                      class="button-text throw"
                      @click="addReview(product.id)"
                      >{{ $t("slug.h13") }}</span
                    >
                  </a-form-item>
                </div>
                <div v-else class="no-auth-for-review">
                  <p>
                    Чтобы оставить свой отзыв, нужно
                    <NuxtLink :to="'/login?r=' + route.path"
                      >авторизоваться</NuxtLink
                    >.
                  </p>
                </div>

                <div class="review-list mt-50" v-if="reviews.length">
                  <p class="review-title">Отзывы:</p>
                  <a-row
                    v-for="review in reviews"
                    :key="review.id"
                    class="mt-20"
                  >
                    <a-col :xs="24" :md="2" class="review-user-icon">
                      <img
                        style="color: gray"
                        src="/assets/img/catalog/user-icon.svg"
                      />
                    </a-col>
                    <a-col :xs="24" :md="16" class="review-content">
                      <div class="review-owner">
                        {{ review.user.last_name }}
                      </div>
                      <div class="review-text">
                        {{ review.message }}
                      </div>
                    </a-col>
                    <a-col :xs="24" :md="6" class="review-rate">
                      <a-rate :value="review.rating" disabled>
                        <template #character>
                          <svg
                            focusable="true"
                            class=""
                            data-icon="star"
                            width="27px"
                            height="27px"
                            fill="currentColor"
                            aria-hidden="true"
                            viewBox="64 64 896 896"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                            ></path>
                          </svg>
                        </template>
                      </a-rate>
                    </a-col>
                  </a-row>
                </div>
              </template>
            </a-comment>
          </a-tab-pane>
        </a-tabs>
        <div class="contact-us mb-20 mt-50">
          <p class="call-us" style="text-align: center">
            {{ $t("slug.h14") }}
          </p>
          <p class="consult-you">
            {{ $t("slug.h15") }}
          </p>
          <a-row :gutter="[9, 12]" class="contact-block mt-90">
            <a-col :xs="24" :md="8">
              <p class="contact-text" style="text-align: center">
                +7 (771) 727-07-00
              </p>
            </a-col>
            <a-col :xs="24" :md="8">
              <button
                style="
                  margin: 0 auto;
                  border: none;
                  border-radius: 5px;
                  background-color: #ffb901;
                  color: white;
                  display: block;
                "
                class="contact-text"
              >
                {{ $t("slug.h16") }}
              </button>
            </a-col>
            <a-col :xs="24" :md="8">
              <p class="contact-text" style="text-align: center">
                callcenter@c-s-g.kz
              </p>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container">
        <div class="spin-block">
          <a-spin size="large" tip="Загрузка..."></a-spin>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";
import { ref } from "vue";
import numberFormat from "~/utils/numberFormatt";
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const { useAuthExist } = useAuth();

const phone_value = ref("");
const city = useCookie("city");
const productCount = ref(1);
const { t } = useI18n();
const rateValue = ref(0);
const rateValueError = ref(false);
const productReview = ref("");
const productReviewError = ref(false);
const selectedUnit = ref(0);
const roundedSize = ref(0);
const productAmout = ref(0);
const open = ref(false);
const setSelectedUnit = (val) => {
  selectedUnit.value = val;
  onChangeProductCount();
};
const onChangePhone = (e) => {
  phone_value.value = changePhoneMask(e.target.value);
};
const addReview = (id) => {
  const { useAuthUser } = useAuth();
  const user = useAuthUser();
  let error = false;
  if (rateValue.value === 0) {
    rateValueError.value = true;
    error = true;
  } else {
    rateValueError.value = false;
  }
  if (productReview.value.length < 20) {
    productReviewError.value = true;
    error = true;
  } else {
    productReviewError.value = false;
  }
  if (!error) {
    useFetchApi("review/", {
      method: "POST",
      body: {
        rating: rateValue.value,
        message: productReview.value,
        product_id: id,
      },
    })
      .then(async (res) => {
        message.success("Успешно сохранено!");
        reviews.value.push({
          rating: rateValue.value,
          message: productReview.value,
          user: { first_name: user.value.last_name },
        });
        rateValue.value = "";
        productReview.value = "";
      })
      .catch((error) => {
        message.error(error.message);
      });
  }
};

const showModal = () => {
  open.value = true;
};
const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
const buyProduct = (product) => {
  if (productCount.value) {
    const { addToBasket } = useProduct();
    const added = addToBasket({
      id: product.id,
      name: product.name,
      country: product.country,
      img: product.main_image,
      slug: product.slug,
      subcategory: product.subcategory,
      count: Number(productCount.value),
      unit: selectedUnit.value === 1 ? "шт." : "м²",
    });

    if (added) {
      useRouter().push("/account/basket");
    }
  } else {
    message.error("Укажите кол.во!");
  }
};

const { data: product, pending } = await useLazyAsyncData(`product`, () =>
  $fetch(
    runtimeConfig.public.API_URL +
      `product/${route.params.category}/${route.params.slug}`
  )
);

const { data: reviews, review_pending } = await useLazyAsyncData(() =>
  $fetch(runtimeConfig.public.API_URL + `review/list/`, {
    params: {
      product_slug: route.params.slug,
    },
  })
);

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
        message.success("Спасибо! Мы свяжемся с Вами в ближайшее время");
        phone_value.value = "";
      })
      .catch((error) => {
        message.error(error);
      });
  }
};
const onChangeProductCount = () => {
  const prodSquare =
    (Number(product.value?.width) / 1000) *
    (Number(product.value?.height) / 1000);

  if (
    product.value?.width &&
    product.value?.height &&
    product.value?.subcategory.category.multiple_unit == 1
  ) {
    if (selectedUnit.value === 1) {
      roundedSize.value = (Number(productCount.value) * prodSquare).toFixed(2);
    } else {
      roundedSize.value = (
        Math.ceil(Number(productCount.value) / prodSquare) * prodSquare
      ).toFixed(2);
    }
  } else {
    if (product.value?.unit?.name === "м²") {
      roundedSize.value = (
        Math.ceil(Number(productCount.value) / prodSquare) * prodSquare
      ).toFixed(2);
    } else {
      roundedSize.value = productCount.value;
    }
  }

  productAmout.value =
    roundedSize.value *
    Number(
      city.value === 2 ? product.value?.price_2 : product.value?.price
    ).toFixed(2);

  productAmout.value = productAmout.value.toFixed(2);
};

function increment() {
  productCount.value++;
  onChangeProductCount();
}
function decrement() {
  productCount.value--;
  onChangeProductCount();
}

onMounted(() => {
  onChangeProductCount();
});
</script>

<style scoped>
.product-block {
  color: white;
}

.product-info {
  display: flex;
  position: relative;
}
.main-image {
  background-color: white;
  width: 70%;
  /* display: flex; */
  /* justify-content: center; */
}
.main-image img {
  height: 100%;
  height: 500px;
  width: 100%;
  object-fit: fill;
}
.info-block {
  padding: 20px;
  position: absolute;
  right: 0px;
  bottom: -50px;
  background: rgba(1, 59, 130, 0.75);
  width: 50%;
}

.info-block-title {
  display: flex;
  justify-content: space-between;
}
.info-block-interier {
  margin-top: 20px;
}
.cardprice {
  display: none;
}
.product-options {
  margin-top: 150px;
  color: #545d66;
}

.call-us {
  font-weight: bold;
}

.interier-image {
  background-color: white;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  object-fit: cover;
}

.interier-image img {
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  object-fit: cover;
}

.consult-you {
  text-align: center;
  font-size: 20px;
}

.contact-text {
  font-size: 28px;
  font-weight: 500;
}

.review-title {
  font-size: 20px;
  font-weight: 500;
}
.cardprice1 {
  display: none;
}
.review-error-text {
  color: red;
  font-size: 14px;
  display: block;
}

.review-owner {
  font-size: 28px;
  font-weight: 600;
}

.review-text {
  font-size: 20px;
  font-weight: 400;
}

.review-user-icon {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.review-rate {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.no-review-text {
  font-size: 22px;
  font-weight: 600;
  color: #013b82;
}

.no-auth-for-review {
  font-size: 15px;
  font-weight: 500;
  color: orangered;
}

.unit-select-button {
  margin-left: 5px;
  border: 1px solid #013b82;
  border-radius: 10px;
  padding: 0 5px;
  font-size: 15px;
  line-height: 15px;
  vertical-align: middle;
}

.unit-select-button.active {
  background-color: #013b82;
  color: white;
}

@media screen and (max-width: 768px) {
  .product-info {
    flex-direction: column;
  }
  .cardprice {
    display: flex;
  }
  .numbers-block {
    display: flex;
    justify-content: space-between;
  }
  .call-me-button {
    background-color: #ffb901;
    cursor: pointer;
    display: block;
    margin-top: 5px;
    padding: 5px 0;
    text-align: center;
    text-transform: uppercase;
  }
  .card-order-wrap {
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    text-decoration: none;
    line-height: 18px;
    color: rgba(1, 59, 130, 0.75);
    border-bottom: 1px dashed rgba(1, 59, 130, 0.75);
  }
  .decrement-button {
    min-width: 61px;
    border: 2px solid #e8e8e8;
    border-radius: 1px;
    height: 48px;
    line-height: 46px;
    text-align: center;
    cursor: pointer;
  }
  .backtop-content {
    color: white;
  }
  .increment-button {
    min-width: 61px;
    border: 2px solid #e8e8e8;
    border-radius: 1px;
    height: 48px;
    line-height: 46px;
    text-align: center;
    cursor: pointer;
  }

  .calc-caption {
    color: #242424;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    margin-right: 10px;
  }
  .footcard {
    display: flex;
    justify-content: space-between;
  }
  .info-block {
    position: inherit;
    margin-top: -100px;
    width: 90%;
  }

  .product-options input {
    width: 80%;
  }

  .call-us {
    font-size: 16px;
    font-weight: bold;
  }
  .consult-you {
    font-size: 16px;
  }

  .main-image {
    width: 100%;
  }

  .main-image img {
    text-align: center;
    height: 60%;
    width: 60%;
    object-fit: fill;
  }

  .contact-text {
    font-size: 16px;
  }

  .contact-block {
    margin-top: 30px;
  }

  .price1 {
    color: #013b82;
    font-size: 30px;
  }
  .price2 {
    color: #242424;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-top: 12px;
  }
  .cardprice1 {
    display: flex;
  }
  .review-title {
    font-size: 15px;
    font-weight: 500;
  }

  .review-error-text {
    font-size: 10px;
  }

  .review-rate {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .a-row {
    display: none;
  }
  .a-row2 {
    display: none;
  }
  .hr {
    display: none;
  }
  .hr2 {
    display: none;
  }
  .review-owner {
    font-size: 22px;
    font-weight: 600;
  }

  .review-text {
    font-size: 17px;
    font-weight: 400;
  }
}
</style>
