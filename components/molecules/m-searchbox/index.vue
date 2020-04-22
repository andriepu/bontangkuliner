<template src="./m-searchbox.pug" lang="pug"></template>
<script src="./m-searchbox.js"></script>

<style lang="scss" scoped>
.c-searchbox {
  @apply relative;

  &__input {
    @apply hidden;
    @apply appearance-none border-none;
    @apply p-1 pl-12 pr-10;
    @apply w-full;

    .is-search & {
      @apply inline-block;
    }

    &:focus {
      @apply outline-none;
    }
  }

  &__icon-prefix {
    @apply stroke-current text-red-600;

    .is-search & {
      @apply absolute;
      @apply transform -translate-y-1/2 translate-x-2;
      @apply text-red-400;
      top: 50%;
    }
  }

  &__icon-suffix {
    @apply hidden;
    @apply absolute;
    @apply transform -translate-y-1/2 -translate-x-4;
    top: 50%;

    .is-search & {
      @apply inline-block;
    }
  }
}
</style>
