import Vue from 'vue'

import AxiosGetMixin from '../../mixins/axios/get.js'

export default Vue.extend({
  name: 'ApiMe',

  mixins: [AxiosGetMixin],

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  created () {
    this.url = `/api/users/${this.id}`
  }
})
