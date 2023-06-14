<template>
  <div>
    <client-only>
      <OkendoStarRating
        v-if="okendoReady"
        productId="shopify-7589140988131"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    OkendoStarRating: () => import("@okendo/reviews-widget-plus-vue").then(m => m.OkendoStarRating),
  },
  asyncData() {
    return {
      okendoReady: false
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('okendo:ready', () => {
        this.okendoReady = true;
      });
    }
  }
}
</script>
