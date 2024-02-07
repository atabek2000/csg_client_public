<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <a-input class="input-gray-outlined" :placeholder="placeholder" />
</template>

<style scoped>
.input-gray-outlined {
  background-color: #f4f4f9;
  height: 40px;
}
</style>
