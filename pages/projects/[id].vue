<template>
  <div class="container mb-20">
    <div class="project-block" v-if="!pending">
      <p class="big-text-50-500" style="color: rgba(1, 1, 68, 1)">
        {{ project.name_ru }}
      </p>
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :md="12">
          <swiper :modules="[Controller]" @swiper="setControlledSwiper">
            <swiper-slide v-for="image in project.images" :key="image.id">
              <a-image
                :preview="{ imageVisible: false }"
                :src="runtimeConfig.public.API_HOST + image.image"
                @click="imageVisible = true"
              />
            </swiper-slide>
          </swiper>
          <swiper
            :modules="[Controller]"
            :controller="{ control: controlledSwiper }"
            :slidesPerView="3"
            class="mt-10"
            :spaceBetween="10"
          >
            <swiper-slide v-for="image in project.images" :key="image.id">
              <img
                :src="runtimeConfig.public.API_HOST + image.image"
                class="swiper-image"
              />
            </swiper-slide>
          </swiper>
        </a-col>
        <a-col :xs="24" :md="12">
          <div class="project-text-block" v-if="project.city_ru">
            <p class="project-title">{{ $t("projects.p") }}</p>
            <p class="project-text">
              {{ project.city_ru }}
              <template v-if="project.year">{{ project.year }}</template>
            </p>
          </div>

          <div class="project-text-block" v-if="project.materials_ru">
            <p class="project-title">{{ $t("projects.p1") }}</p>
            <p class="project-text">
              {{ project.materials_ru }}
            </p>
          </div>
          <div class="project-text-block" v-if="project.works_ru">
            <p class="project-title">{{ $t("projects.p2") }}</p>
            <p class="project-text">
              {{ project.works_ru }}
            </p>
          </div>
          <div class="project-text-block" v-if="project.facts_ru">
            <p class="project-title">{{ $t("projects.p3") }}</p>
            <p class="project-text">
              {{ project.facts_ru }}
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
    <div v-else>
      <p>Not found</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

import { Swiper, SwiperSlide } from "swiper/vue";
import { Controller } from "swiper";
import "swiper/css";

const controlledSwiper = ref(null);
const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper;
};

const imageVisible = ref(true);

const {
  data: project,
  pending,
  refresh,
} = await useLazyAsyncData("project", () =>
  $fetch(runtimeConfig.public.API_URL + "project/" + route.params.id)
);

// const getImgUrl = (item) => {
//   console.log(item);
//   console.log(project.value.images[item]);
//   return runtimeConfig.public.API_HOST + project.value.images[item].image;
// };
</script>

<style>
.project-nav-block {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.project-list-wrapper {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.project-image-block {
  width: 100%;
}

.project-image-block img {
  width: 100%;
}

.swiper-image {
  max-width: 100%;
}

.project-title {
  color: rgba(84, 93, 102, 1);
  margin-bottom: 10px;
  font-size: 17px;
}

.project-text {
  font-size: 17px;
  color: black;
}

.project-text-block {
  margin-bottom: 30px;
}
</style>
