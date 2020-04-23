import shuffle from 'shuffle-array';

export default {
  products (state) {
    const products = [...shuffle(state.topProducts), ...shuffle(state.products)];

    return !state.isSearch || !state.filter
      ? products
      : products.filter(product => (
        // new RegExp(`\\b(${state.filter.split(/\s+/).join('|')})\\b`, 'i')
        new RegExp(`(${state.filter.split(/\s+/).join('|')})`, 'i')
          .test(product.name)
      ));
  },
};
