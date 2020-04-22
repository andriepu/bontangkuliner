<template src="./m-footer.pug" lang="pug"></template>
<script src="./m-footer.js"></script>

<style lang="scss" scoped>
.c-footer {
  @apply flex justify-center;
  @apply text-gray-300 bg-gray-900;
  @apply w-full;
  height: 96px;

  &__copyright {
    @apply self-center;
    @apply text-sm;
    @apply text-center;
  }
}
</style>
