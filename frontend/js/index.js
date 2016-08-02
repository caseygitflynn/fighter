(function () {

  var canvas = document.querySelector('canvas');
  Fighter.Assets.loadImage('img/sprites.png', 'sprites', function (image) {
    var game = new Fighter.Game(canvas);
  });
  
}());