<template>
  <div class="container">
    <div class="production">
      <p class="page-title">{{ $t("production.small") }}</p>
    </div>
    <p class="page-subtitle">
      {{ $t("production.smallText") }}
    </p>
    <p class="page-text">
      {{ $t("production.smallText2") }}
    </p>
    <p class="page-subtitle text-uppercase">{{ $t("production.p") }}</p>
    <p class="page-text">
      {{ $t("production.p1") }}
    </p>
    <p class="page-text">
      {{ $t("production.p2") }}
    </p>
    <p class="page-subtitle text-uppercase">{{ $t("production.p3") }}</p>
    <iframe
      style="width: 100%"
      height="450"
      src="https://www.youtube.com/embed/iabnsqPZstE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <p class="page-subtitle text-uppercase">
      {{ $t("production.p4") }}
    </p>
    <iframe
      style="width: 100%"
      height="450"
      src="https://www.youtube.com/embed/CaTIE-YBouo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <p class="page-subtitle text-uppercase">{{ $t("production.p5") }}</p>
    <iframe
      style="width: 100%"
      height="450"
      src="https://www.youtube.com/embed/tmQmO0WFBzk"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <!-- <div class="images"><img src="../assets/img/1(1).png" /></div> -->
    <!-- <div class="images"><img src="../assets/img/3(3).png" /></div> -->
    <!-- <div class="images"><img src="../assets/img/4.png" /></div> -->
    <p class="page-subtitle">
      {{ $t("production.p6") }}
    </p>
    <p class="page-subtitle">
      {{ $t("production.p7") }}
    </p>
  </div>
  <div class="counter bg-gray mt-50">
    <div class="container">
      <a-row>
        <a-col :md="4">
          <div class="counter-item-block">
            <span class="counter-pure"> {{ $t("indexMain.l1") }}</span
            ><br />
            {{ $t("indexMain.l2") }}
          </div>
        </a-col>
        <a-col :md="5">
          <div class="counter-item-block">
            <span class="counter-pure">10 000</span> <br />
            {{ $t("indexMain.l3") }}
          </div>
        </a-col>
        <a-col :md="5">
          <div class="counter-item-block">
            <span class="counter-pure">10</span> {{ $t("indexMain.l4") }}
          </div>
        </a-col>
        <a-col :md="5">
          <div class="counter-item-block">
            <span class="counter-pure">800</span> {{ $t("indexMain.l6") }}
            <br />
          </div>
        </a-col>
        <a-col :md="5">
          <div class="counter-item-block">
            {{ $t("indexMain.l8") }}
            <span class="counter-pure">2 000 000</span> {{ $t("indexMain.l9") }}
          </div>
        </a-col>
      </a-row>
    </div>
  </div>

  <div class="container mb-20 mt-50">
    <p class="page-subtitle-blue text-uppercase">{{ $t("production.p8") }}</p>
    <ul>
      <li class="page-subtitle m-0">{{ $t("production.p9") }}</li>
      <li class="page-subtitle m-0">{{ $t("production.p11") }}</li>
      <li class="page-subtitle m-0">{{ $t("production.p12") }}</li>
      <li class="page-subtitle m-0">
        {{ $t("production.p13") }}
      </li>
      <li class="page-subtitle m-0">
        {{ $t("production.p14") }}
      </li>
      <li class="page-subtitle m-0">{{ $t("production.p15") }}</li>
      <li class="page-subtitle m-0">{{ $t("production.p16") }}</li>
    </ul>
    <p class="page-text">
      {{ $t("production.p17") }} <br />
      {{ $t("production.p18") }}
    </p>
    <p class="page-text">
      {{ $t("production.p19") }} <br />
      {{ $t("production.p20") }}<br />
      {{ $t("production.p21") }} <br />
      {{ $t("production.p22") }}
    </p>
  </div>
</template>
