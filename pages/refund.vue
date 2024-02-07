<template>
  <div class="refund container mb-20">
    <h1 class="page-title">{{ $t("refund.title") }}</h1>
    <p class="page-subtitle fw-700 text-uppercase">{{ $t("refund.title2") }}</p>
    <div class="subtitle-text">
      {{ $t("refund.pageText") }}
    </div>
    <div class="page-subtitle fw-600 text-uppercase">
      {{ $t("refund.title3") }}
    </div>
    <div class="subtitle-blue mt-20 bx-shadow">
      <ul>
        <li>{{ $t("refund.li1") }}</li>
        <li>{{ $t("refund.li2") }}</li>
        <li>{{ $t("refund.li3") }}</li>
        <li>{{ $t("refund.li4") }}</li>
      </ul>
    </div>
    <div class="page-subtitle mt-50 fw-600 text-uppercase">
      {{ $t("refund.pageText3") }}
    </div>
    <div class="subtitle-blue mt-20 bx-shadow">
      <div class="blue" style="font-weight: 700; padding-bottom: 0px">
        {{ $t("refund.title4") }}
      </div>
      <ul>
        <li>{{ $t("refund.li1") }}</li>
        <li>
          {{ $t("refund.li6") }}
        </li>
        <li>{{ $t("refund.li4") }}</li>
      </ul>
    </div>
    <div class="subtitle-blue legal-entities bx-shadow">
      <div class="blue fw-700" style="padding-bottom: 0px">
        {{ $t("refund.li7") }}
      </div>
      <ul>
        <li>{{ $t("refund.li1") }}</li>
        <li>
          {{ $t("refund.li8") }}
        </li>
        <li>{{ $t("refund.li4") }}</li>
        <li>{{ $t("refund.li9") }}</li>
        <li>{{ $t("refund.li10") }}</li>
        <li>
          {{ $t("refund.li11") }}
        </li>
        <li>{{ $t("refund.li12") }}</li>
      </ul>
    </div>
    <div class="subtitle-text3">
      <p class="page-subtitle mt-50 fw-600">
        {{ $t("refund.li13") }}
      </p>
      <p class="page-text fw-600">{{ $t("refund.li14") }}</p>
      <p class="page-text fw-600">{{ $t("refund.li15") }}</p>
      <p class="page-text fw-600">
        {{ $t("refund.li16") }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.subtitle-text {
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #545d66;
}
.blue {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  font-size: 30px;
}
.subtitle-blue {
  font-style: normal;
  background-color: #013b82;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
}

.subtitle-text3 p:last-child() {
  font-style: normal;
  margin-top: 0;
}

.legal-entities {
  margin-top: 40px;
}

@media screen and (max-width: 768px) {
  .blue {
    font-style: normal;
    font-size: 24px;
  }
}
</style>
