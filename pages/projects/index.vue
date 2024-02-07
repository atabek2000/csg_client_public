<template>
  <div class="container mb-100">
    <h2 class="page-title">{{ $t("projects.small") }}</h2>
    <p>
      {{ $t("projects.smallText") }}
    </p>

    <div class="project-nav-block">
      <NuxtLink
        v-for="(project_type, index) in project_types"
        :key="project_type.id"
        :class="
          index === selectedTypeId
            ? 'button-important-active'
            : 'button-important'
        "
        @click="setSelectedType(index)"
      >
        {{ project_type.name_ru }}
      </NuxtLink>
    </div>

    <a-row :gutter="[100, 16]" class="mt-10 mb-20">
      <a-col
        :xs="24"
        :md="12"
        v-for="project in project_types[selectedTypeId].projects"
        :key="project.id"
      >
        <div class="project-image-block">
          <NuxtLink :to="'/projects/' + project.id">
            <img
              :src="runtimeConfig.public.API_HOST + project.images[0]?.image"
              alt="project.name_ru"
            />
          </NuxtLink>
        </div>
        <h3
          class="medium-text-20 text-uppercase"
          style="color: rgba(84, 93, 102, 1)"
        >
          {{ project.name_ru }}
        </h3>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
const selectedTypeId = ref(0);

const setSelectedType = (index) => {
  selectedTypeId.value = index;
};

const runtimeConfig = useRuntimeConfig();
const { data: project_types } = await useAsyncData("project_types", () =>
  $fetch(runtimeConfig.public.API_URL + "project_types/")
);
</script>

<style scoped>
.project-nav-block {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.project-list-block {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.project-list-block div {
  min-width: 45%;
  margin-bottom: 10px;
}

.project-block {
  display: block;
}

.project-image-block {
  width: 100%;
}

.project-image-block img {
  width: 100%;
}
</style>
