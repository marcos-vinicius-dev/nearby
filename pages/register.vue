<script>
import FormRegister from '@/components/organisms/forms/FormRegister.vue'

export default {
  name: 'PageRegister',

  components: {
    FormRegister
  },

  layout: 'auth',

  middleware: 'notAuthenticated'
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
      v-col(cols="12")
        h1(class="text-h5 font-weight-bold ")
          | Cadastre-se

      v-col(cols="12")
        form-register

      v-col(
        class="my-2"
        cols="12"
      )
        v-row(
          align="center"
          justify="center"
        )
          v-col
           v-divider
          | ou
          v-col
            v-divider

      v-col(cols="12")
        v-btn(
          block
          depressed
          outlined
          x-large
          class="text-none font-weight-bold"
          @click="$router.push('/')"
        )
          | Entrar

</template>
