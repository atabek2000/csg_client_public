<template>
  <div class="container">
    <div class="">
      <h2 class="page-title">{{ $t("payment.p") }}</h2>
    </div>
    <div class="subtitle">{{ $t("payment.p1") }}</div>
    <div class="subtext bx-shadow">
      <span style="font-weight: 700">{{ $t("payment.p2") }}</span>
      <ul class="mt-20">
        <li>{{ $t("payment.p3") }}</li>
        <li>{{ $t("payment.p4") }}</li>
      </ul>
    </div>

    <div class="subtext bx-shadow">
      <span style="font-weight: 700">{{ $t("payment.p5") }} </span>
      <ul class="mt-20" style="font-weight: 200">
        <li style="font-weight: 200">
          {{ $t("payment.p6") }}
        </li>
      </ul>
    </div>

    <div class="subtitle">{{ $t("payment.p7") }}</div>

    <div class="subtitle2">
      {{ $t("payment.p8") }}
    </div>
    <div class="subtext mb-20 bx-shadow">
      <ul>
        <li>{{ $t("payment.p9") }}</li>
        <li>
          {{ $t("payment.p10") }}
        </li>
        <li>
          {{ $t("payment.p11") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.subtext {
  font-style: normal;
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 50px;
  color: #ffffff;
  background-color: rgba(1, 59, 130, 1);
  border-radius: 5px;
  font-weight: 500;
  padding: 5px 10px;
}

.subtitle {
  font-style: normal;
  font-size: 22px;
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: 500;
}

.subtitle2 {
  font-style: normal;
  font-size: 17px;
}
</style>
