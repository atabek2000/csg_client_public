<template>
  <div class="install container mb-20">
    <div class="page-title">{{ $t("install.title") }}</div>
    <p class="page-text">{{ $t("install.title2") }}</p>
    <div class="subtitle-text">{{ $t("install.pageText") }}</div>
    <p class="page-text">
      {{ $t("install.title3") }}
    </p>
    <div class="subtitle-text">{{ $t("install.pageText2") }}</div>
    <p class="page-text">
      {{ $t("install.pageText4") }}
    </p>
  </div>
</template>

<style scoped>
.text-install {
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 88px;
  margin-bottom: 30px;
}
.install p {
  font-style: normal;
  /* padding-bottom: 40px; */
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}
.subtitle-text {
  margin-top: 30px;
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
}

@media screen and (max-width: 768px) {
  .text-install {
    font-size: 28px;
    margin-bottom: 15px;
    line-height: 30px;
  }

  .subtitle-text {
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
