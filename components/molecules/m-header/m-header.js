import { mapState } from 'vuex';
import components from './components';

export default {
  name: 'MHeader',
  components,
  computed: {
    ...mapState(['isSearch']),
  },
};
