import { Head } from '../.nuxt/components';
<template>
  <div class="">
    <slot></slot>
  </div>
  <noscript v-html="iFrameCode" />

  <noscript
    ><img
      height="1"
      width="1"
      style="display: none"
      src="https://www.facebook.com/tr?id=807753554216816&ev=PageView&noscript=1" /></noscript
  ><noscript
    ><div>
      <img
        src="https://mc.yandex.ru/watch/94806976"
        style="position: absolute; left: -9999px"
        alt=""
      /></div
  ></noscript>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          type: "text/javascript",
          async: true,
          src: "https://app.hoversignal.com/Api/Script/398b02db-0f43-40f2-8375-4fa80fe50f15",
        },
      ],
    };
  },
};
</script>
