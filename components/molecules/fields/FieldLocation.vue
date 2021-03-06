<script>
import FieldMixin from '@/mixins/fields.js'

import { ValidationProvider } from 'vee-validate'

export default {
  name: 'FieldLocation',

  components: {
    ValidationProvider
  },

  mixins: [FieldMixin],

  data () {
    return {
      formData: {
        address: null
      }
    }
  },

  computed: {
    attrsField () {
      return {
        ...this.$attrs,
        autocomplete: this.$attrs.autocomplete || 'email'
      }
    },

    propsField () {
      return {
        ...this.$props
      }
    },

    propsValidation () {
      return {
        ...this.validationProps
      }
    },

    lat: {
      get () {
        return this.$store.state.maps.location.lat
      },
      set (v) {
        this.$store.commit('maps/setLat', v)
      }
    },

    lng: {
      get () {
        return this.$store.state.maps.location.lng
      },
      set (v) {
        this.$store.commit('maps/setLng', v)
      }
    }
  },

  mounted () {
    this.__createInput()
  },

  methods: {
    __createInput () {
      const element = this.$refs.locationTextField.$refs.input
      const autocomplete = new window.google.maps.places.Autocomplete(element, { types: ['geocode'] })

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        this.lat = place.geometry.location.lat()
        this.lng = place.geometry.location.lng()
        this.formData.address = place.formatted_address
      })

      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude
          this.lng = position.coords.longitude
          this.__getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
        }
      )
    },

    async __getStreetAddressFrom () {
      const { data } = await this.$axios.get(`/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=${process.env.apiKey}`)
      if (!data.error_message) {
        this.formData.address = data.results[0].formatted_address
      } else {
        this.formData.address = null
      }
    }
  }

}
</script>

<template lang="pug">
validation-provider(
  v-bind="propsValidation"
  v-slot="{ errors }"
)
  v-text-field(
    ref="locationTextField"
    v-bind="propsField"
    v-model="formData.address"
    v-on="$listeners"
    :attrs="attrsField"
    :error-messages="errors"
  )

</template>
