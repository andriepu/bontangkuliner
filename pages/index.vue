<template lang="pug">
  .p-home
    .p-home__top: o-main-banner
    .p-home__center
      m-section-title(title='Merchants')
      o-product-list
</template>

<script>
import MSectionTitle from '~/components/molecules/m-section-title';
import OMainBanner from '~/components/organisms/o-main-banner';
import OProductList from '~/components/organisms/o-product-list';

export default {
  components: {
    MSectionTitle,
    OMainBanner,
    OProductList,
  },
};
</script>

<style lang="scss" scoped>
.p-home {
  @apply pt-3;

  > * {
    @apply mb-16;
  }
}
</style>
