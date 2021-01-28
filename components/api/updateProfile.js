import Vue from 'vue'

import AxiosPostMixin from '../../mixins/axios/post.js'

export default Vue.extend({
  name: 'ApiUpdateProfile',

  mixins: [AxiosPostMixin],

  created () {
    this.url = '/api/users'
  }
})
