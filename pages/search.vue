<script>
import CardPlace from '@/components/organisms/cards/CardPlace.vue'
import FormSearch from '@/components/organisms/forms/FormSearch.vue'
import MapDefault from '@/components/molecules/maps/MapDefault.vue'

export default {
  name: 'Pagesearch',

  components: {
    CardPlace,
    FormSearch,
    MapDefault
  },

  middleware: 'authenticated',

  data () {
    return {
      location: null,
      places: []
    }
  },

  computed: {
    heightPage () {
      return window.innerHeight - 55
    }
  },

  methods: {

    doneSearch (value) {
      this.places = value
      this.$refs.mapDefault.__addLocationsToMap(value)
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
      align="center"
      justify="center"
    )
      v-col(cols="12")
        h1(class="text-h5 font-weight-bold ")
          | Buscar

      //- Form Search
      v-col(
        class="mt-7"
        cols="12"
      )
        form-search(
          @done="doneSearch"
        )

    //- List Places
    v-row(class="mt-10")
      v-col(class="text-body-2 darken-4 pt-0")
        | Locais encontrados ({{ places.length }})

      v-col(
        class="scroll py-0"
        cols="12"
        style="overflow-y: scroll;"
        :style="$vuetify.breakpoint.desktop ? `height: ${heightPage - 415}px` : 'height: 100%'"
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
