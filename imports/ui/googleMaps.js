GoogleMaps.load();

Template.googleMaps.helpers({
    exampleMapOptions: function() {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 8
        };
      }
    }
  });

  Template.googleMaps.onCreated(function() {
    GoogleMaps.ready('newMap', function(map) {
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });