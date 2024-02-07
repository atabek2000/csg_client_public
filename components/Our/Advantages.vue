<template>
  <div class="circles">
    <a-row :gutter="[8, 8]" justify="space-around">
      <a-col :xs="24" :md="8">
        <div class="circle-block">
          <div class="circle-image">
            <img src="../../assets/img/1(1).svg" alt="" />
          </div>
          <div class="circle-description">
            <p class="circle-title">{{ $t("indexMain.p1") }}</p>
            <p class="circle-text">
              {{ $t("indexMain.p2") }}
            </p>
          </div>
        </div>
      </a-col>
      <a-col :xs="24" :md="8">
        <div class="circle-block second">
          <div class="circle-image">
            <img src="../../assets/img/2(1).svg" alt="" />
          </div>
          <div class="circle-description">
            <p class="circle-title">{{ $t("indexMain.p3") }}</p>
            <p class="circle-text">
              {{ $t("indexMain.p4") }}
            </p>
          </div>
        </div>
      </a-col>
      <a-col :xs="24" :md="8">
        <div class="circle-block">
          <div class="circle-image">
            <img src="../../assets/img/Vector(1).svg" alt="" />
          </div>
          <div class="circle-description">
            <p class="circle-title">{{ $t("indexMain.p5") }}</p>
            <p class="circle-text">
              {{ $t("indexMain.p6") }}
            </p>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.circles {
  margin: 50px 0;
}
.circle-block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.circle-image {
  display: flex;
  margin: 0 auto;
  padding: 40px;
  border-radius: 50%;
  border: 1px solid rgba(1, 1, 68, 0.55);
}

.circle-image img {
  width: 135px;
}

.circle-title {
  margin: 20px 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.circle-text {
  text-align: center;
  font-size: 15px;
}

.circle-description {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

@media screen and (max-width: 768px) {
  .circle-block {
    flex-direction: row;
  }
  .circle-block.second {
    flex-flow: row-reverse;
  }
  .circle-image img {
    width: 60px;
  }
  .circle-image {
    padding: 20px;
  }

  .circle-description {
    padding: 0 10px;
  }

  .circle-text,
  .circle-title {
    text-align: right;
  }

  .circle-block.second .circle-text,
  .circle-block.second .circle-title {
    text-align: left;
  }
}
</style>
