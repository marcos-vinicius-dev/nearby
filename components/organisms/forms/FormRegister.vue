<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

import ApiRegister from '@/components/api/register'
import FieldEmail from '@/components/molecules/fields/FieldEmail.vue'
import FieldPassword from '@/components/molecules/fields/FieldPassword.vue'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'FormLogin',

  components: {
    ApiRegister,
    FieldEmail,
    FieldPassword,
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
api-register(
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
        field-email(
          class="col-12"
          label="E-mail"
          placeholder="eve.holt@reqres.in"
          validation-name="email"
          validation-rules="required|email"
          v-model="formData.email"
        )

        field-password(
          class="col-12 py-0"
          label="Senha"
          validation-name="senha"
          validation-rules="required"
          v-model="formData.password"
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
            | Continuar

</template>
