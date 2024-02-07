<template>
  <div class="review-block container">
    <h1 class="page-title">{{ $t("review.h0") }}</h1>
    <a-row :gutter="[16, 9]">
      <a-col :md="6"> <AccountLeftBlock username="Username" /> </a-col>
      <a-col :md="18">
        <div class="review-list" v-if="reviews.length > 0">
          <div class="review-item" v-for="review in reviews" :key="review.id">
            <a-row :gutter="[9, 9]">
              <a-col :xs="24" :md="6" class="review-image-block">
                <img
                  :src="
                    runtimeConfig.public.API_HOST + review.product.main_image
                  "
                  alt=""
                />
              </a-col>
              <a-col :xs="24" :md="18" class="review-info-block">
                <div class="review-info">
                  <div>
                    <NuxtLink
                      :to="
                        '/catalog/' +
                        review.product.subcategory.category.slug +
                        '/product/' +
                        review.product.slug +
                        '/'
                      "
                      >{{ review.product.name }}</NuxtLink
                    >
                    <h4>{{ review.product.price }} тг.</h4>
                    <a-rate v-model:value="rateValue">
                      <template #character>
                        <HeartOutlined />
                      </template>
                    </a-rate>
                  </div>
                  <div class="country">
                    <img
                      :src="
                        runtimeConfig.public.API_HOST +
                        review.product.country.flag
                      "
                      alt=""
                    />
                    <p>{{ review.product.country.name_ru }}</p>
                  </div>
                </div>
                <div class="review-text">
                  <p>
                    {{ review.message }}
                  </p>
                  <a @click="showReview(review)">Читать</a>
                </div>
              </a-col>
              <hr style="width: 90%; background-color: #d9d9d9" />
            </a-row>
          </div>
        </div>
        <div v-else class="mb-50">
          <p class="no-content-text">{{ $t("review.h2") }}</p>
        </div>
      </a-col>
    </a-row>
    <a-modal
      v-model:visible="selectedReview.visible"
      :title="selectedReview.product_name"
      :footer="null"
    >
      <p>{{ selectedReview.content }}</p>
    </a-modal>
  </div>
</template>

<script setup>
import { HeartOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
const runtimeConfig = useRuntimeConfig();
const { useAccessToken } = useAuth();

const rateValue = ref(2);

const reviews = ref([]);

const selectedReview = reactive({
  visible: false,
  content: undefined,
  product_name: undefined,
  price: undefined,
});

const showReview = (review) => {
  selectedReview.visible = true;
  selectedReview.content = review.message;
  selectedReview.product_name = review.product.name;
  selectedReview.price = review.product.price;
};

onBeforeMount(async () => {
  if (useAccessToken().value) {
    await useFetchApi("review/list/", {
      method: "GET",
    })
      .then((res) => {
        reviews.value = res;
      })
      .catch((error) => {
        message.error(error.message);
      });
  }
});
</script>

<style scoped>
.review-info {
  display: flex;
  justify-content: space-between;
}

.review-info p {
  margin: 0;
}

.country {
  display: flex;
  font-size: 18px;
  justify-content: flex-end;
}

.country img {
  margin-right: 10px;
  width: 50px;
  height: 25px;
  object-fit: cover;
}

.review-text {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}
.review-text p {
  width: 80%;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}

.review-image-block img {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .review-image-block img {
    width: 40%;
  }
  .review-info {
    max-width: 60%;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
