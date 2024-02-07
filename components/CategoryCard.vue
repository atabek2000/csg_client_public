<script>
export default {
  props: {
    product,
  },
  setup() {
    const config = useRuntimeConfig();
    return { config };
  },
};
</script>

<template>
  <div>
    <NuxtLink :to="`/catalog/category/product/${product.slug}/`"
      ><img
        style="width: 100%"
        :src="runtimeConfig.public.API_HOST + product.images"
        :alt="product.slug"
      />
      <div style="display: flex; justify-content: space-between">
        <p>{{ product.name }}</p>
        <p>{{ city === 2 ? product.remain_2 || 0 : product.remain || 0 }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
