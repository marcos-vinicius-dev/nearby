export function currentLocationControls (window, map, latLng) {
  const controlDiv = document.createElement('div')

  // Set CSS for the control border.
  const controlUI = document.createElement('div')
  controlUI.style.backgroundColor = '#fff'
  controlUI.style.border = 'none'
  controlUI.style.outline = 'none'
  controlUI.style.width = '40px'
  controlUI.style.height = '40px'
  controlUI.style.borderRadius = '2px'
  controlUI.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)'
  controlUI.style.cursor = 'pointer'
  controlUI.style.marginRight = '10px'
  controlUI.style.padding = '0px'
  controlUI.title = 'Your Location'
  controlDiv.appendChild(controlUI)

  // Set CSS for the control interior.
  const controlText = document.createElement('div')
  controlText.style.margin = '10px'
  controlText.style.width = '18px'
  controlText.style.height = '100%'
  controlText.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)'
  controlText.style.backgroundSize = '180px 18px'
  controlText.style.backgroundPosition = '0px'
  controlText.style.backgroundRepeat = 'no-repeat'
  controlUI.appendChild(controlText)

  controlUI.addEventListener('click', () => {
    map.zoom = 14
    map.setCenter(latLng)
  })

  map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv)
}
