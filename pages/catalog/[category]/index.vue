<template>
  <div class="container">
    <div>
      <h1
        class="text-center mt-50 catalog-page-title"
        style="text-transform: capitalize"
      >
        {{ category_info.name_ru }}
      </h1>

      <div class="bread-crumb">
        <NuxtLink to="/catalog/">Каталог</NuxtLink>
        <BreadCrumbDelimiter />
        <NuxtLink class="bread-crumb-current">{{
          category_info.name_ru
        }}</NuxtLink>
      </div>
      <a-row>
        <a-col :md="12">
          <div class="filter-sort-block">
            <div class="filter-block">
              <div
                class="filter-button"
                @click="
                  () => {
                    filterModel.visible = true;
                  }
                "
              >
                <span>{{ $t("filter.h0") }}</span>
                <img src="/assets/img/filter/filterArrowTop.png" alt="" />
              </div>
            </div>
            <div class="sort-block">
              <div class="sort-button">
                <a-dropdown>
                  <span @click.prevent> {{ $t("filter.h1") }} </span>
                  <template #overlay>
                    <a-menu class="sort-dropdown">
                      <a-menu-item
                        :class="
                          request_params.ordering === '-viewed' ? 'active' : ''
                        "
                      >
                        <span @click="onChangeSorter('-viewed')">{{
                          $t("filter.h2")
                        }}</span>
                      </a-menu-item>
                      <a-menu-item
                        :class="
                          request_params.ordering === 'created_at'
                            ? 'active'
                            : ''
                        "
                      >
                        <span @click="onChangeSorter('created_at')">{{
                          $t("filter.h3")
                        }}</span>
                      </a-menu-item>
                      <a-menu-item
                        :class="
                          request_params.ordering === 'price' ? 'active' : ''
                        "
                      >
                        <span @click="onChangeSorter('price')">{{
                          $t("filter.h4")
                        }}</span>
                      </a-menu-item>
                      <a-menu-item
                        :class="
                          request_params.ordering === '-price' ? 'active' : ''
                        "
                      >
                        <span @click="onChangeSorter('-price')">{{
                          $t("filter.h5")
                        }}</span>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :md="12">
          <div class="catalog-search-block">
            <NuxtLink
              :to="useAuthExist().value ? '/account/basket' : '/login'"
              style="margin-right: 20px; cursor: pointer"
              class="basket-icon"
            >
              <a-badge :count="basket_count">
                <img src="/assets/img/catalog/basket.svg" alt="" />
              </a-badge>
            </NuxtLink>
            <a-input
              @change="searchProduct"
              class="catalog-search-input"
              placeholder="Поиск"
              v-model:value="filterModel.searchText"
            />
          </div>
        </a-col>
      </a-row>

      <a-row v-if="products.results?.length > 0">
        <a-col
          :xs="12"
          :md="12"
          :xl="8"
          v-for="product in products.results"
          :key="product.id"
        >
          <ProductCard :product="product" :category="route.params.category" />
        </a-col>
      </a-row>
      <a-row v-else justify="center">
        <a-col
          ><h3 style="color: red">{{ $t("filter.h6") }}</h3></a-col
        >
      </a-row>
    </div>
    <a-modal
      v-model:visible="filterModel.visible"
      width="1000px"
      :closable="true"
      :footer="null"
      class="filter-modal"
    >
      <div
        v-if="category_info.filters && category_info.filters.length > 0"
        class=""
      >
        <p class="modal-title">{{ $t("filter.h0") }}</p>
        <div
          v-if="
            category_info.filters.filter(
              (filter) => filter.field_name === 'size'
            ).length > 0
          "
        >
          <p class="section-title">{{ $t("filter.h7") }}</p>
          <div class="fx size-block">
            <span
              class="button-text"
              v-for="size in category_info.product_sizes"
              :key="size.size"
              @click="onChangeSize(size.size)"
              :class="filterModel.size.includes(size.size) ? 'active' : ''"
              >{{ size.size }}</span
            >
          </div>
        </div>
        <div>
          <p class="section-title">{{ $t("filter.h8") }}</p>
          <div class="price-block">
            <a-row :gutter="[9, 9]">
              <a-col :md="6">
                <a-input placeholder="от" @change="onChangeMinPrice" />
              </a-col>
              <a-col :md="2">
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                  "
                >
                  <p style="text-align: center">-</p>
                </div>
              </a-col>
              <a-col :md="6">
                <a-input placeholder="до" @change="onChangeMaxPrice" />
              </a-col>
              <a-col :md="1">
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    height: 100%;
                  "
                >
                  <p style="font-size: 28px">тг</p>
                </div>
              </a-col>
            </a-row>
            <a-slider
              :max="category_info.product_max_price"
              :min="category_info.product_min_price"
              range
              @afterChange="onChangeSlider"
            />
          </div>
        </div>
        <div
          class="countryFilter"
          v-if="
            category_info.filters.filter(
              (filter) => filter.field_name === 'country'
            ).length > 0
          "
        >
          <p class="section-title">{{ $t("filter.h9") }}</p>

          <span
            v-for="country in category_info.product_countries.filter(
              (country) => country.country__id
            )"
            :key="country.country__id"
            class="country-button button-text"
            :class="
              filterModel.countries.includes(country.country__id)
                ? 'active'
                : ''
            "
            @click="onChangeCountry(country.country__id)"
            >{{ country.country__name_ru }}</span
          >
        </div>
        <div
          class="surfaceFilter"
          v-if="
            category_info.filters.filter(
              (filter) => filter.field_name === 'surface'
            ).length > 0
          "
        >
          <p class="section-title">{{ $t("filter.h10") }}</p>
          <span
            v-for="surface in category_info.product_surfaces.filter(
              (surface) => surface.surface
            )"
            :key="surface.surface"
            class="country-button button-text"
            :class="
              filterModel.surfaces.includes(surface.surface) ? 'active' : ''
            "
            :closable="true"
            @click="onChangeSurface(surface.surface)"
            >{{ surface.surface }}</span
          >
        </div>
        <a-row justify="end" style="margin-top: 30px">
          <a-col
            ><span class="button-text throw" @click="throwFilter">{{
              $t("filter.h11")
            }}</span></a-col
          >
        </a-row>
      </div>
    </a-modal>
  </div>
