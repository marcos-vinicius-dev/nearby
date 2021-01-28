<script>
import {
  ValidationObserver,
  ValidationProvider
} from 'vee-validate'

import ApiLogin from '@/components/api/login.js'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'FormLogin',

  components: {
    ApiLogin,
    ValidationObserver,
    ValidationProvider
  },

  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    __onDone ({ data }) {
      const auth = data.token
      this.$store.commit('user/setAuth', auth)
      Cookie.set('auth', auth)
      this.$router.push('/search')
    },

    __onError ({ error }) {
      this.$toast.error(error, {
        icon: 'mdi-alert-circle-outline'
      })
    }
  }

}
</script>

<template lang="pug">
api-login(
  v-slot="{ error, loading, submit }"
  :variables="formData"
  @done="__onDone"
  @error="__onError"
)
  validation-observer(
    slim
    v-slot="{ handleSubmit }"
  )
    form(@submit.prevent="handleSubmit(submit)")
      v-row
        validation-provider(
          class="col-12 py-0"
          name="email"
          rules="required|email"
          v-slot="{ errors }"
        )
          v-text-field(
            autocomplete="email"
            label="E-mail"
            placeholder="eve.holt@reqres.in"
            v-model="formData.email"
            :error-messages="errors"
          )

        validation-provider(
          class="col-12 py-0"
          name="senha"
          placeholder="cityslicka"
          v-slot="{ errors }"
          rules="required"
        )
          v-text-field(
            autocomplete="password"
            label="Password"
            v-model="formData.password"
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
            | Entrar

</template>
