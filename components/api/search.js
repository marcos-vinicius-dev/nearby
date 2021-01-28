import Vue from 'vue'

import AxiosGetMixin from '../../mixins/axios/get.js'

export default Vue.extend({
  name: 'ApiSearch',

  mixins: [AxiosGetMixin],

  props: {
    parameters: {
      type: Object,
      required: true
    }
  },

  methods: {
    submitManual () {
      this.url = `/maps/api/place/textsearch/json?location=${
        this.parameters.latLng
        }&radius=${
        this.parameters.radius * 1000
        }&query=${
        this.parameters.search
        }&key=${
        process.env.apiKey
        }`

      this.submit()
    }
  }

})
