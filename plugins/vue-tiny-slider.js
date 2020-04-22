import Vue from 'vue';
import vTinySlider from 'vue-tiny-slider';

const VueTinySlider = {
  install () {
    Vue.component('VueTinySlider', vTinySlider);
  },
};

Vue.use(VueTinySlider);
