<template>
  <div>
    <!-- <div class="our-image"><img src="../assets/img/our/our.jpeg" /></div> -->
    <div class="container">
      <div class="our-company">
        <p class="page-title">{{ $t("our.small") }}</p>
      </div>
      <p class="page-subtitle">{{ $t("our.smallText") }}</p>
      <p class="our-company-text page-text">
        {{ $t("our.smallText2") }}
      </p>
      <p class="our-company-text page-text">
        {{ $t("our.p") }}
      </p>
      <p class="our-company-text page-text">
        {{ $t("our.p1") }}
      </p>
      <p class="our-company-text page-text">
        {{ $t("our.p2") }}
      </p>
      <p class="our-company-text page-text">
        {{ $t("our.p3") }}
      </p>
      <p class="our-company-text page-text">
        {{ $t("our.p4") }}
      </p>
      <p class="our-company-text page-text">
        {{ $t("our.p5") }}
      </p>
    </div>
    <div class="">
      <div class="our-image1">
        <img src="../assets/img/our/graphic-our.svg" />
      </div>

      <OurAdvantages />
    </div>
  </div>
</template>

<style scoped>
.our-image img {
  width: 100%;
}

.our-image1 {
  text-align: center;
}
.our-image1 img {
  width: 50%;
}

.our-company-text {
  margin-top: 20px;
}
</style>
