<script>
import ApiProfile from '@/components/api/profile.js'
import ApiUpdateProfile from '@/components/api/updateProfile.js'

import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'FormLogin',

  components: {
    ApiProfile,
    ApiUpdateProfile,
    ValidationObserver,
    ValidationProvider
  },

  data () {
    return {
      id: 4,
      formData: {
        avatar: '',
        email: '',
        first_name: '',
        last_name: ''
      }
    }
  },

  methods: {
    __onDone ({ data }) {
      this.$toast.success('Perfil editado com sucesso', {
        icon: 'mdi-check-circle-outline',
        duration: 5000
      })
      this.$router.push('/search')
    },

    __onDoneProfile ({ data }) {
      this.formData = {
        email: data.data.email,
        first_name: data.data.first_name,
        last_name: data.data.last_name,
        avatar: data.data.avatar
      }
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
api-profile(
  v-slot="{ loading, data }"
  :id="id"
  @done="__onDoneProfile"
)
  api-update-profile(
    v-slot="{ error, loading, submit }"
    :variables="formData"
    @done="__onDone"
    @error="__onError"
  )
    validation-observer(
      slim
      v-slot="{ handleSubmit }"
      v-if="formData"
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
              v-model="formData.email"
              :error-messages="errors"
            )

          validation-provider(
            class="col-12 py-0"
            name="Nome"
            rules="required"
            v-slot="{ errors }"
          )
            v-text-field(
              autocomplete="name"
              label="Nome"
              v-model="formData.first_name"
              :error-messages="errors"
            )

          validation-provider(
            class="col-12 py-0"
            name="Sobrenome"
            rules="required"
            v-slot="{ errors }"
          )
            v-text-field(
              autocomplete="name"
              label="Sobrenome"
              v-model="formData.last_name"
              :error-messages="errors"
            )

          validation-provider(
            class="col-12 py-0"
            name="Avatar"
            rules="required"
            v-slot="{ errors }"
          )
            v-text-field(
              autocomplete="name"
              label="Avatar"
              v-model="formData.avatar"
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
              | Salvar

</template>
