<template>
  <div class="page-footer" id="page-footer">
    <div class="container">
      <a-row :gutter="[50, 20]">
        <a-col :xs="24" :md="19">
          <a-row :gutter="[12, 20]">
            <a-col :xs="24" :md="8">
           
                <NuxtLink style="width: 40%" to="/">
          <img style="width: 78%" src="../assets/img/LOGOg.png" />
        </NuxtLink>
              
             
            </a-col>
            <a-col :xs="24" :md="16">
              <div
                id="map-container"
                class="map-container"
                name="map-container"
                style="border-radius: 1rem"
              ></div>
            </a-col>
          </a-row>
          <p class="our-addresses mt-50">{{ $t("footer.small") }}</p>
          <a-row :gutter="[50, 20]" class="mt-20">
            <a-col :xs="24" :md="6">
              <p class="our-addresses">
                
                {{ $t("footer.smallText") }}<br />
                <div class="collapsekz">   

                  <a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    :header=" t('footer.p4')"
                    @click="setView([43.25908181, 76.90088027])"
                  >
                    <a
                      href="https://2gis.kz/almaty/firm/9429940000795411" target="_blank"
                      id="logo"
                      >{{ $t("footer.m4") }}</a
                    >
                    <br />
                    <a
                      href="https://2gis.kz/almaty/firm/70000001054156278?m=76.843474%2C43.236329%2F18" target="_blank"
                      >{{ $t("footer.n4") }}</a
                    >  <br />
                    <a
                      href="https://2gis.kz/almaty/branches/9429948590730003/firm/70000001069514244/76.900958%2C43.25946?m=76.901864%2C43.259693%2F18.99" target="_blank"
                      >{{ $t("footer.n41") }}</a
                    >
                  </a-collapse-panel>
                </a-collapse>
                <a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    :header=" t('footer.p5')"
                    @click="setView([51.11566869026146, 71.43333420834267])"
                  >
                    <a
                      href="https://2gis.kz/astana/firm/70000001026458454"  target="_blank"
                      id="logo"
                      >{{ $t("footer.m5") }}</a
                    >
                    <br />
                    <a
                      href="https://2gis.kz/astana/branches/70000001018133597/firm/70000001024356391/71.433324%2C51.115639?m=71.433338%2C51.115637%2F18"  target="_blank"
                      >{{ $t("footer.n5") }}</a
                    > <br />
                    <a
                      href="https://2gis.kz/astana/inside/70030076160664169/firm/70000001052598145"  target="_blank"
                      >{{ $t("footer.n51") }}</a
                    >
                  </a-collapse-panel>
                </a-collapse>
                
                <a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    :header=" t('footer.p6')"
                    @click="setView([42.315521, 69.586942])"
                  >
                    <a
                      href="https://2gis.kz/shymkent/inside/70030076129720964/firm/70000001051510476?m=69.594499%2C42.314085%2F14.62"  target="_blank"
                      id="logo"
                      >{{ $t("footer.m6") }}</a
                    > <br>
                    <a
                      href="https://2gis.kz/shymkent/inside/22659371323711227/firm/70000001031101164?m=69.612249%2C42.345947%2F16"   target="_blank"
                      id="logo"
                      >{{ $t("footer.n6") }}</a
                    >
                  </a-collapse-panel>
                </a-collapse>
                <a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    :header=" t('footer.p7')"
                    @click="setView([50.33000456542562, 57.12434945169552])"
                  >
                    <a
                      href="https://2gis.kz/aktobe/search/%D0%9F%D1%80%D0%BE%D0%BC%D0%B7%D0%BE%D0%BD%D0%B0%2C%C2%A0309?m=57.110548%2C50.309882%2F15.88"  target="_blank"
                      id="logo"
                      >{{ $t("footer.m7") }}</a
                    >
                  </a-collapse-panel>
                </a-collapse>
                <!-- <a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    header="г. Атырау"
                    @click="setView([47.104476, 51.944348])"
                  >
                    <a href="https://go.2gis.com/2f5il" id="logo"
                      >1. ​ул. Сырым Датов, 54, ТЦ "Anna"</a
                    >
                  </a-collapse-panel>
                </a-collapse> -->

                </div>
               
                <!-- <span
                  class="cursor-pointer"
                  @click="setView([43.25908181, 76.90088027])"
                >
                  г. Алматы</span
                ><br />
                <span
                  class="cursor-pointer"
                  @click="setView([51.11566869026146, 71.43333420834267])"
                >
                  г. Астана</span
                ><br />
                <span
                  class="cursor-pointer"
                  @click="setView([49.7951973134803, 73.1300919642223])"
                >
                  г. Караганда</span
                ><br />
                <span
                  class="cursor-pointer"
                  @click="setView([50.33000456542562, 57.12434945169552])"
                >
                  г. Актобе</span
                ><br />
                <span
                  class="cursor-pointer"
                  @click="setView([47.104476, 51.944348])"
                >
                  г. Атырау</span
                ><br /> -->
              </p>
            </a-col>
            <a-col :xs="24" :md="6" class="bl-white">
              <p class="our-addresses">
                {{ $t("footer.p1") }}<br />

                <div class="collapsekz"> <a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    :header=" t('footer.p8')"
                    @click="setView([42.863831, 74.628692])"
                  >
                    <a
                      href="https://2gis.kg/bishkek/search/%D0%9C%D0%B0%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2%D0%B0%2C%C2%A01%D0%B0?m=74.632019%2C42.861496%2F16.6"  target="_blank"
                      id="logo"
                      > {{ $t("footer.m8") }}</a
                    >
                  </a-collapse-panel>
                </a-collapse></div>
               
                <!-- <span
                  class="cursor-pointer"
                  @click="setView([42.863831, 74.628692])"
                >
                  г. Бишкек
                </span> -->
              </p>
            </a-col>
            <a-col :xs="24" :md="6" class="bl-white">
              <p class="our-addresses">
                {{ $t("footer.p2") }}<br />
                <div class="collapsekz"><a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    :header=" t('footer.p9')"
                    @click="setView([55.721219, 37.651672])"
                  >
                    <a
                      href="https://2gis.kg/bishkek/search/%D0%9C%D0%B0%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2%D0%B0%2C%C2%A01%D0%B0?m=74.632019%2C42.861496%2F16.6 " target="_blank"
                      id="logo"
                      > {{ $t("footer.m9") }}</a
                    >
                    <br />
                    <a
                      href="https://2gis.ru/moscow/search/%D0%A0%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C%20%20%20%20%20%20%20%20%20%20%20%20%D0%BF%D0%BE%D1%81%D0%B5%D0%BB%D0%BE%D0%BA%20%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8%20%D0%91%D1%80%D0%BE%D0%BD%D0%BD%D0%B8%D1%86%D1%8B?m=38.363785%2C55.502465%2F14.25"  target="_blank"
                      id="logo"
                      > {{ $t("footer.n9") }}</a
                    >
                  </a-collapse-panel>
                </a-collapse>
                <!-- <span
                  class="cursor-pointer"
                  @click="setView([55.721219, 37.651672])"
                >
                  г. Москва
                </span> -->

                <a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    :header=" t('footer.p10')"
                    @click="setView([59.958665, 30.408646])"
                  >
                    <a href="https://go.2gis.com/abvgf" id="logo"  target="_blank"
                      >{{ $t("footer.m10") }}</a
                    >
                  </a-collapse-panel>
                </a-collapse>
              
                <a-collapse
                  class="colla"
                  v-model:activeKey="activeKey"
                  accordion
                >
                  <a-collapse-panel
                    key="1"
                    :header=" t('footer.p11')"
                    @click="setView([47.248326, 39.847757])"
                  >
                    <a
                      href="https://2gis.ru/rostov/geo/3378335375810385?m=39.847809%2C47.248479%2F15.86"  target="_blank"
                      id="logo"
                      >{{ $t("footer.m11") }}</a
                    >

                  </a-collapse-panel>
                </a-collapse>
              </div>
                
                <!-- <span
                  class="cursor-pointer"
                  @click="setView([59.958665, 30.408646])"
                >
                  г. Санкт-Петербург
                </span> -->
              </p>
            </a-col>
            <a-col :xs="24" :md="6"> </a-col>
          </a-row>
        </a-col>
        <a-col :xs="24" :md="5" class="bl-white">
          <div class="our-contacts-block">
            <div class="our-social-block">
              <a-row :gutter="[12, 0]" class="w-100">
                <a-col :xs="6">  <SocialLink link="https://www.facebook.com/csg.kz/">
                  <img src="../assets/img/meta.png" />
              </SocialLink>
                  
                </a-col>
                <a-col :xs="6">
                  <SocialLink link="https://vm.tiktok.com/ZMFQaHGpo/">
                    <img src="../assets/img/tiktok.png" />
              </SocialLink>
                </a-col>
                <a-col :xs="6"><SocialLink link="https://www.youtube.com/@ceramostonegroup129">
                  <img src="../assets/img/youtube(2).png" />
              </SocialLink>
                
                </a-col>
                <a-col :xs="6">     <SocialLink link="https://www.instagram.com/ceramo_stone_group/">
                  <img src="../assets/img/social-images/instagram-black.svg" />
              </SocialLink>
                 
                </a-col>
              </a-row>
            </div>

            <div class="our-contacts">
              {{ $t("footer.p3") }}<br /><br />
              <a href="tel:+7 (701) 643 74 19"> +7 (701)643-74-19 </a>
              <br />
              <a href="mailto:marketing@c-s-g.kz">
              <p class="contact-us-text">marketing@c-s-g.kz</p>
            </a><br /><br />
              <a href="tel:+7 (771) 727 07 00"> +7 (771) 727-07-00 </a>
              <br />
              <a href="mailto:callcenter@c-s-g.kz">
              <p class="contact-us-text">callcenter@c-s-g.kz</p>
            </a><br />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- <a-modal
      class="city-select-modal"
      v-model:visible="city_modal_visible"
      @ok="handleOk"
      :closable="false"
      :footer="null"
    >
      <img
        src="../assets/img/modalcity.png"
        style="width: 100%; background-size: cover"
      />
      <p class="city-select-title">Ваш город Алматы?</p>
      <div class="city-list-block">
        <a-row>
          <a-col
            :xs="24"
            :md="12"
            v-for="city in cityList"
            :key="city.id"
            @click="onChooseCity(city.id)"
            ><p
              :style="
                'text-align: center;' +
                (city.id == 1
                  ? 'background-color:#013B82; color:white;'
                  : 'background-color:white')
              "
            >
              {{ city.name }}
            </p></a-col
          >
        </a-row>
      </div>
    </a-modal> -->

    <div class="page-loading" v-if="loading().value">
      <img src="/img/main/loader.png" />
    </div>
  </div>
