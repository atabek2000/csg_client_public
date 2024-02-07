<template>
  <div class="product-card">
    <div>
      <a-tooltip>
        <template #title>Добавить в избранные</template>

        <img
          :id="'icon-outlined-' + product.id"
          src="/img/catalog/1.png"
          :alt="product.slug"
          @click="useProduct().addToStarred(product)"
          style="
            height: 30px;
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
            z-index: 20;
            display: inline-block;
          "
        />
      </a-tooltip>

      <img
        :id="'icon-filled-' + product.id"
        src="/img/catalog/2.png"
        :alt="product.slug"
        @click="useProduct().addToStarred(product)"
        style="
          text-decoration: none;
          height: 30px;
          position: absolute;
          right: 20px;
          top: 20px;
          cursor: pointer;
          z-index: 20;
          display: none;
          vertical-align: middle;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          box-shadow: 0 0 1px rgba(0, 0, 0, 0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -moz-osx-font-smoothing: grayscale;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-property: transform;
          transition-property: transform;
        "
      />
    </div>

    <NuxtLink
      @mouseover="hover = true"
      @mouseleave="hover = false"
      class="product-image"
      :to="`/catalog/${category}/product/${product.slug}/`"
      :style="
        !hover || !product.main_image_interier
          ? 'background-image: url(' +
            (product.main_image
              ? config.public.API_HOST + product.main_image
              : '/img/main/loader.png') +
            ');  transition: 0s ease; background-size:' +
            (product.main_image
              ? product.subcategory.category.product_image_show
              : 'contain')
          : 'background-image: url(' +
            config.public.API_HOST +
            product.main_image_interier +
            '); transition: 0s ease; background-size:' +
            product.subcategory.category.product_image_show
      "
    >
    </NuxtLink>
    <NuxtLink
      class=""
      style="margin: 0 auto"
      :to="`/catalog/${category}/product/${product.slug}/`"
    >
      <a-row :gutter="[9, 9]" class="mt-10">
        <a-col :xs="12" :md="12">
          <p class="product-text text-upper">
            {{ product.subcategory.category.name_ru }}
          </p>
          <p class="product-subtitle m-0">
            {{ lang == "kz" ? product.name_kz : product.name }}
          </p>
          <p class="product-text m-0 text-upper" v-if="product.surface">
            {{ product.surface }}
          </p>
          <!-- <template v-if="product.size">
            <span class="product-text m-0">Размер &nbsp;&nbsp;</span>
            <span class="product-text m-0">{{ product.size }}</span>
          </template> -->
        </a-col>
        <a-col :xs="12" :md="12">
          <!-- <p class="product-text m-0 text-right" v-if="product.remain">
            <span>Остаток:&nbsp;&nbsp;</span
            >{{ city === 2 ? product.remain_2 || 0 : product.remain || 0 }}
            {{ product.unit ? product.unit.name : "" }}
          </p> -->

          <div class="product-subtitle m-0 text-right">
            {{
              product.prices.filter((price) => price.city.id == city).length >
                0 &&
              product.prices.filter((price) => price.city.id == city)[0].remain
                ? product.prices.filter((price) => price.city.id == city)[0]
                    ?.remain + (product.unit ? product.unit.name : "м2/шт")
                : ""
            }}
          </div>

          <p class="text-line text-right text-country" v-if="product.country">
            <span class="product-text m-0 text-right">Страна </span>&nbsp;&nbsp;
            <img
              class="country-flag"
              :src="config.public.API_HOST + product.country.flag"
              alt=""
            />
          </p>
          <div class="product-subtitle m-0 text-right">
            <!-- <p class="product-subtitle m-0 text-right"> -->
            <!-- {{ city === 2 ? product.price_2 : product.price }} тг -->
            <!-- </p> -->
            {{
              product.prices.filter((price) => price.city.id == city).length >
                0 &&
              product.prices.filter((price) => price.city.id == city)[0].price
                ? product.prices.filter((price) => price.city.id == city)[0]
                    ?.price
                : ""
            }}
            тг
          </div>
        </a-col>
      </a-row>
    </NuxtLink>
  </div>
</template>

<style></style>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {
        slug: "",
        prices: {},
        images: [],
        name: "",
        remain: 0,
        type: "",
        countrty: {},
        unit: {},
      },
    },
    category: {
      type: String,
    },
  },
  async setup() {
    const lang = useCookie("lang");

    if (process.client) {
      const { addToStarred: addStarred } = useProduct();
    }

    const config = useRuntimeConfig();
    const city = useCookie("city");
    const hover = ref(false);

    return process.client
      ? { config, city, useProduct, hover, lang }
      : { config, city, hover, lang };
  },
};
</script>

<style scoped>
.product-card {
  padding-bottom: 30px !important;
  padding: 10px;
  color: #545d66;
}

.product-image {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  overflow: hidden;
  object-fit: cover;
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
}

.product-image img {
  /* width: auto;
  height: auto; */
  /* max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  object-fit: cover; */
}

.text-line {
  margin-bottom: 0px;
  display: flex;
  align-items: center;
}

.country-flag {
  width: 60px;
}

.product-text {
  font-size: 17px;
  color: rgba(84, 93, 102, 1);
  font-weight: 500;
}
.product-card img:hover,
.product-card img:focus,
.product-card img:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
}

.text-country {
  display: flex;
  justify-content: right;
}

.product-subtitle {
  font-size: 25px;
  color: rgba(84, 93, 102, 1);
  font-weight: 500;
  margin-top: 5px;
}

@media screen and (max-width: 568px) {
  .text-line {
    font-size: 15px;
  }
  .product-image {
    height: auto;
  }

  .country-flag {
    width: 30px;
  }

  .product-text {
    font-size: 8px;
    color: rgba(84, 93, 102, 1);
    font-weight: 500;
  }

  .product-subtitle {
    font-size: 10px;
    color: rgba(84, 93, 102, 1);
    font-weight: 600;
  }

  .product-image {
    height: 100px;
  }
}
</style>
