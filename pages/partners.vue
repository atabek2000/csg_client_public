<template>
  <div class="container">
    <div style="text-align: left">
      <p class="page-title">{{ $t("partners.small") }}</p>
      <p class="page-subtitle">
        {{ $t("partners.smallText") }}
      </p>
      <p class="page-text">
        {{ $t("partners.smallText1") }}
        <br />
        {{ $t("partners.smallText2") }}
      </p>
    </div>

    <a-row :gutter="[32, 32]" class="mb-50">
      <a-col
        :xs="24"
        :md="8"
        :lg="6"
        v-for="partner in partners"
        :key="partner.id"
      >
        <!-- <p class="page-subtitle">{{ partner.name_ru }}</p> -->
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          "
        >
          <img
            :src="config.public.API_HOST + partner.image"
            style="width: 100%; object-fit: contain; margin: auto"
          />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
const partners = ref();
const config = useRuntimeConfig();
await useAsyncData(async () => {
  const some = "dsfsf";
  try {
    partners.value = await $fetch(config.public.API_URL + "partner/");
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped>
.partners-block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.partner-element {
  margin-bottom: 50px;
  width: 30%;
}

.partner-element div {
  height: 80%;
  display: flex;
  align-items: center;
}

.partner-element img {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .partner-element {
    margin-bottom: 50px;
    width: 45%;
  }
}

@media screen and (max-width: 576px) {
  .partner-element {
    margin-bottom: 50px;
    width: 100%;
  }

  .partner-element div {
    height: 80%;
    display: flex;
    /* align-items: start; */
  }
}
</style>
