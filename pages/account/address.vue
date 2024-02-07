<template>
  <div class="address-block container">
    <h1 class="page-title">{{ $t("address.h0") }}</h1>
    <a-row :gutter="[16, 0]" class="mb-20">
      <a-col :xs="0" :md="6"> <AccountLeftBlock /> </a-col>
      <a-col :xs="24" :md="18">
        <div class="address-list" v-if="addresses.length > 0">
          <div class="address-item" v-for="address in addresses" :key="address">
            <h6>
              {{ address.city.name_ru ? "г. " + address.city.name_ru : "" }}
              {{ address.street ? "/у-ца " + address.street : "" }},
              {{ address.house }}
              {{ address.apartment ? "/кв." + address.apartment : "" }}
            </h6>
            <div
              class="delete-address-button button-text"
              @click="deleteAddress(address.id)"
            >
              <img src="/assets/img/delete-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div class="address-list" v-else>
          <p class="no-content-text">{{ $t("address.h1") }}</p>
        </div>
        <div class="address-button-block">
          <ButtonBlueOutlined @click="showAddresForm">{{
            $t("address.h2")
          }}</ButtonBlueOutlined>
        </div>
      </a-col>
    </a-row>
    <a-modal
      v-model:visible="addressModel.visible"
      :closable="false"
      :footer="null"
      class="address-modal"
    >
      <a-select
        ref="select"
        v-model:value="addressModel.city_id"
        :options="cities"
        :field-names="{ label: 'name_ru', value: 'id' }"
        style="width: 100%"
        :placeholder="t('address.h3')"
        class="address-model-elem address-modal-select"
      ></a-select>
      <a-input
        v-model:value="addressModel.street"
        :placeholder="t('address.h4')"
        class="address-model-elem input-gray"
      />
      <a-row :gutter="[18, 9]" class="address-model-elem">
        <a-col :xs="12" :md="12">
          <a-input
            v-model:value="addressModel.house"
            :placeholder="t('address.h5')"
            class="input-gray"
          />
        </a-col>
        <a-col :xs="12" :md="12">
          <a-input
            v-model:value="addressModel.apartment"
            :placeholder="t('address.h13')"
            class="input-gray"
          />
        </a-col>
      </a-row>
      <a-input
        v-model:value="addressModel.reciever"
        :placeholder="t('address.h6')"
        class="address-model-elem input-gray"
      />
      <a-input
        v-model:value="addressModel.phone"
        :placeholder="t('address.h7')"
        class="address-model-elem input-gray"
      />
      <a-checkbox
        v-model:checked="addressModel.default"
        class="checkbox-gray address-model-elem"
        >{{ $t("address.h10") }}</a-checkbox
      >
      <div class="address-modal-button-block address-model-elem">
        <ButtonBlueFilled @click="createAddress">{{
          $t("address.h11")
        }}</ButtonBlueFilled>
        <ButtonRedFilled @click="hideAddresForm">{{
          $t("address.h12")
        }}</ButtonRedFilled>
      </div>
    </a-modal>
  </div>
</template>

<script setup>
const { t } = useI18n();
import { message } from "ant-design-vue";
const runtimeConfig = useRuntimeConfig();
const { useAccessToken } = useAuth();

const addressModel = reactive({
  visible: false,
  city_id: undefined,
  street: undefined,
  house: undefined,
  apartment: undefined,
  reciever: undefined,
  phone: undefined,
  default: false,
});

const options = [
  {
    value: 1,
    label: "Almaty",
  },
  {
    value: 2,
    label: "Astana",
  },
];

const addresses = ref([]);
const cities = ref([]);

const showAddresForm = () => {
  addressModel.visible = true;
};

const hideAddresForm = () => {
  addressModel.visible = false;
};

const createAddress = async () => {
  if (
    !addressModel.city_id ||
    !addressModel.street ||
    !addressModel.house ||
    !addressModel.apartment ||
    !addressModel.reciever ||
    !addressModel.phone
  ) {
    message.error("Заполните обязательные поля!");
  } else {
    await useFetchApi("users/address/", {
      method: "POST",
      body: { ...addressModel },
    })
      .then(async (res) => {
        message.success("Успешно создано!");
        addressModel.visible = false;
        addressModel.city_id = undefined;
        addressModel.street = undefined;
        addressModel.house = undefined;
        addressModel.apartment = undefined;
        addressModel.reciever = undefined;
        addressModel.phone = undefined;
        addressModel.default = false;
        await fetchAddresses();
      })
      .catch((error) => {
        message.error(error.message);
      });
  }
};

const deleteAddress = async (id) => {
  await useFetchApi("users/address/" + id, {
    method: "DELETE",
  })
    .then(async () => {
      message.success("Успешно удалено!");
      await fetchAddresses();
    })
    .catch((error) => {
      message.error(error.message);
    });
};

const fetchAddresses = async () => {
  if (useAccessToken().value) {
    await useFetchApi("users/address/", {
      method: "GET",
    })
      .then((res) => {
        addresses.value = res;
      })
      .catch((error) => {
        message.error(error.message);
      });
  }
};

onBeforeMount(async () => {
  await fetchAddresses();

  await $fetch(runtimeConfig.public.API_URL + "city/", {
    method: "GET",
  })
    .then((res) => {
      cities.value = res;
    })
    .catch((error) => {
      message.error(error.message);
    });
});
</script>

<style scoped>
.address-item {
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.address-item h6 {
  margin: 0;
  font-weight: bold;
}
.address-item + .address-item {
  margin-top: 10px;
}

.address-button-block {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.address-modal .address-model-elem + * {
  margin-top: 20px;
}

.address-modal-button-block {
  display: flex;
  justify-content: space-around;
}

.input-gray {
  background-color: #f4f4f9;
  height: 40px;
}
</style>
