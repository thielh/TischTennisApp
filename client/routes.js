
// 1.) Route definieren 2.) welches Template er da aufrufen soll

  Router.route('/', function () {
    this.render('/startseite');
  });

  Router.route('/neuePlatte', function () {
    this.render('/neuePlatte');
  });

  Router.route('/neuesEvent', function () {
    this.render('/neuesEvent');
  });