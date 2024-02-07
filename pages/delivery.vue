<template>
  <div class="container">
    <div>
      <p class="ciity-name">{{ $t("delivery.h51") }}</p>
      <div style="border-radius: 3px; overflow: hidden">
        <div
          v-for="(text, index) in astana_data"
          :key="text"
          class="astana-block"
          :style="
            index == 0
              ? ''
              : 'background-color: #013b82;padding-left: 10px;padding-right: 10px;'
          "
        >
          <div v-if="index == 0" class="city-table-head">
            <div :class="index == 0 ? 'bx-shadow' : ''">
              <span>{{ text[0] }}</span>
            </div>
            <div :class="index == 0 ? 'bx-shadow' : ''">
              <span>{{ text[1] }}</span>
            </div>
            <div :class="index == 0 ? 'bx-shadow' : ''">
              <span>{{ text[2] }}</span>
            </div>
          </div>
        </div>
      </div>
      <div style="border-radius: 3px; overflow: hidden" class="bx-shadow">
        <div
          v-for="(text, index) in astana_data"
          :key="text"
          class="astana-block bx-shadow"
          :style="
            index == 0
              ? ''
              : 'background-color: #013b82;padding-left: 10px;padding-right: 10px;'
          "
        >
          <div v-if="index != 0" class="city-table-body">
            <div>
              <span>{{ text[0] }}</span>
            </div>
            <div>
              <span>{{ text[1] }}</span>
            </div>
            <div>
              <span>{{ text[2] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="ciity-name">{{ $t("delivery.h52") }}</p>
      <div style="border-radius: 3px; overflow: hidden">
        <div
          v-for="(text, index) in almaty_data"
          :key="text"
          class="almaty-block"
          :style="
            index == 0
              ? ''
              : 'background-color: #013b82;padding-left: 10px;padding-right: 10px;'
          "
        >
          <div v-if="index == 0" class="city-table-head">
            <div class="bx-shadow">
              <span>{{ text[0] }}</span>
            </div>
            <div class="bx-shadow">
              <span>{{ text[1] }}</span>
            </div>
            <div class="bx-shadow">
              <span>{{ text[2] }}</span>
            </div>
            <div class="bx-shadow">
              <span>{{ text[3] }}</span>
            </div>
            <div class="bx-shadow">
              <span>{{ text[4] }}</span>
            </div>
          </div>
        </div>
      </div>

      <div style="border-radius: 3px; overflow: hidden" class="bx-shadow">
        <div
          v-for="(text, index) in almaty_data"
          :key="text"
          class="almaty-block"
          :style="
            index == 0
              ? ''
              : 'background-color: #013b82;padding-left: 10px;padding-right: 10px;'
          "
        >
          <div v-if="index != 0" class="city-table-body">
            <div>
              <span>{{ text[0] }}</span>
            </div>
            <div>
              <span>{{ text[1] }}</span>
            </div>
            <div>
              <span>{{ text[2] }}</span>
            </div>
            <div>
              <span>{{ text[3] }}</span>
            </div>
            <div>
              <span>{{ text[4] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="small-text-17-300 mt-20">
      {{ $t("delivery.h0") }}
    </p>

    <a-row :gutter="[15, 15]" class="delivery-info">
      <a-col :xs="24" :md="8" class="city-table-head">
        <div class="bx-shadow1">
          <p>{{ $t("delivery.h1") }}</p>

          <span>{{ $t("delivery.h2") }}</span>
        </div>
      </a-col>
      <a-col :xs="24" :md="8" class="city-table-head">
        <div class="bx-shadow2">
          <p>{{ $t("delivery.h3") }}</p>
          <span>{{ $t("delivery.h4") }}</span>
        </div>
      </a-col>
      <a-col :xs="24" :md="8" class="city-table-head">
        <div class="bx-shadow3">
          <p>{{ $t("delivery.h5") }}</p>
          <span>{{ $t("delivery.h6") }}</span>
        </div>
      </a-col>
    </a-row>

    <div class="astana-block delivery-info" style="">
      <div class="city-table-head"></div>
    </div>

    <div class="text">
      <span class="fw-500"> {{ $t("delivery.h7") }} </span>
      <ul>
        <li class="fw-500">
          {{ $t("delivery.h8") }}
        </li>
        <li class="fw-500">
          {{ $t("delivery.h9") }}
        </li>
        <li class="fw-500">
          {{ $t("delivery.h10") }}
        </li>
        <li class="fw-500">
          {{ $t("delivery.h11") }}
        </li>
        <li class="fw-500">
          {{ $t("delivery.h12") }}
        </li>
        <li class="fw-500">
          {{ $t("delivery.h13") }}
          <a href="/rules.docx" download>{{ $t("delivery.h14") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
const astana_data = [
  { 0: t("delivery.h15"), 1: t("delivery.h17"), 2: t("delivery.h18") },
  { 0: t("delivery.h19"), 1: t("delivery.h20"), 2: t("delivery.h21") },
  { 0: t("delivery.h22"), 1: t("delivery.h23"), 2: t("delivery.h21") },
  { 0: t("delivery.h25"), 1: t("delivery.h26"), 2: t("delivery.h21") },
  {
    0: t("delivery.h28"),
    1: t("delivery.h29"),
    2: t("delivery.h30"),
  },
  {
    0: t("delivery.h31"),
    1: t("delivery.h32"),
    2: t("delivery.h33"),
  },
  {
    0: t("delivery.h34"),
    1: t("delivery.h35"),
    2: t("delivery.h36"),
  },
];
const almaty_data = [
  [
    t("delivery.h15"),
    t("delivery.h37"),
    t("delivery.h38"),
    t("delivery.h39"),
    t("delivery.h18"),
  ],
  [
    t("delivery.h40"),
    t("delivery.h35"),
    t("delivery.h43"),
    t("delivery.h32"),
    t("delivery.h42"),
  ],
  [
    t("delivery.h34"),
    t("delivery.h32"),
    t("delivery.h35"),
    t("delivery.h44"),
    t("delivery.h50"),
  ],
  [
    t("delivery.h31"),
    t("delivery.h44"),
    t("delivery.h32"),
    t("delivery.h45"),
    t("delivery.h46"),
  ],
  [t("delivery.h47"), "", t("delivery.h48"), t("delivery.h49"), ""],
];
</script>

<style scoped>
.ciity-name {
  font-size: 28px;
  font-weight: 600;
  color: #545d66;
  margin: 0;
  margin-top: 50px;
}

.city-block {
  padding-left: 10px;
  padding-right: 10px;
}

.city-table-head {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.city-table-head div,
.city-table-body div {
  background-color: #013b82;
  padding: 10px;
  color: white;
  font-size: 17px;
  border-radius: 3px;
}

.astana-block .city-table-body div,
.astana-block .city-table-head div {
  width: 32%;
}

.almaty-block .city-table-body div,
.almaty-block .city-table-head div {
  width: 19%;
}

.city-table-body {
  display: flex;
  justify-content: space-between;
  background-color: #013b82;
  color: white;
  border-bottom: 2px solid white;
}

.delivery-info {
  margin-top: 20px;
}

.delivery-info p {
  font-size: 28px;
  color: white;
}

.delivery-info span {
  font-size: 17px;
  color: white;
}

.city {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 14rem;
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
}
.containerDelivery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1440px; /* Adjust width as needed */
  /* margin: 0 auto; */
  padding-left: 14rem;
  padding-right: 16rem;
}

.row1 {
  padding-top: 10px;
  display: flex;
  width: 100%;
}
.row {
  text-align: left;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 100%;
}
.row3 {
  text-align: left;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 100%;
}
.cell1 {
  background-image: url(../assets/img/GPS.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 30%;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}
.bx-shadow1 {
  background-image: url("/public/img/account/img/POST.png");
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 150px;
}
.bx-shadow2 {
  background-image: url("/public/img/account/img/GPS.png");
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 150px;
}
.bx-shadow3 {
  background-image: url("/public/img/account/img/delivery.png");
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 150px;
}
.cell2 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 30%;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}
.cell3 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 30%;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}

.cell {
  text-align: left;
  padding-left: 17px;
  flex: 1 0 calc(20% - 10px); /* Adjust percentage and margin as needed */
  padding-top: 10px;
  color: #ffffff;
  background: #013b82;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.cell6 {
  text-align: left;
  padding-left: 28px;
  flex: 1 0 calc(20% - 10px); /* Adjust percentage and margin as needed */
  padding-top: 10px;
  color: #ffffff;
  background: #013b82;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.cell5 {
  text-align: left;
  padding-left: 25px;
  flex: 1 0 calc(20% - 10px); /* Adjust percentage and margin as needed */
  padding-top: 10px;
  color: #ffffff;
  background: #013b82;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.cell7 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 19%;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}
.cell8 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 19%;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}
.cell9 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 19%;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}
.cell10 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 19%;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}
.cell11 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: #ffffff;
  background: #013b82;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  width: 19%;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
}

.delivery-text {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 21px;

  color: #545d66;
}
ul {
  color: #545d66;
  margin-bottom: 60px;
  font-size: 16px;
  margin-left: 20px; /* добавление отступа слева */
  list-style-type: disc; /* установка маркера */
}

@media all and (max-width: 768px) {
  .city-table-head div {
    font-weight: 500;
    font-size: 10px;
    /* line-height: 12px; */
  }

  .city-table-body div {
    font-weight: 500;
    font-size: 7px;
  }
}

@media (max-width: 600px) {
  .cell {
    flex-basis: calc(50% - 10px);
  }
}

@media (max-width: 400px) {
  .cell {
    flex-basis: calc(100% - 10px);
  }
}
</style>
