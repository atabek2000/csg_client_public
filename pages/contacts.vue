<template>
  <div class="">
    <div class="contacts container">
      <h1>{{ $t("contacts.h0") }}</h1>
      <a-row v-for="contact in contacts" :key="contact.id" class="contact-row">
        <a-col :xs="24" :md="4">{{ contact.city_ru }}</a-col>
        <a-col :xs="24" :md="8">
          <p v-for="address in contact.addresses" :key="address.id">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00187 8.95321C8.15063 8.95321 9.08187 8.02197 9.08187 6.87321C9.08187 5.72446 8.15063 4.79321 7.00187 4.79321C5.85312 4.79321 4.92188 5.72446 4.92188 6.87321C4.92188 8.02197 5.85312 8.95321 7.00187 8.95321Z"
                stroke="white"
              />
              <path
                d="M1.41574 5.65992C2.72908 -0.113413 11.2824 -0.106746 12.5891 5.66659C13.3557 9.05325 11.2491 11.9199 9.40241 13.6933C8.06241 14.9866 5.94241 14.9866 4.59574 13.6933C2.75574 11.9199 0.649077 9.04659 1.41574 5.65992Z"
                stroke="white"
              />
            </svg>

            {{ address.name }}
          </p>
        </a-col>
        <a-col :xs="24" :md="6">
          <p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 14.064C17 14.352 16.9359 14.648 16.7997 14.936C16.6635 15.224 16.4872 15.496 16.2549 15.752C15.8623 16.184 15.4296 16.496 14.9409 16.696C14.4602 16.896 13.9394 17 13.3786 17C12.5613 17 11.688 16.808 10.7666 16.416C9.84527 16.024 8.92389 15.496 8.01052 14.832C7.08913 14.16 6.21582 13.416 5.38257 12.592C4.55734 11.76 3.81222 10.888 3.14722 9.976C2.49024 9.064 1.96144 8.152 1.57687 7.248C1.19229 6.336 1 5.464 1 4.632C1 4.088 1.09614 3.568 1.28843 3.088C1.48072 2.6 1.78518 2.152 2.20981 1.752C2.72258 1.248 3.28343 1 3.87631 1C4.10065 1 4.32499 1.048 4.52529 1.144C4.7336 1.24 4.91788 1.384 5.06209 1.592L6.92088 4.208C7.0651 4.408 7.16925 4.592 7.24136 4.768C7.31347 4.936 7.35353 5.104 7.35353 5.256C7.35353 5.448 7.29745 5.64 7.18528 5.824C7.08112 6.008 6.92889 6.2 6.7366 6.392L6.12769 7.024C6.03956 7.112 5.9995 7.216 5.9995 7.344C5.9995 7.408 6.00751 7.464 6.02354 7.528C6.04757 7.592 6.07161 7.64 6.08763 7.688C6.23185 7.952 6.48022 8.296 6.83275 8.712C7.19329 9.128 7.57787 9.552 7.99449 9.976C8.42714 10.4 8.84377 10.792 9.2684 11.152C9.68503 11.504 10.0295 11.744 10.302 11.888C10.342 11.904 10.3901 11.928 10.4462 11.952C10.5103 11.976 10.5744 11.984 10.6465 11.984C10.7827 11.984 10.8868 11.936 10.975 11.848L11.5839 11.248C11.7842 11.048 11.9765 10.896 12.1607 10.8C12.345 10.688 12.5293 10.632 12.7296 10.632C12.8818 10.632 13.0421 10.664 13.2183 10.736C13.3946 10.808 13.5789 10.912 13.7792 11.048L16.4311 12.928C16.6395 13.072 16.7837 13.24 16.8718 13.44C16.9519 13.64 17 13.84 17 14.064Z"
                stroke="white"
                stroke-miterlimit="10"
              />
            </svg>
            {{ contact.phone }}
          </p>
          <p>
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 14H5C2.6 14 1 12.8529 1 10.1765V4.82353C1 2.14706 2.6 1 5 1H13C15.4 1 17 2.14706 17 4.82353V10.1765C17 12.8529 15.4 14 13 14Z"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 5L10.496 7.4077C9.672 8.19743 8.32 8.19743 7.496 7.4077L5 5"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ contact.email }}
          </p>
        </a-col>
        <a-col :xs="24" :md="6">
          <div style="white-space: pre-wrap">
            {{ contact.schedule_ru }}
          </div>
        </a-col>
      </a-row>

      <!-- <div class="subtitle-txt">Наши магазины в городе:</div> -->
      <!-- <div
        id="map_contacts-container"
        class="map_contacts-container"
        name="map_contacts-container"
        style="border-radius: 1rem"
      ></div> -->
    </div>
    <div class="feedback">
      <div class="container">
        <a-row>
          <a-col :xs="24" :md="16">
            <h4>{{ $t("contacts.h1") }}</h4>
            <p>
              {{ $t("contacts.h2") }}
            </p>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="subscribe-block">
              <a-input placeholder="Эл. почта" v-model:value="subscribeEmail">
              </a-input>
              <span class="subscribe-button" @click="sendEmail">{{
                $t("contacts.h3")
              }}</span>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";

const runtimeConfig = useRuntimeConfig();
const { data: contacts, pending } = await useLazyAsyncData(`contacts`, () =>
  $fetch(runtimeConfig.public.API_URL + `contact/`)
);

const subscribeEmail = ref("");
const sendEmail = () => {
  $fetch(runtimeConfig.public.API_URL + "subscribes/create/", {
    body: {
      email: subscribeEmail.value,
    },
    method: "post",
    onResponseError({ response }) {
      showFetchError(response);
    },
    onResponse({ response }) {
      if (response.ok) {
        message.success(
          "Спасибо за заявку. Мы свяжемся с вами ближайщее время!"
        );
        subscribeEmail.value = "";
      }
    },
  });
};

// onMounted(() => {
//   const map_contacts = new DG.Map("map_contacts-container");
//   map_contacts.setView([43.25908181, 76.90088027], 13);
//   DG.marker([43.25908181, 76.90088027]).addTo(map_contacts);
//   DG.marker([43.236701, 76.845539]).addTo(map_contacts);
//   DG.marker([51.11559204059146, 71.43337165905311]).addTo(map_contacts);
//   DG.marker([51.14655538404111, 71.41067001444625]).addTo(map_contacts);
//   DG.marker([49.7951973134803, 73.1300919642223]).addTo(map_contacts);
//   DG.marker([50.33000456542562, 57.12434945169552]).addTo(map_contacts);
//   DG.marker([47.104476, 51.944348]).addTo(map_contacts);
//   // map.off();
// });
</script>

<style scoped>
.contact-row {
  padding: 10px;
  box-shadow: 0 4px 10px 3px gray;
  background-color: #013b82;
  color: white;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.map_contacts-container {
  height: 400px;
  padding-bottom: 2rem;
  padding-right: 10px;
  grid-template-columns: 25% 75%;
}

.feedback {
  margin-top: 30px;
  background-color: rgba(1, 59, 130, 1);
  color: white;
  padding: 10px;
}

.feedback h4 {
  color: white;
}
.feedback p {
  font-size: 17px;
}

.subscribe-button {
  font-size: 17px;
  padding: 5px 10px;
  background-color: rgba(6, 35, 71, 1);
  margin-left: 10px;
  border-radius: 5px;
}

.subscribe-block {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
