<script>
import CardPlace from '@/components/organisms/cards/CardPlace.vue'
import MapDefault from '@/components/molecules/maps/MapDefault.vue'

export default {
  name: 'PageFavorites',

  components: {
    CardPlace,
    MapDefault
  },

  middleware: 'authenticated',

  data () {
    return {
      places: []
    }
  },

  computed: {
    heightPage () {
      return window.innerHeight - 55
    }
  },

  watch: {
    '$store.state.favoritesPlaces.places': {
      immediate: true,
      handler (val) {
        this.places = val
      }
    }
  }
}
</script>

<template lang="pug">
v-row(
  justify="center"
)
  v-col(
    class="pt-16 px-8 px-md-15"
    cols="12"
    md="4"
  )
    v-row(
      justify="center"
      align="center"
    )
      v-col(cols="12")
        h1(class="text-h5 font-weight-bold")
          | Favoritos

    //- List Favorites Places
    v-row(class="mt-7")
      v-col(class="text-body-2 darken-4")
        | Locais salvos ({{ places.length }})

      v-col(
        class="scroll py-0"
        cols="12"
        style="overflow-y: scroll;"
        :style="`height: ${heightPage - 182}px`"
      )
        card-place(
          class="mb-2"
          v-for="place in places"
          :key="place.id"
          :place="place"
        )

  //- Map Default
  v-col(
    class="pa-0"
    cols="12"
    md="8"
  )
    map-default(
      ref="mapDefault"
      :places="places"
      :style="`height: ${heightPage}px`"
    )

</template>