</template>

<script setup>
const { useAuthExist } = useAuth();
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const { startLoading, stopLoading, loading } = useLoader();
const currentPage = ref(1);
const rawProducts = ref([]);
const request_params = reactive({
  category_slug: route.params.category,
  page_size: 10,
  page: currentPage.value,
  city_id: null,
});
import debounce from "lodash.debounce";

const filterModel = reactive({
  visible: false,
  size: [],
  min_price: 0,
  max_price: 0,
  price_slider: [0, 0],
  countries: [],
  surfaces: [],
  searchText: "",
});

const city = useCookie("city");
if (city.value == "1") {
  request_params.city_id = 1;
} else if (city.value == "2") {
  request_params.city_id = 2;
}
// получить товары
const { data: products, refresh } = await useAsyncData("catalogs", () =>
  $fetch(runtimeConfig.public.API_URL + "product/", {
    params: request_params,
  })
);

// rawProducts.value = products.value;

// получить фильтры для данноого каталога
const { data: category_info } = await useAsyncData("category_filters", () =>
  $fetch(
    runtimeConfig.public.API_URL + `category-filters/${route.params.category}/`
  )
);

//  изменене  фильтр размеров
const onChangeSize = (size) => {
  if (filterModel.size.includes(size)) {
    filterModel.size = filterModel.size.filter((sz) => sz !== size);
  } else {
    filterModel.size.push(size);
  }
  request_params.size = filterModel.size.join(",");
  refresh();
};

//  изменене  фильтр стран
const onChangeCountry = (country_id) => {
  if (filterModel.countries.includes(country_id)) {
    filterModel.countries = filterModel.countries.filter(
      (ct) => ct !== country_id
    );
  } else {
    filterModel.countries.push(country_id);
  }
  request_params.country_id = filterModel.countries.join(",");
  refresh();
};

// // изменение фильтр поверхности
const onChangeSurface = (surface) => {
  if (filterModel.surfaces.includes(surface)) {
    filterModel.surfaces = filterModel.surfaces.filter((sf) => sf !== surface);
  } else {
    filterModel.surfaces.push(surface);
  }
  request_params.surface = filterModel.surfaces.join(",");
  refresh();
};

// изменение фильтр макс. цена
const onChangeMaxPrice = (e) => {
  request_params.max_price = e.target.value;
  refresh();
};

