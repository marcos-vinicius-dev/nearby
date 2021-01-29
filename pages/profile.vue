<script>
import FormUpdateProfile from '@/components/organisms/forms/FormUpdateProfile.vue'

import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'PageProfile',

  components: {
    FormUpdateProfile,
    ValidationObserver,
    ValidationProvider
  },

  middleware: 'authenticated'
}
</script>

<template lang="pug">
v-row(
  align="center"
  class="full-height mx-1"
  justify="center"
)
  v-col(
    cols="12"
    lg="4"
    md="8"
    sm="8"
  )
    v-card(class="pa-5 shadow-card")
      v-col(cols="10")
        h1(class="text-h5 font-weight-bold ")
          | Perfil

      v-col(cols="12")
        form-update-profile

</template>
