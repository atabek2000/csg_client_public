<script setup>
import { message } from "ant-design-vue";
const runtimeConfig = useRuntimeConfig();

const basket = ref([]);

const deleteBasket = (id) => {
  const { useStarred, deleteFromStarred } = useProduct();
  deleteFromStarred(id);
  basket.value = JSON.parse(useStarred().value);
};

onMounted(() => {
  const { useStarred } = useProduct();
  basket.value = JSON.parse(useStarred().value);
  console.log(basket);
});
</script>

<template>
  <div class="starred-block container">
    <h1 class="page-title">{{ $t("starred.h0") }}</h1>
    <a-row :gutter="[16, 0]">
      <a-col :md="6"> <AccountLeftBlock username="Username" /> </a-col>
      <a-col :md="18">
        <div class="starred-list" v-if="basket?.length > 0">
          <a-row
            class="starred-item"
            v-for="product in basket"
            :key="product"
            :gutter="[9, 18]"
          >
            <a-col :xs="24" :md="6">
              <NuxtLink
                :to="
                  '/catalog/' +
                  product.subcategory.category.slug +
                  '/product/' +
                  product.slug +
                  '/'
                "
              >
                <img
                  class="starred-item-image"
                  :src="runtimeConfig.public.API_HOST + product.main_image"
                  alt=""
                />
              </NuxtLink>
            </a-col>
            <a-col :xs="24" :md="18">
              <a-row class="starred-info">
                <a-col :xs="12">
                  <NuxtLink
                    :to="
                      '/catalog/' +
                      product.subcategory.category.slug +
                      '/product/' +
                      product.slug +
                      '/'
                    "
                  >
                    <p>{{ product.name }}</p>
                  </NuxtLink>
                  <!-- <h6>8T008</h6> -->
                </a-col>
                <a-col :xs="12" class="starred-item-right">
                  <div class="country">
                    <img
                      :src="
                        runtimeConfig.public.API_HOST + product.country.flag
                      "
                      alt=""
                    />
                    <p>Страна</p>
                  </div>
                  <div class="delete-icon" @click="deleteBasket(product.id)">
                    <img src="/assets/img/delete-icon.png" alt="" />
                  </div>
                </a-col>
              </a-row>
            </a-col>
            <hr style="width: 90%; background-color: #d9d9d9" />
          </a-row>
        </div>
        <div v-else class="mb-50">
          <p class="no-content-text">{{ $t("starred.h1") }}</p>
          <div class="address-button-block">
            <ButtonBlueOutlined @click="$router.push('/catalog')">{{
              $t("starred.h2")
            }}</ButtonBlueOutlined>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.starred-list {
  padding: 20px;
  background-color: white;
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

.starred-info {
  height: 100%;
}

.starred-item-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.starred-item-image {
  width: 100%;
}

.delete-icon {
  display: flex;
  justify-content: flex-end;
}

.address-button-block {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 768px) {
  .starred-item-image {
    width: 40%;
  }
}
</style>
