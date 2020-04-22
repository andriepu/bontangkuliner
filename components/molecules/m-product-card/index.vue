<template src="./m-product-card.pug" lang="pug"></template>
<script src="./m-product-card.js"></script>

<style lang="scss" scoped>
.c-product__image {
  @apply w-full;
  @apply transition-all duration-700 ease-out;
}

.c-product__image-wrapper {
  @apply w-full;
  @apply overflow-hidden;

  &:hover .c-product__image {
    @apply transform scale-110 rotate-2;
  }
}

.c-product__text {
  @apply text-lg text-center;

  &:hover {
    color: red;
  }

  .c-product__text-wrapper {
    @apply mt-4;
  }
}
</style>
