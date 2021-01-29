<script>
import { VTextField } from 'vuetify/lib'

export default {
  name: 'PasswordField',

  extends: VTextField,

  data () {
    return {
      showPass: false
    }
  },

  computed: {
    propsField () {
      return {
        ...this.$props,
        type: this.showPass ? 'text' : 'password',
        appendIcon: this.showPass ? 'mdi-eye' : 'mdi-eye-off'
      }
    }
  }
}
</script>

<template lang="pug">
v-text-field(
  v-bind="propsField"
  v-on="$listeners"
  @click:append="(v) => showPass = !showPass"
)

</template>
