<script>
import BtnFavorite from '@/components/molecules/buttons/BtnFavorite.vue'
import ChipOpeningHours from '@/components/molecules/chips/ChipOpeningHours.vue'

export default {
  name: 'CardPlace',

  components: {
    BtnFavorite,
    ChipOpeningHours
  },

  props: {
    place: {
      type: Object,
      required: true
    }
  }

}
</script>

<template lang="pug">
v-card(class="shadow-card")
  v-card-text(class="pa-6")
    v-row(
      align="center"
      justify="space-between"
      class="mx-0"
    )
      v-col(cols="12")
        v-row(
          align="center"
          justify="space-between"
        )
          v-card-title(class="pa-0")
            | {{ place.name }}

          div

            //- Button favorite
            btn-favorite(:place="place")

            v-btn(
              icon
              target="_blank"
              :href="`/local/writereview?placeid=${place.place_id}`"
            )
              v-icon
                | mdi-comment-edit-outline

      v-col(cols="9")
        v-row

          //- Rating
          v-rating(
            dense
            readonly
            half-increments
            background-color="grey"
            color="yellow accent-4"
            size="14"
            :value="place.rating"
          )
          div(class="grey--text ml-4")
            | {{ place.rating }}

        v-row(
          align="center"
          class="mt-4"
        )
          | {{ place.formatted_address }}

      v-col(
        class="pa-0 full-height"
        cols="auto"
      )

        //- Chip Opening Hours
        chip-opening-hours(:place="place")

</template>
