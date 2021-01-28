import Vue from 'vue'

import AxiosPostMixin from '../../mixins/axios/post.js'

export default Vue.extend({
  name: 'ApiRegister',

  mixins: [AxiosPostMixin],

  created () {
    this.url = '/api/register'
  }
})
