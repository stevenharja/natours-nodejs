/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic3RldmVuaGFyamEiLCJhIjoiY2tmNWJ1MmhqMGV5eDJ0cnZ1emFnc3FwOSJ9.N6ao4RKQOLikXgaPnSIBeQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/stevenharja/ckf5c6eel15dk19pjaauv0y33',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    //Add marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    bounds.extend(loc.coordinates);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
