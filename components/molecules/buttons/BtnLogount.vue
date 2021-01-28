<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'BtnLogount',

  methods: {
    __logout () {
      Cookie.remove('auth')
      this.$store.commit('user/setAuth', null)
      this.$router.push('/')
    }
  }

}
</script>

<template lang="pug">
v-btn(
  block
  dark
  depressed
  @click="__logout"
)
  | Sair

</template>
