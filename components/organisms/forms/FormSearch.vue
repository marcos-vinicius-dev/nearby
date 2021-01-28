<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

import ApiSearch from '@/components/api/search.js'
import FieldLocation from '@/components/molecules/fields/FieldLocation.vue'

export default {
  name: 'FormSearch',

  components: {
    ApiSearch,
    FieldLocation,
    ValidationObserver,
    ValidationProvider
  },

  data () {
    return {
      distances: [
        { text: '5 km', value: '5' },
        { text: '10 km', value: '10' },
        { text: '15 Km', value: '15' },
        { text: '20 km', value: '20' },
        { text: 'Qualquer', value: '50' }
      ],
      formData: {
        address: null,
        latLng: null,
        radius: '5',
        search: null
      },
      location: null
    }
  },

  computed: {
    latLng: {
      get () {
        return this.$store.getters['maps/latLng']
      }
    }
  },

  watch: {
    latLng: {
      handler (val) {
        this.formData.latLng = val
      }
    }
  },

  methods: {
    __onDone ({ data }) {
      this.$emit('done', data.results)
    },

    __submitManual () {
      this.$refs.search.submitManual()
    }
  }

}
</script>

<template lang="pug">
api-search(
  manualSubmit
  ref="search"
  v-slot="{ error, loading, submit }"
  :parameters="formData"
  @done="__onDone"
)
  validation-observer(
    slim
    v-slot="{ handleSubmit }"
  )
    form(@submit.prevent="handleSubmit(__submitManual)")
      v-row
        field-location

        validation-provider(
          class="col-6 py-0"
          v-slot="{ errors }"
          name="tipo de local"
          rules="required"
        )
          v-text-field(
            label="Tipo de local"
            placeholder="Ex: Açaí"
            v-model="formData.search"
            :error-messages="errors"
          )

        validation-provider(
          class="col-6 py-0"
          v-slot="{ errors }"
          name="distância"
          rules="required"
        )
          v-select(
            label="Distância"
            v-model="formData.radius"
            :items="distances"
            :error-messages="errors"
          )

        v-col(cols="12")
          v-btn(
            block
            dark
            depressed
            x-large
            class="text-none font-weight-bold"
            type="submit"
          )
            | Buscar

</template>
