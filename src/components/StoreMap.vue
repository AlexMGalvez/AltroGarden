<template>
  <google-map
    :center=location
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 100%"
  >
    <google-marker :position=location />
  </google-map>
</template>

<script>
export default {
  data: () => ({
    location: { lat: 43.45162, lng: -80.4921},
  })
};
</script>
