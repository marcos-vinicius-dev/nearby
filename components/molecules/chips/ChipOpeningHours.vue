<script>
export default {
  name: 'ChipOpeningHours',

  props: {
    place: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<template lang="pug">
v-chip(
  small
  text-color="white"
  v-if="place.opening_hours"
  :color="place.opening_hours.open_now ? 'green' : 'red'"
)
  div(v-if="place.opening_hours.open_now")
    | Aberto
  div(v-else)
    | Fechado

</template>
