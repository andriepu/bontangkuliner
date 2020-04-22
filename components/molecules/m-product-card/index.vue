<template src="./m-product-card.pug" lang="pug"></template>
<script src="./m-product-card.js"></script>

<style lang="scss" scoped>
.c-product {
  &__image {
    $img: &;

    @apply w-full;
    @apply transition-all duration-700 ease-out;

    &-wrapper {
      @apply w-full;
      @apply overflow-hidden;

      &:hover #{$img} {
        @apply transform scale-110 rotate-2;
      }
    }
  }

  &__text {
    @apply text-lg text-center;

    &-wrapper {
      @apply mt-4;
    }
  }
}
</style>
