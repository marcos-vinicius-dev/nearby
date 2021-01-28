<script>

import { currentLocationControls } from '@/helpers'

export default {
  name: 'MapDefault',

  middleware: 'authenticated',

  props: {
    places: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      mapLocal: null
    }
  },

  computed: {
    lat: {
      get () {
        return this.$store.state.maps.location.lat
      },
      set (v) {
        this.$store.commit('maps/setLat', v)
      }
    },
    lng: {
      get () {
        return this.$store.state.maps.location.lng
      },
      set (v) {
        this.$store.commit('maps/setLng', v)
      }
    }
  },

  watch: {
    lat: {
      handler () {
        this.__initMap()
      }
    },
    lng: {
      handler () {
        this.__initMap()
      }
    }
  },

  mounted () {
    this.__onGetLatLong()
  },

  methods: {

    __addLocationsToMap (places) {
      const infowindow = new window.google.maps.InfoWindow()
      const map = this.mapLocal

      places.forEach((place) => {
        const lat = place.geometry.location.lat
        const lng = place.geometry.location.lng
        const marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(lat, lng),
          map
        })
        window.google.maps.event.addListener(marker, 'click', () => {
          infowindow.setContent(`<div class="text-subtitle-1">${place.name}</div><p>${place.formatted_address}</p>`)
          infowindow.open(map, marker)
        })
      })
    },

    __controlsMap (map) {
      currentLocationControls(window, map, { lat: this.lat, lng: this.lng })
    },

    __initMap () {
      this.mapLocal = new window.google.maps.Map(this.$refs.map, {
        center: new window.google.maps.LatLng(this.lat, this.lng),
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoom: 14
      })

      this.__controlsMap(this.mapLocal)

      if (this.places.length) {
        this.__addLocationsToMap(this.places)
      }
    },

    __onGetLatLong () {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude
          this.lng = position.coords.longitude
          this.__initMap()
        }
      )
    }
  }
}
</script>

<template lang="pug">
div(ref="map")

</template>
