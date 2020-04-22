import { mapState, mapMutations } from 'vuex';
import components from './components';

export default {
  name: 'MSearchbox',
  components,
  data: () => ({
    q: '',
    iconSize: '24',
  }),
  computed: {
    ...mapState([
      'isSearch',
      'filter',
    ]),
  },
  methods: {
    ...mapMutations([
      'setSearch',
      'setFilter',
    ]),
    onTriggerClicked () {
      if (!this.isSearch) this.setSearch(true);
    },
    onInputBlurred () {
      if (!this.filter) this.setSearch(false);
    },
    onCloseClicked () {
      this.q = '';
      this.$nextTick(() => this.$refs.input.focus());
    },
  },
  watch: {
    isSearch (isSearch) {
      if (isSearch) this.$nextTick(() => this.$refs.input.focus());
    },
    q: {
      immediate: true,
      handler (q) {
        this.setFilter(q);
      },
    },
  },
};
