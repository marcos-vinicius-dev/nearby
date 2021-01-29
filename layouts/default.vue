<script>
import ApiProfile from '@/components/api/profile.js'
import BtnLogount from '@/components/molecules/buttons/BtnLogount.vue'

export default {
  name: 'LayoutDefault',

  components: {
    ApiProfile,
    BtnLogount
  },

  data () {
    return {
      id: 4,
      links: [
        { text: 'Buscar', to: '/search' },
        { text: 'Favoritos', to: '/favorites' }
      ]
    }
  }
}
</script>

<template lang="pug">
v-app(dark)
  v-app-bar(
    app
    flat
    color="white"
  )
    v-tabs(
      centered
      class="ml-n9"
      color="grey darken-1"
    )
      v-tab(
        exact
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
      )
       | {{ link.text }}

    api-profile(
      v-slot="{ loading, data }"
      :id="id"
    )
      v-menu(
        offset-y
        open-on-hover
        v-if="data && data.data"
      )
        template(v-slot:activator="{ on, attrs }")
          v-btn(
            depressed
            class="py-6"
            v-bind="attrs"
            v-on="on"
          )
            v-avatar(
              color="grey darken-1 shrink"
              size="32"
            )
              img(
                :alt="data.data.first_name"
                :src="data.data.avatar"
              )

            div(class="px-2 text-lowercase hidden-sm-and-down")
              | {{ data.data.first_name }}

            v-icon(class="grey--text")
              | mdi-chevron-down

        v-list
          v-list-item(two-line)
            v-list-item-content
              v-list-item-subtitle
                | Email

              v-list-item-title
                | {{ data.data.email }}

          v-divider

          v-list-item(
            exact
            to="/profile"
          )
            v-list-item-title
              | Editar Perfil

          v-list-item
            v-list-item-title
              btn-logount

  v-main(class="grey lighten-4")
    //- v-container
    nuxt

</template>