</template>
<style scoped>
.page-footer {
  background: #01011a;
  padding-top: 85px;
  padding-bottom: 150px;
}

.map-container {
  height: 300px;
}

.map-container {
  /* height: 100px; */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: #01011a;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.bl-white {
  border-left: 1px solid white;
}

.our-addresses {
  color: white;
  font-size: 23px;
  font-weight: 300;
}

.our-addresses .cursor-pointer {
  color: lightskyblue;
}

.our-addresses .cursor-pointer:hover {
  text-shadow: 0px 0px white;
}

.our-contacts {
  color: white;
  font-size: 25px;
  font-weight: 500;
  text-align: right;
  margin-top: 30px;
  line-height: 26px;
}
.our-contacts  a{
  color: white;

}
.our-contacts-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.our-social-block {
  display: flex;
  justify-content: space-between;
}

.our-social-block img {
  object-fit: contain;
  margin: 0 auto;
  display: block;
}
.ant-modal-body {
  text-align: center;
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
}

.city-list-block {
  padding-left: 70px;
  margin-top: 20px;
  text-align: center;
  /* display: flex;
  justify-content: center; */
}

.city-select-modal .city-select-title {
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}

.city-list-block col {
  text-align: center;
}

.city-list-block p {
  display: flex;
  justify-content: space-around;
  width: 60%;
  color: #013b82;
  /* margin-right: 50px; */
  cursor: pointer;
  border-radius: 6px;
  border: 0.7px solid #013b82;
  font-size: 20px;
}

