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