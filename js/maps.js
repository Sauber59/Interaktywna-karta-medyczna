// Initialize and add the map
function initMap() {

  var krakow  = {lat: 50.064021, lng: 19.942638};

  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 11, center: krakow});

  }

function listPlace() {
    var krakow  = {lat: 50.064021, lng: 19.942638};
    var rydygiera = { lat: 50.092659, lng: 20.019789 };
    var zeromskiego = { lat: 50.065851, lng: 20.046635 };
    var rafal = { lat: 50.011232, lng: 19.975310 };
    var uniwer = { lat: 50.062044, lng: 19.953011 };
    var ludwik = { lat: 50.063463, lng: 19.950492 };
    var dietla = { lat: 50.063658, lng: 19.927348 };
    var narutowicza = { lat: 50.082896, lng: 19.938399 };
    var paul = { lat: 50.089698, lng: 19.936884 };
    var milit = { lat: 50.076722, lng: 19.934513 };
    var grandego = { lat: 50.047525, lng: 19.945139 };
    var x = document.getElementById("place").value;
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: krakow});
    if (x === 'rydygiera') {
      var marker = new google.maps.Marker({ position: rydygiera, map: map });
    }
    else if (x === 'zeromskiego') {
      var marker1 = new google.maps.Marker({ position: zeromskiego, map: map });
    }
    else if (x === 'rafal') {
      var marker2 = new google.maps.Marker({ position: rafal, map: map });
    }
    else if (x === 'uniwer') {
      var marker3 = new google.maps.Marker({ position: uniwer, map: map });
    }
    else if (x === 'ludwik') {
      var marker4 = new google.maps.Marker({ position: ludwik, map: map });
    }
    else if (x === 'dietla') {
      var marker5 = new google.maps.Marker({ position: dietla, map: map });
    }
    else if (x === 'narutowicza') {
      var marker6 = new google.maps.Marker({ position: narutowicza, map: map });
    }
    else if (x === 'paul') {
      var marker7 = new google.maps.Marker({ position: paul, map: map });
    }
    else if (x === 'milit') {
      var marker8 = new google.maps.Marker({ position: milit, map: map });
    }
    else if (x === 'grandego') {
      var marker9 = new google.maps.Marker({ position: grandego, map: map });
    }
}
  