.city-list-block p {
  /* margin-right: 50px; */
  cursor: pointer;
  font-size: 20px;
}

.page-loading {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
}

.page-loading img {
  animation: rotation 5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@media screen and (max-width: 1550px) and (min-width: 768px) {
  .our-social-block img {
    object-fit: contain;
    margin: 0 auto;
    display: block;
    /* width: 100%; */
    height: 70%;
  }

  .our-contacts {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .map-container {
    padding-bottom: 2rem;
    padding-right: 10px;
    grid-template-columns: 25% 75%;
  }
  .ant-col-md-12 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .our-contacts {
    text-align: left;
  }

  .child-logo img {
    width: 60%;
  }
}
</style>

<script setup>

let map = 1;
const setView = (city) => {
  map.setView(city, 10);
};
const  {t} = useI18n()
let city_modal_visible = ref(false);

const cityList = ref([
  { name: "НЕТ", id: 2 },
  { name: "ДА", id: 1 },
]);

const onChooseCity = (cityId) => {
  const city = useCookie("city");
  city.value = cityId;
  city_modal_visible.value = false;
};

const { startLoading, loading } = useLoader();

onMounted(() => {
  map = new DG.Map("map-container");
  map.setView([43.25908181, 76.90088027], 13);
  DG.marker([43.259569, 76.901075]).addTo(map);
  DG.marker([43.259568, 76.900549]).addTo(map);
  DG.marker([43.259115, 76.900873]).addTo(map);
  DG.marker([43.236701, 76.845539]).addTo(map);
  DG.marker([51.190914, 71.491003]).addTo(map);
  DG.marker([51.11559204059146, 71.43337165905311]).addTo(map);
  DG.marker([51.14655538404111, 71.41067001444625]).addTo(map);
  // DG.marker([49.7951973134803, 73.1300919642223]).addTo(map); //Qaragandy
  DG.marker([50.33000456542562, 57.12434945169552]).addTo(map);
  // DG.marker([47.104476, 51.944348]).addTo(map); //Atyrau
  DG.marker([55.721219, 37.651672]).addTo(map);
  DG.marker([55.502722, 38.36542]).addTo(map);
  DG.marker([59.958665, 30.408646]).addTo(map);
  DG.marker([42.863831, 74.628692]).addTo(map);
  DG.marker([47.248326, 39.847757]).addTo(map);
  DG.marker([42.308614, 69.596159]).addTo(map);
  DG.marker([42.345947, 69.612249]).addTo(map);

  const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://app.hoversignal.com/Api/Script/398b02db-0f43-40f2-8375-4fa80fe50f15';
    document.getElementsByTagName('head')[0].appendChild(script);

  const city = useCookie("city");
  if (!city.value) {
    city_modal_visible.value = true;
  }

  // const { stopLoading } = useLoader();
  // stopLoading();
  // document.body.style.overflowY = "scroll";
});
</script>

<!-- end of footer-col -->
