export default function ({ store, redirect, app }) {
  // If the user is not authenticated
  if (!store.state.user.auth) {
    app.$axios.setToken(store.state.user.auth, 'Bearer')
    return redirect('/')
  }
}
