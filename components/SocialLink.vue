<template>
  <a :href="link" target="_blank" class="social-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
