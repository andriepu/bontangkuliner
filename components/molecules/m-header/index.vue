<template src="./m-header.pug" lang="pug"></template>
<script src="./m-header.js"></script>

<style lang="scss" scoped>
.o-header {
  @apply flex flex-1 flex-no-wrap justify-between;
  height: 58px;
}

.o-header__logo {
  .is-search & {
    display: none;
  }
}

.o-header__action {
  @apply self-center;

  .is-search & {
    @apply w-full;
  }
}

.c-header {
  @apply py-3 px-4;

  &.is-search {
    @apply py-2;
  }
}
</style>
