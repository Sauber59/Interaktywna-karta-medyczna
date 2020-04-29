
var platform = new H.service.Platform({
    'apikey': 'bwuQvm6OG-pihgUezkUzpXetTVrnMvnLUgC3ghIVeNo'
});

var maptypes = platform.createDefaultLayers();

var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
      zoom: 10,
      center: { lng: 13.4, lat: 52.51 }
});