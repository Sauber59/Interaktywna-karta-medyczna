function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
                
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }


  function onSignIn(googleUser) {
    var x = document.getElementById("index_page");
    var y = document.getElementById("login_page");
    var profile = googleUser.getBasicProfile();
    var gmail = profile.getEmail();
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    alert("Zalogowano");
    x.style.display = "block";
    y.style.display = "none";
    document.getElementById("uzytkownik").innerHTML = "Uzytkownik: " + gmail;
  }


  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    var x = document.getElementById("index_page");
    var y = document.getElementById("login_page");
    x.style.display = "none";
    y.style.display = "block";
    alert("Wylogowano");
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    
    });
  }