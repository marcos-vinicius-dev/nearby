export default {
  removeFavoritePlace (state, placeId) {
    const newPlaces = state.places.filter((v) => {
      return v.place_id !== placeId
    })
    state.places = []
    state.places = newPlaces
  },
  setFavoritePlace (state, place) {
    state.places.push(place)
  }
}
