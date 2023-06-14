import Vue from 'vue';
import VueI18n from 'vue-i18n';

import {
  okendoConfigure,
  OkendoVueI18nPlugin
} from '@okendo/reviews-widget-plus-vue';

Vue.use(VueI18n);
Vue.use(OkendoVueI18nPlugin);

export default function() {
  const i18n = new VueI18n();

  okendoConfigure(i18n).then(() => {
    window.dispatchEvent(new CustomEvent('okendo:ready'));
  });
}
