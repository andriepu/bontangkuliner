<template src="./m-section-title.pug" lang="pug"></template>
<script src="./m-section-title.js"></script>

<style lang="scss" scoped>
.c-section-title {
  @apply mb-10;
  @apply px-4;

  &__text {
    @apply text-xl font-semibold;
    @apply pb-2;
    @apply border-b border-gray-300;
    @apply relative;

    &::after {
      @apply absolute left-0 bottom-0;
      @apply bg-red-600;
      @apply transform translate-y-1/2;
      content: " ";
      width: 50px;
      height: 3px;
    }
  }
}
</style>
