<template>
  <div class="container mb-100">
    <p class="page-title">{{ $t("montage.h0") }}</p>
    <p class="page-subtitle">
      {{ $t("montage.h1") }}
    </p>
    <p class="page-subtitle mt-50">
      {{ $t("montage.h2") }}
    </p>

    <a-row :gutter="[100, 50]">
      <a-col :xs="24" :md="14">
        <ul class="mt-50">
          <li class="small-text-17-500">
            {{ $t("montage.h3") }}
          </li>
          <li class="small-text-17-500">
            {{ $t("montage.h4") }}
          </li>
          <li class="small-text-17-500">{{ $t("montage.h5") }}</li>
          <li class="small-text-17-500">{{ $t("montage.h6") }}</li>
          <li class="small-text-17-500">{{ $t("montage.h7") }}</li>
          <li class="small-text-17-500">
            {{ $t("montage.h8") }}
          </li>
          <li class="small-text-17-500">{{ $t("montage.h9") }}</li>
        </ul>
      </a-col>
      <a-col :xs="24" :md="10">
        <div style="display: flex; align-items: center; height: 100%">
          <img src="/assets/img/montage/1.jpeg" alt="" />
        </div>
      </a-col>
      <a-col :xs="24" :md="10">
        <div style="display: flex; align-items: center; height: 100%">
          <img src="/assets/img/montage/2.jpg" alt="" />
        </div>
      </a-col>
      <a-col :xs="24" :md="14">
        <p class="page-subtitle mt-50">{{ $t("montage.h10") }}</p>
        <ul class="mt-50">
          <li class="small-text-17-500">
            {{ $t("montage.h11") }}
          </li>
          <li class="small-text-17-500">
            {{ $t("montage.h12") }}
          </li>
        </ul>
      </a-col>
      <a-col :xs="24" :md="14">
        <p class="page-subtitle mt-50">
          {{ $t("montage.mainText") }}
        </p>
        <p class="small-text-17-500">
          {{ $t("montage.h13") }}
        </p>
      </a-col>
      <a-col :xs="24" :md="10">
        <div style="display: flex; align-items: center; height: 100%">
          <img src="/assets/img/montage/3.jpg" alt="" />
        </div>
      </a-col>
      <a-col :xs="24" :md="10">
        <div style="display: flex; align-items: center; height: 100%">
          <img src="/assets/img/montage/4.png" alt="" />
        </div>
      </a-col>
      <a-col :xs="24" :md="14">
        <p class="page-subtitle mt-50">{{ $t("montage.h14") }}</p>
        <p class="small-text-17-500">
          {{ $t("montage.h15") }}
        </p>
      </a-col>
    </a-row>
    <p class="text-center small-text-17-300 mt-50">
      {{ $t("montage.h16") }}
    </p>

    <button
      style="
        margin: 20px auto;
        border: none;
        border-radius: 5px;
        background-color: #ffb901;
        color: white;
        display: block;
        text-transform: uppercase;
        padding: 5px 40px;
      "
      class="small-text-20"
    >
      {{ $t("montage.h17") }}
    </button>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

.small-text-17-500 {
  font-size: 17px;
  font-weight: 400;
}
</style>
