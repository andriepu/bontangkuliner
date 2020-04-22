export default {
  products (state) {
    return !state.isSearch || !state.filter
      ? state.products
      : state.products.filter(product => (
        // new RegExp(`\\b(${state.filter.split(/\s+/).join('|')})\\b`, 'i')
        new RegExp(`(${state.filter.split(/\s+/).join('|')})`, 'i')
          .test(product.name)
      ));
  },
};
