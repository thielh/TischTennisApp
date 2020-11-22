// 1.) Route definieren 2.) welches Template er da aufrufen soll

  Router.route('/', function () {
    this.render('login');
  });

  Router.route('/neuePlatte', function () {
    this.render('neuePlatte');
  });

  Router.route('/neuesEvent', function () {
    this.render('neuesEvent');
  });

  Router.route('/startseite', function () {
    this.render('startseite');
  });

  Router.route('/googleMaps', function () {
    this.render('googleMaps');
  });


  
Accounts.onLogin(function() {
  Router.go('/startseite');
});