// изменение фильтр мин цена
const onChangeMinPrice = (e) => {
  request_params.min_price = e.target.value;
  refresh();
};

// слайдер цен
const onChangeSlider = (e) => {
  request_params.min_price = e[0];
  request_params.max_price = e[1];
  refresh();
};

// сортировка
const onChangeSorter = (order_by) => {
  request_params.ordering = order_by;
  request_params.page = 1;
  refresh();
};

// обнуоить фильтер
const throwFilter = () => {
  filterModel.visible = false;
  // filterModel.size = [];
  // filterModel.min_price = 0;
  // filterModel.max_price = 0;
  // filterModel.price_slider = [0, 0];
  // filterModel.countries = [];
  // filterModel.surfaces = [];
  // Object.keys(request_params).forEach((key) => delete request_params[key]);
  // request_params.category_slug = route.params.category;
  refresh();
};

// поиск товара
const searchProduct = debounce(async (value) => {
  // filterModel.searchText = value.target.value;
  request_params.name = value.target.value;
  localStorage.setItem("productSearchText", value.target.value);
  refresh();
}, 900);

const basket_count = ref(0);

const fetchData = async () => {
  const { markStarred } = useProduct();

  request_params.page = currentPage;

  const pag_products = await $fetch(runtimeConfig.public.API_URL + "product/", {
    params: request_params,
    async onResponseError({ request, response, options }) {
      showFetchError(response);
    },
    onRequest() {
      startLoading();
    },
    onResponse({ response }) {
      stopLoading();
    },
  });
  rawProducts.value = pag_products;
  products.value.results.push(...pag_products.results);
  markStarred(products);
};

if (process.client) {
  window.onscroll = async () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    document.getElementById("page-footer").style.height;
    if (
      scrollTop + clientHeight >=
        document.getElementById("page-footer").offsetTop &&
      products.value.count > request_params.page_size * request_params.page
    ) {
      // startLoading();
      currentPage.value += 1;
      window.scrollTo(0, scrollTop - 100);
      console.log("stop", scrollTop - 50);
      await fetchData();
      // stopLoading();
    }
  };

  document.body.ontouchmove = async (event) => {
    const { scrollTop, scrollHeight, clientHeight } = document.body;
    document.getElementById("page-footer").style.height;
    if (
      scrollTop + clientHeight >=
        document.getElementById("page-footer").offsetTop &&
      products.value.count > request_params.page_size * request_params.page
    ) {
      window.scrollTo(0, scrollTop - 100);
      startLoading();
      currentPage.value += 1;
      console.log("stop", scrollTop - 50);
      await fetchData();
    }
  };
}

onMounted(() => {
  // когда страница создана получим поисковый текст с локал сторэж
  filterModel.searchText = localStorage.getItem("productSearchText");
  const { useBasket } = useProduct();
  basket_count.value = JSON.parse(useBasket().value)?.length;

  // получим избранные товары с локал сторэж
  const { markStarred } = useProduct();
  markStarred(products);
  // if (products && getStarred) {
  //   products.value.results.forEach((prod) => {
  //     getStarred.forEach((star) => {
  //       if (prod.id === star.id) {
  //         document.getElementById("icon-outlined-" + prod.id).style.display =
  //           "none";
  //         document.getElementById("icon-filled-" + prod.id).style.display =
  //           "block";
  //       }
  //     });
  //   });
  // }
  // функция выполняется при скролле
  // scroll();/
});

// когда покидаем страницу почистим локал сторэж поиска
onBeforeRouteLeave(() => {
  localStorage.setItem("productSearchText", "");
  window.onscroll = null;
  document.body.ontouchmove = null;
});
</script>

<style scoped>
.filter-button,
.sort-button {
  cursor: pointer;
  user-select: none;
  font-weight: 500;
}

@media screen and (max-width: 568px) {
  .catalog-search-input {
    max-width: 100%;
  }
  .countryFilter .country-button {
    /* padding-bottom: 5px; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .surfaceFilter {
    /* display: flex; */
    justify-content: center;
    flex-wrap: wrap;
  }
  .filter-modal .country-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bread-crumb {
    display: none;
  }

  .catalog-page-title {
    text-align: left;
  }

  .filter-button,
  .sort-button {
    font-size: 20px;
  }

  .basket-icon {
    display: none;
  }
}
</style>
