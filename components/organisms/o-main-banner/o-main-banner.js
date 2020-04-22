import { mapState } from 'vuex';
import components from './components';

export default {
  name: 'OMainBanner',
  components,
  data: () => ({
    tinySliderOptions: {
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayHoverPause: true,
      autoHeight: true,
      controls: false,
      gutter: 6,
      edgePadding: 24,
      items: 1,
      loop: true,
      mode: 'carousel',
      nav: false,
    },
  }),
  computed: {
    ...mapState(['banners']),
  },
};
