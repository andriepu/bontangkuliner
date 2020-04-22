import { mapGetters } from 'vuex';
import components from './components';

export default {
  name: 'OProductList',
  components,
  computed: {
    ...mapGetters(['products']),
  },
};
