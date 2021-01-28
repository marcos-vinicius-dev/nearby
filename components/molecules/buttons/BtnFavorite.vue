<script>
export default {
  name: 'BtnFavorite',

  props: {
    place: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      favorite: false
    }
  },

  watch: {
    place: {
      immediate: true,
      handler () {
        this.favorite = !!this.$store.state.favoritesPlaces.places.find(
          v => v.place_id === this.place.place_id
        )
      }
    }
  },

  methods: {
    __actionFavorite () {
      if (this.favorite) {
        this.favorite = false
        this.$store.commit('favoritesPlaces/removeFavoritePlace', this.place.place_id)
      } else {
        this.favorite = true
        this.$store.commit('favoritesPlaces/setFavoritePlace', this.place)
      }
    }
  }
}
</script>

<template lang="pug">
v-btn(
  icon
  @click="__actionFavorite"
)
  v-icon
    | {{ favorite ? 'mdi-cards-heart' : 'mdi-heart-outline' }}

</template>
