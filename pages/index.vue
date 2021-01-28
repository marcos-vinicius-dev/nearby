<script>
import FormLogin from '@/components/organisms/forms/FormLogin.vue'

export default {
  name: 'PageIndex',

  components: {
    FormLogin
  },

  layout: 'auth',

  middleware: 'notAuthenticated'
}
</script>

<template lang="pug">
v-row(
  class="full-height"
  justify="center"
  align="center"
)
  v-col(
    cols="12"
    sm="8"
    md="8"
    lg="4"
  )
    v-card(class="pa-5 shadow-card")
      v-col(cols="12")
        h1(class="text-h5 font-weight-bold ")
          | Login

      v-col(cols="12")
        form-login

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
          @click="$router.push('/register')"
        )
          | Cadastra-se

</template>
