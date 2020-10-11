
  Router.route('/', function () {
    // Template welches er aufrufen soll
    this.render('/neuePlatte');
  });

  // wenn template name = URL ergänzung dann reicht
  Router.route('/zweiteSeite');