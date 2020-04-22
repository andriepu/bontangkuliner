<template src="./o-product-list.pug" lang="pug"></template>
<script src="./o-product-list.js"></script>

<style lang="scss" scoped>
.c-product-list {
  @apply flex justify-between flex-wrap;

  &__item {
    @apply px-4;
    @apply mb-8;
    @apply w-1/2;
  }
}
</style>
