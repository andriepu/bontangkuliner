<template lang="pug">
  .container.mx-auto
    m-header
    nuxt
    m-footer
</template>

<style>
html, body {
  @apply font-sans text-gray-700;
}
</style>

<script>
import MHeader from '~/components/molecules/m-header';
import MFooter from '~/components/molecules/m-footer';

export default {
  components: {
    MHeader,
    MFooter,
  },
};
</script>
