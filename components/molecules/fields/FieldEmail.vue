<script>
import FieldMixin from '@/mixins/fields.js'

import {
  ValidationProvider
} from 'vee-validate'

export default {
  name: 'FieldEmail',

  components: {
    ValidationProvider
  },

  mixins: [FieldMixin],

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
    v-bind="propsField"
    v-on="$listeners"
    :attrs="attrsField"
    :error-messages="errors"
  )

</template>
