<template>
  <div class="container">
    <h1 class="catalog-page-title mt-50 mb-50">Каталог</h1>
    <div v-if="!pending">
      <div v-if="catalogs && catalogs.length > 0">
        <div class="catalogs-block">
          <a-collapse
            @change="getCategory"
            v-model:activeKey="activeKey"
            :expand-icon-position="'right'"
            :accordion="true"
          >
            <a-collapse-panel
              v-for="catalog in catalogs"
              :key="catalog.id"
              :header="lang === 'kz' ? catalog.name_kz : catalog.name_ru"
            >
              <template v-if="catalog.id in catalogs_obj">
                <a-row>
                  <a-col
                    :xs="12"
                    :md="12"
                    :lg="8"
                    :xl="6"
                    v-for="category in catalogs_obj[catalog.id]"
                    :key="category.id"
                    style="
                      display: flex;
                      flex-direction: column;
                      justify-content: space-between;
                      padding: 10px;
                    "
                  >
                    <!-- <div style="padding: 20px; height: 100%"> -->
                    <NuxtLink
                      :to="`/catalog/${category.slug}/`"
                      style="display: flex; justify-content: center"
                    >
                      <img
                        style="
                          height: 250px;
                          width: 100%;
                          max-height: 100%;
                          margin: 0 auto;
                          object-fit: cover;
                        "
                        :src="runtimeConfig.public.API_HOST + category.image"
                        :alt="category.name_ru"
                      />
                    </NuxtLink>
                    <!-- <p class="category-name">
                      {{ lang === "kz" ? category.name_kz : category.name_ru }}
                    </p> -->
                    <p style="font-size: 15px; padding-top: 10px">
                      {{ lang === "kz" ? category.name_kz : category.name_ru }}
                      <sup style="font-weight: 700">{{
                        category.product_count
                      }}</sup>
                    </p>
                    <!-- </div> -->
                  </a-col>
                </a-row>
              </template>
              <template v-else>
                <div class="spin-block">
                  <a-spin size="large" tip="Загрузка..."> </a-spin>
                </div>
              </template>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
      <div v-else><a-empty /></div>
    </div>
    <div v-else>
      <div class="spin-block">
        <a-spin size="large" tip="Загрузка..."> </a-spin>
      </div>
    </div>
    <!-- {{ catalogs }} -->
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const lang = useCookie("lang");
const { data: catalogs, pending } = await useLazyAsyncData("catalogs", () =>
  $fetch(runtimeConfig.public.API_URL + "catalog/")
);

const catalogs_obj = ref({});
const getCategory = async (catalog_id) => {
  if (catalog_id && !(catalog_id in catalogs_obj.value)) {
    const slug = catalogs.value.filter(
      (catalog) => catalog.id == catalog_id
    )[0]["slug"];
    const categories = $fetch(
      runtimeConfig.public.API_URL + `category/${slug}/`
    );
    catalogs_obj.value[catalog_id] = await categories;
  }
};
</script>

<style scoped>
.category-name {
  padding-top: 10px;
  font-size: 20px;
  text-transform: uppercase;
}
@media screen and (max-width: 768px) {
  .category-name {
    font-size: 20px;
    text-transform: inherit;
  }
}
</style>
