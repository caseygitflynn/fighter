(function () {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  ctx.save();
  {
    ctx.fillStyle = "#888888";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.restore();

}());