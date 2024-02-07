<template>
  <div class="orders-block container">
    <h1 class="page-title">{{ $t("orders.h0") }}</h1>
    <a-row :gutter="[16, 0]">
      <a-col :md="6">
        <AccountLeftBlock username="Username" />
      </a-col>
      <a-col :md="18">
        <div class="orders-list" v-if="orders.length > 0">
          <div class="order-item" v-for="order in orders" :key="order.id">
            <a-row :gutter="16">
              <a-col :xs="24" :md="6">
                <div class="order-image">
                  <img
                    :src="
                      runtimeConfig.public.API_HOST +
                      order.order_items[0].product.main_image
                    "
                  />
                </div>
              </a-col>
              <a-col :xs="24" :md="18">
                <div class="order-info">
                  <a-row>
                    <a-col :xs="12" class="order-info-left">
                      <NuxtLink
                        :to="order.order_items[0].product.get_absolute_url"
                        >{{ order.order_items[0].product.name }}</NuxtLink
                      >

                      <div class="country">
                        <p>Страна:</p>
                        <p>
                          {{ order.order_items[0].product.country.name_ru }}
                          <img
                            :src="
                              runtimeConfig.public.API_HOST +
                              order.order_items[0].product.country.flag
                            "
                            alt=""
                          />
                        </p>
                      </div>
                      <p>
                        {{ order.order_items[0].product.price }}
                      </p>
                    </a-col>
                    <a-col :xs="12" class="order-info-right">
                      <p class="order-info-main">
                        {{
                          order.status === "paid"
                            ? "Оплачено"
                            : "cart"
                            ? "В Корзине"
                            : "Ожидает выплаты"
                        }}
                      </p>
                    </a-col>
                  </a-row>
                </div>
              </a-col>
              <hr style="width: 90%; background-color: #d9d9d9" />
            </a-row>
          </div>
        </div>
        <div v-else class="mb-50">
          <p class="no-content-text">{{ $t("orders.h3") }}</p>
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

<script setup>
import { message } from "ant-design-vue";
const { useAccessToken } = useAuth();
const runtimeConfig = useRuntimeConfig();
const orders = ref([]);

onBeforeMount(async () => {
  if (useAccessToken().value) {
    await useFetchApi("order/", {
      method: "GET",
    })
      .then((res) => {
        orders.value = res;
      })
      .catch((error) => {
        message.error(error.message);
      });
  }
});
</script>

<style scoped>
.orders-list {
  padding: 20px;
  background-color: white;
  height: 80vh;
  overflow-y: scroll;
}
.country {
  display: flex;
  font-size: 18px;
  justify-content: space-between;
}

.country img {
  margin-right: 10px;
  width: 50px;
  height: 25px;
  object-fit: cover;
}
.address-button-block {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.order-info-right p {
  text-align: right;
  margin: 0;
}

.order-info-minor {
  font-size: 20px;
  font-weight: 300;
}
.order-info-main {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px !important;
}

.order-info-left .country p {
  font-size: 18px;
  margin: 0;
}

.order-image img {
  width: 100%;
}

@media screen and (max-width: 500px) {
  .order-image img {
    width: 40%;
  }
  .starred-item-image {
    width: 40%;
  }
}
</style>
