<template lang="pug">
  .p-home(:class='{ "is-search": isSearch }')
    .p-home__top: o-main-banner
    .p-home__center
      m-section-title(title='Merchants')
      o-product-list
</template>

<script>
import { mapState } from 'vuex';
import MSectionTitle from '~/components/molecules/m-section-title';
import OMainBanner from '~/components/organisms/o-main-banner';
import OProductList from '~/components/organisms/o-product-list';

export default {
  components: {
    MSectionTitle,
    OMainBanner,
    OProductList,
  },
  computed: {
    ...mapState(['isSearch']),
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

.p-home__top {
  @apply transition-all duration-500 ease-out;

  .is-search & {
    @apply mb-0;
    @apply opacity-0 pointer-events-none;
    height: 0;
  }
}
</style>
